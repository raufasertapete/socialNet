 import {Post,NewPost} from "./Post";
 import {Container,Alert } from 'react-bootstrap'
 import React from 'react'
 import { useDispatch,useSelector } from "react-redux";
 import { getPosts,selectPostinformation } from "../Reducer/PostReducer";
 import {selectLogininformation} from "../Reducer/LoginReducer";
const Posts = () => {
    let dispatch = useDispatch();
    dispatch(getPosts());
    let login_information = useSelector(selectLogininformation);
    if(login_information.logged_in) {
      return (

        <div>
            <NewPost/>
            <PostList/>

        </div>
      );
    }
    else 
    {
      return (
        <Alert variant='warning'>
        Please log in!
      </Alert>
      )
    }
}

const PostList= () =>  {

    let post_information = useSelector(selectPostinformation); //Triggers continous rerendering. Problem could be solved in v0.2
    console.log(post_information);
    
    return ( 
      <Container >
  
        {post_information.posts.map((e,k) => <Post key = {k} name={e.name} firstname={e.firstname} text={e.text}/>)}
      </Container>
      )

}
  
  export default Posts;