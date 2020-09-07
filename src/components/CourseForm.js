import React from 'react';
import { Form, Button} from 'react-bootstrap';

const CourseForm = ({ courseDepartments, onSubmitCourse, onCourseDeptChanged, onCourseNumberChanged }) => {
  return (
    <Form onSubmit={onSubmitCourse} inline>
      <Form.Group controlId="departments">
        <Form.Control className="mr-1" as="select" onChange={onCourseDeptChanged}>
          <option value="">Course Department</option>
          {courseDepartments.map((course) => <option key={course.id} value={course.name}>{course.name}</option>)}
        </Form.Control>
        <Form.Control className="ml-1 mr-1" type="text" onChange={onCourseNumberChanged} placeholder="Course Number" />
        <Button className="ml-1" variant="light" type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default CourseForm;