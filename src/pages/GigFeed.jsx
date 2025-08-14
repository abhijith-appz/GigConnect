import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Container, Row, Col, Spinner } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

export default function GigFeed() {
  const [gigs, setGigs] = useState([]);
  const [meta, setMeta] = useState({ page: 1, total: 0 });
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView({ threshold: 1 });

  // Fetch gigs
  const fetchGigs = async (page) => {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:5000/api/gigs?page=${page}`);
      if (page === 1) {
        setGigs(res.data.gigs);
      } else {
        setGigs((prev) => [...prev, ...res.data.gigs]);
      }
      setMeta({ page, total: res.data.total });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchGigs(1);
  }, []);

  // Load next page when inView changes
  useEffect(() => {
    if (inView && !loading && gigs.length < meta.total) {
      fetchGigs(meta.page + 1);
    }
  }, [inView]);

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Available Gigs</h2>
      <Row>
        {gigs.map((gig, i) => (
          <Col md={4} className="mb-4" key={gig._id || i}>
            <Card>
              <Card.Body>
                <Card.Title>{gig.title}</Card.Title>
                <Card.Text>{gig.description}</Card.Text>
                <Card.Text>
                  <strong>Price:</strong> ₹{gig.price}
                </Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Loader */}
      {loading && (
        <div className="text-center my-3">
          <Spinner animation="border" />
        </div>
      )}

      {/* Scroll Trigger */}
      <div ref={ref} style={{ height: "30px" }}></div>
    </Container>
  );
}
