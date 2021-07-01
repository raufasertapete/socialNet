import { InputGroup, FormControl, Container,Button} from "react-bootstrap";
import React from 'react'
import {useDispatch } from 'react-redux';
import {createsignUp,setName,setFirstName,setEmail,setPassword} from '../Reducer/LoginReducer.jsx'
function Signup() {
    let dispatch = useDispatch();
    return (
        <div>
            <Container fluid>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="First Name"
            aria-label="Firs Name"
            aria-describedby="basic-addon1"
            onChange={e => dispatch(setFirstName(e.target.value))} 

          />
        </InputGroup>
      
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Last Name"
            aria-label="Last Name"
            aria-describedby="basic-addon2"
            onChange={e => dispatch(setName(e.target.value))} 
          />
        </InputGroup>
      
        <InputGroup className="mb-3">
    
          <FormControl  
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon3"
            onChange={e => dispatch(setEmail(e.target.value))} 
          />
        </InputGroup>
        <InputGroup className="mb-3">
    
          <FormControl  
          type="password"
            placeholder="Password"
            aria-label="Email"
            aria-describedby="basic-addon3" 
            onChange={e => dispatch(setPassword(e.target.value))} 
            />
        </InputGroup>
        <InputGroup className="mb-3">
        <Button variant="primary" type="submit" onClick={()=>dispatch(createsignUp())}>
             Submit
        </Button>
          
        </InputGroup>
      
        </Container>
      </div>
    );
  }
  
  export default Signup;