import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



function Canvas({ setSelectedComponent }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
    handleClose();
  };

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        <FontAwesomeIcon icon={faBars} size="lg" className="menu-icon" />
      </Button>

      <Offcanvas show={show} onHide={handleClose} className="canvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Titles</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
           <div className='d-flex flex-column '>
            <span  onClick={() => handleComponentClick('Calculator')} className='fst py-2'>
              Calculator
            </span>
            <span  onClick={() => handleComponentClick('Form')} className='fst py-2'>
              Form
            </span>
            <span onClick={() => handleComponentClick('Dashboard')} className=' py-2'>DashBoard</span>
            <span onClick={() => handleComponentClick('Table')} className=' py-2'>Table</span>
            <span onClick={() => handleComponentClick('Table2')} className='py-2'>Table2</span>
            <span className='py-2'>About</span>
          </div> 
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Canvas;
