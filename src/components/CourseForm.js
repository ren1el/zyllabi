import React from 'react';
import { Form, Button} from 'react-bootstrap';

const CourseForm = ({ courseDepartments, onSubmitCourse, onCourseDeptChanged, onCourseNumberChanged }) => {
  return (
    <Form className="home-form" onSubmit={onSubmitCourse} inline>
      <Form.Group className="home-form-group" controlId="departments">
        <Form.Control className="home-form-department" as="select" onChange={onCourseDeptChanged}>
          <option value="">Course Department</option>
          {courseDepartments.map((course) => <option key={course.id} value={course.name}>{course.name}</option>)}
        </Form.Control>
        <Form.Control className="home-form-course-number" type="text" onChange={onCourseNumberChanged} placeholder="Course Number" />
        <Button className="home-form-submit" variant="light" type="submit">
          Submit
        </Button>
      </Form.Group>
    </Form>
  );
};

export default CourseForm;