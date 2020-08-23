import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Topbar from './components/Topbar';
import Home from './components/Home';
import Syllabus from './components/Syllabus';
import courseDepartmentService from './services/courseDepartmentService';

const App = () => {
  const [courseDepartments, setCourses] = useState([{ id: 0, value: '', courseString: 'Course Department' }]);
  const [courseDept, setCourseDept] = useState('');
  const [courseNumber, setCourseNumber] = useState('');
  const history = useHistory();

  useEffect(() => {
    courseDepartmentService.getAllDepartments()
      .then((courseDepartments) => setCourses(courseDepartments));
  }, []);

  const onCourseDeptChanged = (event) => {
    event.preventDefault();
    setCourseDept(event.target.value);
  };

  const onCourseNumberChanged = (event) => {
    event.preventDefault();
    setCourseNumber(event.target.value);
  };

  const onSubmitCourse = (event) => {
    event.preventDefault();
    if(courseDept === '' && courseNumber === '') console.log('Please add BOTH a course department and a course number');
    else if(courseDept === '') console.log('Please add a course department');
    else if(courseNumber === '') console.log('Please add a course number');
    else {
      console.log(`courseDept: ${courseDept} / courseNumber: ${courseNumber}`);
      history.push(`/syllabi/${courseDept}/${courseNumber}`);
    }
  };

  return (
    <div className='content-wrapper'>
      <Topbar />
      <Switch>
        <Route path='/syllabi/:courseDept/:courseNumber'>
          <Syllabus courseDepartments={courseDepartments} />
        </Route>
        <Route path='/'>
          <Home
            courseDepartments={courseDepartments}
            onCourseDeptChanged={onCourseDeptChanged} 
            onCourseNumberChanged={onCourseNumberChanged} 
            onSubmitCourse={onSubmitCourse} />
        </Route>
      </Switch>
      <div className='footer'>footer</div>
    </div>
  );
};

export default App;