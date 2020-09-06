import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Topbar from './components/Topbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Syllabi from './components/Syllabi';
import Departments from './components/Departments';
import Footer from './components/Footer';

const App = () => {
  const [user, setUser] = useState(null);
  const [isUserResolved, setIsUserResolved] = useState(false);

  useEffect(() => {
    if(window.gapi) {
      window.gapi.load('auth2', () => {
        const params = {
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID //eslint-disable-line
        };

        window.gapi.auth2.init(params)
          .then(() => {
            const googleAuth = window.gapi.auth2.getAuthInstance();

            if(googleAuth.isSignedIn.get()) {
              const googleUserProfile = googleAuth.currentUser.get().getBasicProfile();

              setUser({
                id: googleUserProfile.getId(),
                idToken: googleAuth.currentUser.get().getAuthResponse().id_token,
                name: googleUserProfile.getGivenName(),
                email: googleUserProfile.getEmail()
              });
            }

            setIsUserResolved(true);
          });
      });
    }
  }, []);

  return (
    <div className='content-wrapper'>
      <Topbar user={user} setUser={setUser} isUserResolved={isUserResolved} />
      <Switch>
        <Route path='/syllabi/:courseDept/:courseNumber'>
          <Syllabi user={user} />
        </Route>
        <Route path='/profile'>
          <Profile user={user} isUserResolved={isUserResolved} />
        </Route>
        <Route path='/departments'>
          <Departments />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;