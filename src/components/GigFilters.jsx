import React, { useState, useEffect } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

export default function GigFilters({ value, onChange }) {
  const [local, setLocal] = useState(value);
  useEffect(()=> setLocal(value), [value]);

  const update = (k, v) => {
    const next = { ...local, [k]: v };
    setLocal(next);
    onChange(next);
  };

  return (
    <Row className="g-3">
      <Col md={3}>
        <Form.Control placeholder="Location (city)"
          value={local.location||''} onChange={e=>update('location', e.target.value)} />
      </Col>
      <Col md={3}>
        <Form.Control type="number" placeholder="Min Price"
          value={local.minPrice||''} onChange={e=>update('minPrice', e.target.value)} />
      </Col>
      <Col md={3}>
        <Form.Control type="number" placeholder="Max Price"
          value={local.maxPrice||''} onChange={e=>update('maxPrice', e.target.value)} />
      </Col>
      <Col md={3}>
        <Form.Select value={local.rating||''} onChange={e=>update('rating', e.target.value)}>
          <option value="">Rating</option>
          <option value="4.5">4.5+</option>
          <option value="4">4.0+</option>
          <option value="3.5">3.5+</option>
        </Form.Select>
      </Col>
      <Col md={12}>
        <Form.Control placeholder="Skills (comma separated)"
          value={local.skills||''} onChange={e=>update('skills', e.target.value)} />
      </Col>
    </Row>
  );
}
