import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './components/Form'
import Calculator from './components/Calculator';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Col, Table } from 'react-bootstrap';
import './App.css'
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Tables from './components/Tables';
import data from './components/data.json';
import Table2 from './components/Table2';
import Viewdetails from './components/Viewdetails';


const App = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [sideComponent, setSideComponent] = useState(null);


  console.log(selectedComponent)
  return (
    <Router>
      <Header selectedComponent={selectedComponent} setSelectedComponent={setSelectedComponent} />
      <div className='d-flex d-lg-none body'>

        {selectedComponent === 'Form' && <Form />}
        {selectedComponent === 'Calculator' && <Calculator />}
        {selectedComponent === 'Dashboard' && <Dashboard />}
        {selectedComponent === 'Table' && <Tables />}
        
      </div>
      <div className='d-none d-lg-inline-flex'>
        <Col xs={2} className=''><Sidebar sideComponent={sideComponent} setSideComponent={setSideComponent} />
        </Col>
        <Col xs={10} className='d-none d-lg-inline-flex body just'>
          <Routes>
            <Route path='/Dashboard' element={<Dashboard />}></Route>
            <Route path='/calculator' element={<Calculator />}></Route>
            <Route path='/form' element={<Form />}></Route>
            <Route path='/table' element={<Tables/>}></Route>
            <Route path='/user/userId' element={<Viewdetails />}></Route>
            <Route path='/Table2' element={<Table2/>}></Route>
          </Routes>
        </Col>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
