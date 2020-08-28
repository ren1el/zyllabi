import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Topbar from './components/Topbar';
import Home from './components/Home';
import Syllabi from './components/Syllabi';
import Add from './components/Add';
import syllabiService from './services/syllabiService';
import departmentService from './services/departmentService';

const App = () => {
  const [courseDepartments, setCourses] = useState([{ id: 0, value: '', courseString: 'Course Department' }]);
  const [courseDept, setCourseDept] = useState('');
  const [courseNumber, setCourseNumber] = useState('');
  const history = useHistory();

  useEffect(() => {
    departmentService.getAllDepartments()
      .then((courseDepartments) => {
        courseDepartments.sort((a, b) => {
          return a.name > b.name ? 1: -1;
        });
        setCourses(courseDepartments.sort((a, b) => a.name - b.name));
      });
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

  const onSubmitSyllabus = async (newSyllabus) => {
    await syllabiService.addSyllabus(newSyllabus);
    history.goBack();
  };

  return (
    <div className='content-wrapper'>
      <Topbar />
      <Switch>
        <Route path='/syllabi/:courseDept/:courseNumber/add'>
          <Add onSubmitSyllabus={onSubmitSyllabus} />
        </Route>
        <Route path='/syllabi/:courseDept/:courseNumber'>
          <Syllabi />
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