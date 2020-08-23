import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className='topbar-wrapper'>
      <div className='topbar'>
        <h1 className='topbar-header'><Link to='/'>Zyllabi</Link></h1>
        <button className='btn btn-dark btn-sm'>+ Syllabus</button>
      </div>
    </div>
  );
};

export default Topbar;