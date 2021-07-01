import './App.css';
import { Navbar,Container,InputGroup,Form,FormControl,Button} from 'react-bootstrap';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { selectLogininformation,getlogin,setEmail,setPassword} from './Reducer/LoginReducer';



const LoginButton = () => {
  let dispatch = useDispatch();

  return (
    <Button type="submit" onClick={() => dispatch(getlogin())}>Login</Button>
  )
}

export const Login = () => {
  let dispatch = useDispatch();
    const login_information = useSelector(selectLogininformation);
   
    if(!login_information.logged_in){
    return (
<Container>
      <Form inline>
    <InputGroup>
    
      <FormControl
        placeholder="Email"
        aria-label="Email"
        aria-describedby="basic-addon1"
        onChange={e => dispatch(setEmail(e.target.value))}
      />
    </InputGroup>
  </Form>
  <Form inline>
    <FormControl 
      type="password" 
      placeholder="Password" 
      className=" mr-sm-2" 
      onChange={e => dispatch(setPassword(e.target.value))}
    />
    
  </Form>
    <LoginButton/>
  </Container>
    );
    }
    else {
        return (
        <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a >{login_information.firstname} {login_information.name}</a>
    </Navbar.Text>
  </Navbar.Collapse>
    
    );
        }
}

export default Login;