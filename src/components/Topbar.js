import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Topbar = ({ user, setUser, findingUser }) => {
  const onLoginClicked = async (event) => {
    event.preventDefault();

    if(window.gapi) {
      window.gapi.load('auth2', async () => {
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
                name: googleUserProfile.getName(),
                email: googleUserProfile.getEmail()
              });
            });
        }
      });
    }
  };

  const onLogoutClicked = async (event) => {
    event.preventDefault();

    if (window.gapi) {
      const googleAuth = window.gapi.auth2.getAuthInstance();
      if (googleAuth!= null) {
        googleAuth.signOut()
          .then(googleAuth.disconnect())
          .then(setUser(null));
      }
    }
  };

  if(user) {
    return (
      <div className='topbar-wrapper'>
        <div className='topbar'>
          <h1 className='topbar-header'><Link to='/'>Zyllabi</Link></h1>
          <span>
            Logged in As: {user.name}
            <button className='btn btn-dark btn-sm ml-1' onClick={onLogoutClicked}>Logout</button>
          </span>

        </div>
      </div>
    );
  }

  if(!user && findingUser) {
    return (
      <div className='topbar-wrapper'>
        <div className='topbar'>
          <h1 className='topbar-header'><Link to='/'>Zyllabi</Link></h1>
        </div>
      </div>
    );
  }

  return (
    <div className='topbar-wrapper'>
      <div className='topbar'>
        <h1 className='topbar-header'><Link to='/'>Zyllabi</Link></h1>
        <button className='btn btn-dark btn-sm' onClick={onLoginClicked}>Login</button>
      </div>
    </div>
  );
};

export default Topbar;