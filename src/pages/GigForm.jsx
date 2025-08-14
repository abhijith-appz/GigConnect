import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export default function GigForm() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    deliveryTime: "",
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Gig Data Submitted:", formData);
    alert("Gig Posted Successfully! (Dummy)");
    setFormData({
      title: "",
      category: "",
      description: "",
      price: "",
      deliveryTime: "",
      image: null
    });
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-lg border-0 p-4">
            <h3 className="mb-4 fw-bold text-center">Post a New Gig</h3>
            <Form onSubmit={handleSubmit}>
              
              {/* Title */}
              <Form.Group className="mb-3">
                <Form.Label>Gig Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter gig title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Category */}
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Web Development">Web Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                </Form.Select>
              </Form.Group>

              {/* Description */}
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Describe your gig"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Price */}
              <Form.Group className="mb-3">
                <Form.Label>Price (₹)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Delivery Time */}
              <Form.Group className="mb-3">
                <Form.Label>Delivery Time (Days)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter delivery time"
                  name="deliveryTime"
                  value={formData.deliveryTime}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Image Upload */}
              <Form.Group className="mb-3">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                />
              </Form.Group>

              {/* Submit Button */}
              <div className="text-center">
                <Button variant="success" type="submit" className="px-5">
                  Post Gig
                </Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
