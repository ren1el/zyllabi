import React from 'react';
import { Button } from 'react-bootstrap';

const Syllabus = ({ syllabus }) => {
  return (
    <div className="syllabus">
      <div className="syllabus-heading">
        <span>{syllabus.instructor} ({syllabus.quarter} {syllabus.year})</span>
        <Button variant="outline-danger" size="sm">
          Report
        </Button>
      </div>
      <div className="syllabus-embed">
        <iframe title={syllabus.id} className="syllabi-embed" src={syllabus.url} />
      </div>
    </div>
  );
};

export default Syllabus;