import './App.css';
import {Navbar, Nav} from 'react-bootstrap';
import React from 'react'
import Login from './Login.jsx';
import  {LinkContainer} from "react-router-bootstrap";
import { useSelector } from 'react-redux';
import {selectLogininformation} from './Reducer/LoginReducer'
const Signup =() => {
  const login_information = useSelector(selectLogininformation);
  if(!login_information.logged_in) {
    return (
      <LinkContainer to="/signup">
                <Nav.Link >Signup</Nav.Link>
      </LinkContainer>
    );
  }
  else 
  {
    return (<></>);
  }
}
const Navigation= () => {
  
    return (
      <Navbar collapseOnSelect={false} fixed='top' expand='sm' bg='dark' variant='dark'>
        
          <Nav>
            <LinkContainer to="/posts">
              <Nav.Link>Posts</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/chat">
              <Nav.Link>Chat</Nav.Link>
            </LinkContainer>
            <Signup/>
          </Nav>
  
        
        
      <Login/>
      </Navbar>
    );
  }
  
  export default Navigation;