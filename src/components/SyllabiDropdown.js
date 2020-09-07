import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const SyllabiDropdown = ({ syllabi, syllabus, setSyllabus }) => {
  return (
    <DropdownButton className="mr-2" title={`${syllabus.instructor} - ${syllabus.quarter} ${syllabus.year}`}>
      {syllabi.map((syllabus) => <Dropdown.Item key={syllabus.id} onClick={() => setSyllabus(syllabus)}>{syllabus.instructor} - {syllabus.quarter} {syllabus.year}</Dropdown.Item>)}
    </DropdownButton>
  );
};

export default SyllabiDropdown;