import './App.css';
import { Route,Switch } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import Signup from './Signup/Signup';
import Chats from './Chat/Chat';
import Posts from './Posts/Posts.jsx';
import React from 'react'
const App = () => {
  return (
    <div className="App">
      <Navigation/> 
      <br/> 
      <br/> 
      <br/> 
      <br/> 
      <br/>        
      <Switch>                
        <Route path='/Signup' component={Signup}/>  
        <Route path='/Chat' component={Chats}/>                
         <Route path='/' component={Posts}/>            
      </Switch>
    </div>
  );
}

export default App;
