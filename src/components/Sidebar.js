import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from '@iconify/react';


const Sidebar = ({ setSideComponent }) => {
  const handleComponentClick = (component) => {
    setSideComponent(component);
  };

  return (    
    
    <div className='sidebar sidebar-border text-white ps-0 h-100 d-flex flex-column text-dark'>
      <Link to="/calculator" className=' py-3 text-dark text-decoration-none' style={{ cursor: 'pointer' }}>
        <span className='p-3 fs-5'>    Calculator</span>
      </Link>
      <Link to="/form" className=' py-3 span  text-dark text-decoration-none' style={{ cursor: 'pointer' }}>
        <span className='p-3 fs-5'>Form</span>
      </Link>
      <Link to="/dashboard" className=' py-3 text-dark  text-decoration-none' style={{ cursor: 'pointer' }}>
        <span className='p-3 fs-5'>Dashboard</span>
      </Link>
      <Link to="/table" className=' py-3 text-dark  text-decoration-none' style={{ cursor: 'pointer' }}>
        <span className='p-3 fs-5'>Table</span>
      </Link>
      <Link to="/Table2" className=' py-3  text-dark text-decoration-none' style={{ cursor: 'pointer' }}>
        <span className='p-3 fs-5'>Table2</span>
      </Link>
      <Link to="/about" className=' py-3  text-dark text-decoration-none' style={{ cursor: 'pointer' }}>
        <span className='p-3 fs-5'>About</span>
      </Link>
    </div>
  );
};

export default Sidebar;
