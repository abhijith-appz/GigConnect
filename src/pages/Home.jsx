// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";

// export default function Home() {
//   return (
//     <Container className="mt-5 text-center">
//       <Row>
//         <Col>
//           <h1>Welcome to GigConnect</h1>
//           <p>
//             A platform to connect clients with skilled freelancers in your local area.
//           </p>
//           <Button variant="primary" href="/gigs">Browse Gigs</Button>
//         </Col>
//       </Row>
//     </Container>
//   );
// }



import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./Home.css";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center text-center">
        <Container>
          <h1 className="display-4 fw-bold text-light">
            Find Local Talent or Get Hired – Fast!
          </h1>
          <p className="lead text-light">
            GigConnect helps you connect with the best freelancers in your city.
          </p>
          <div className="mt-4">
            <Button variant="success" size="lg" className="me-3">
              Find Gigs
            </Button>
            <Button variant="success" size="lg">
              Post a Gig
            </Button>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-success">
        <Container>
          <Row className="text-center">
            <Col md={3}>
              <Card className="p-3 shadow-sm">
                <Card.Body>
                  <h5>Hire Local Talent</h5>
                  <p>Connect with skilled freelancers near you.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="p-3 shadow-sm">
                <Card.Body>
                  <h5>Post a Gig Easily</h5>
                  <p>Create gigs in minutes and start receiving offers.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="p-3 shadow-sm">
                <Card.Body>
                  <h5>Chat in Real-time</h5>
                  <p>Communicate directly through our built-in chat.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="p-3 shadow-sm">
                <Card.Body>
                  <h5>Secure Payments</h5>
                  <p>Pay safely through our trusted payment partners.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-4 bg-dark text-light text-center">
        <Container>
          <p className="mb-0">
            © {new Date().getFullYear()} GigConnect. All rights reserved.
          </p>
        </Container>
      </footer>
    </div>
  );
}
