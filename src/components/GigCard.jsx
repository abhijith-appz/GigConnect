import React from 'react';
import { Card, Badge } from 'react-bootstrap';

export default function GigCard({ gig }) {
  return (
    <Card className="mb-3 shadow-sm border-0">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <h5 className="mb-1">{gig.title}</h5>
            <div className="text-muted small">
              {gig.location} • ⭐ {gig.rating?.toFixed?.(1) ?? 'New'}
            </div>
            <div className="mt-2">
              {(gig.skills || []).slice(0,5).map((s, i) => (
                <Badge bg="info" key={i} className="me-2">{s}</Badge>
              ))}
            </div>
          </div>
          <div className="text-end">
            <div className="fw-bold">₹ {gig.priceMin} – {gig.priceMax}</div>
            <div className="small text-muted">{gig.deliveryTime} days</div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
