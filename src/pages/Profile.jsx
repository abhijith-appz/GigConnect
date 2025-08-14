import React from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";

export default function Profile() {
  // Dummy data (Backend se replace karna baad me)
  const user = {
    name: "Mohammad Aaftab",
    title: "Frontend Developer | MERN Stack",
    photo: "https://via.placeholder.com/180",
    about: "I am a passionate frontend developer with expertise in React, JavaScript, Bootstrap, API integration, and building responsive user interfaces. I enjoy working on challenging projects and delivering high-quality results.",
    skills: ["React", "JavaScript", "Bootstrap", "HTML", "CSS", "API Integration", "Git", "REST API"],
    email: "mohammad@example.com",
    phone: "+91 9876543210",
    gigs: [
      { title: "Real Estate Platform", description: "Developed property listing and booking pages with React and API integration." },
      { title: "Task Management App", description: "Built a full-featured task management dashboard using React and Bootstrap." }
    ]
  };

  return (
    <Container className="mt-5">
      <Row>
        {/* Profile Sidebar */}
        <Col md={4}>
          <Card className="shadow-lg border-0 text-center p-3">
            <div className="d-flex justify-content-center">
              <Card.Img
                src={user.photo}
                alt="Profile"
                className="rounded-circle border border-3 border-primary"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
            </div>
            <Card.Body>
              <Card.Title className="fw-bold fs-4">{user.name}</Card.Title>
              <Card.Subtitle className="text-muted mb-3">{user.title}</Card.Subtitle>
              <hr />
              <div className="text-start">
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
              </div>
              <Button variant="primary" size="sm" className="mt-2">Edit Profile</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Main Content */}
        <Col md={8}>
          {/* About Section */}
          <Card className="shadow-sm border-0 mb-4 p-3">
            <h5 className="fw-bold">About Me</h5>
            <p className="text-muted">{user.about}</p>
          </Card>

          {/* Skills Section */}
          <Card className="shadow-sm border-0 mb-4 p-3">
            <h5 className="fw-bold mb-3">Skills</h5>
            {user.skills.map((skill, index) => (
              <Badge key={index} bg="info" className="me-2 mb-2 p-2">{skill}</Badge>
            ))}
          </Card>

          {/* Gigs/Projects Section */}
          <Card className="shadow-sm border-0 p-3">
            <h5 className="fw-bold mb-3">My Projects</h5>
            {user.gigs.map((gig, index) => (
              <div key={index} className="mb-3">
                <h6 className="fw-semibold">{gig.title}</h6>
                <p className="text-muted">{gig.description}</p>
              </div>
            ))}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
