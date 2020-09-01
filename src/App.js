import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Topbar from './components/Topbar';
import Home from './components/Home';
import Syllabi from './components/Syllabi';
import departmentService from './services/departmentService';

const App = () => {
  const [courseDepartments, setCourses] = useState([{ id: 0, value: '', courseString: 'Course Department' }]);
  const [courseDept, setCourseDept] = useState('');
  const [courseNumber, setCourseNumber] = useState('');
  const [findingUser, setFindingUser] = useState(true);
  const [user, setUser] = useState(null);
  // const [googleAuth, setGoogleAuth] = useState(null);
  // const [isSignedIn, setIsSignedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if(window.gapi) {
      window.gapi.load('auth2', () => {
        const params = {
          client_id: '1089667889963-mrgklgo4nv76jinlt2bc1aiaj8iida48.apps.googleusercontent.com'
        };

        window.gapi.auth2.init(params)
          .then(() => {
            const googleAuth = window.gapi.auth2.getAuthInstance();
            if(googleAuth.isSignedIn.get()) {
              const googleUserProfile = googleAuth.currentUser.get().getBasicProfile();
              setUser({
                id: googleUserProfile.getId(),
                name: googleUserProfile.getName(),
                email: googleUserProfile.getEmail()
              });
            }
            setFindingUser(false);
          });
      });
    }
  }, []);

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

  return (
    <div className='content-wrapper'>
      <Topbar user={user} setUser={setUser} findingUser={findingUser} />
      <Switch>
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