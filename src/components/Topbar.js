import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Dropdown } from 'react-bootstrap';
import Loading from './Loading';

const Topbar = ({ user, setUser, isUserResolved }) => {
  const history = useHistory();

  const onLoginClicked = async (event) => {
    event.preventDefault();

    if(window.gapi) {
      window.gapi.load('auth2', () => {
        const googleAuth = window.gapi.auth2.getAuthInstance();
        if(googleAuth != null) {
          const signInOptions = {
            scope: 'profile email'
          };

          googleAuth.signIn(signInOptions)
            .then((res) => {
              const googleUserProfile = res.getBasicProfile();
              setUser({
                id: googleUserProfile.getId(),
                idToken: googleAuth.currentUser.get().getAuthResponse().id_token,
                name: googleUserProfile.getName(),
                email: googleUserProfile.getEmail()
              });
            });
        }
      });
    }
  };

  const onLogoutClicked = (event) => {
    event.preventDefault();
    
    if(window.gapi) {
      const googleAuth = window.gapi.auth2.getAuthInstance();

      if (googleAuth!= null) {
        googleAuth.signOut()
          .then(googleAuth.disconnect())
          .then(setUser(null))
          .then(history.push('/'));
      }
    }
  };

  return (
    <div className="topbar-wrapper">
      <div className="topbar">
        <h1 className="topbar-header"><Link to="/">Zyllabi</Link></h1>
        <div className="user">
          {!isUserResolved && 
            <div className="loading-center">
              <Loading size="sm" />
            </div>
          }
            
          {!user && isUserResolved && 
            <Button variant="outline-dark" onClick={onLoginClicked} size="sm">Login</Button>
          }

          {user && isUserResolved &&
            <Dropdown>
              <Dropdown.Toggle variant="outline-dark" size="sm">
                User{' '}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Header><strong>{user.name}</strong></Dropdown.Header>
                <Dropdown.Item onClick={() => history.push('/')}>Home</Dropdown.Item>
                <Dropdown.Item onClick={() => history.push('/profile')}>Profile</Dropdown.Item>
                <Dropdown.Item onClick={() => history.push('/departments')}>Database</Dropdown.Item>
                <Dropdown.Item onClick={onLogoutClicked}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          }
        </div>
      </div>
    </div>
  );
};

export default Topbar;