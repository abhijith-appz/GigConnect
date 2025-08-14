import React, { useMemo } from 'react';
import debounce from 'lodash.debounce';
import { Form } from 'react-bootstrap';

export default function SearchBox({ onChange, defaultValue='' }) {
  const debounced = useMemo(() => debounce(v => onChange(v), 400), [onChange]);
  return (
    <Form.Control
      placeholder="Search by title, skill, or client…"
      defaultValue={defaultValue}
      onChange={(e)=>debounced(e.target.value)}
    />
  );
}
