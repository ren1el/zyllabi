import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/Home.css';

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
    <div className='topbar-wrapper'>
      <div className='topbar'>
        <h1 className='topbar-header'><Link to='/'>Zyllabi</Link></h1>
        {!isUserResolved && 
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>}
        {!user && isUserResolved && <button className='btn btn-dark btn-sm' onClick={onLoginClicked}>Login</button>}
        {user && isUserResolved &&
          <span>
            Logged in As: <Link to='/profile'>{user.name}</Link>
            <button className='btn btn-dark btn-sm ml-1' onClick={onLogoutClicked}>Logout</button>
          </span>}
      </div>
    </div>
  );
};

export default Topbar;