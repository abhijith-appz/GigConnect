import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, ListGroup, Form, Button } from "react-bootstrap";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export default function Chat() {
  const [conversations, setConversations] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [typingUser, setTypingUser] = useState(null);
  const typingTimeoutRef = useRef(null);

  // Join chat & listen
  useEffect(() => {
    socket.on("message", (msg) => {
      if (msg.conversationId === activeId) {
        setMessages((prev) => [...prev, msg]);
      }
    });

    socket.on("typing", ({ conversationId, user }) => {
      if (conversationId === activeId && user !== "Me") {
        setTypingUser(user);
        clearTimeout(typingTimeoutRef.current);
        typingTimeoutRef.current = setTimeout(
          () => setTypingUser(null),
          2000
        );
      }
    });

    return () => {
      socket.off("message");
      socket.off("typing");
    };
  }, [activeId]);

  // Send message
  const sendMessage = () => {
    if (text.trim() && activeId) {
      const msg = {
        conversationId: activeId,
        user: "Me",
        text
      };
      socket.emit("message", msg);
      socket.emit("typing:stop", { conversationId: activeId });
      setMessages((prev) => [...prev, msg]);
      setText("");
    }
  };

  // Typing emit
  const handleTyping = (e) => {
    setText(e.target.value);
    if (activeId) {
      socket.emit("typing:start", { conversationId: activeId, user: "Me" });
    }
  };

  return (
    <Container fluid className="mt-3">
      <Row>
        {/* Conversation List */}
        <Col md={3}>
          <ListGroup>
            {conversations.map((conv) => (
              <ListGroup.Item
                key={conv.id}
                action
                active={activeId === conv.id}
                onClick={() => {
                  setActiveId(conv.id);
                  setMessages([]); // Fetch from backend
                }}
              >
                {conv.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        {/* Chat Box */}
        <Col md={9}>
          <div
            style={{
              height: "400px",
              overflowY: "auto",
              border: "1px solid #ccc",
              padding: "10px"
            }}
          >
            {messages.map((m, i) => (
              <div key={i}>
                <strong>{m.user}: </strong>
                {m.text}
              </div>
            ))}
            {typingUser && (
              <div className="text-muted small">{typingUser} is typing...</div>
            )}
          </div>
          <Form className="d-flex mt-2" onSubmit={(e) => e.preventDefault()}>
            <Form.Control
              type="text"
              placeholder="Type a message..."
              value={text}
              onChange={handleTyping}
            />
            <Button variant="success" onClick={sendMessage} className="ms-2">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
