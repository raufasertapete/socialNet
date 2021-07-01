import {Button, Card,Container,Form} from "react-bootstrap";

import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {setText,uploadPost} from '../Reducer/PostReducer'
import {selectLogininformation} from '../Reducer/LoginReducer'

function Post(name) {
   
    return(
        
            
                <Card style={{ width: '30rem' }}>
                    <Card.Body body className="text-right">
                        <Card.Title>{name.firstname} {name.name}</Card.Title>
                       
                        <Card.Text className="text-left text-md-right">
                          {name.text}
                        </Card.Text>
                        <div className="btn-toolbar pull-right">
                            <Button className="btn mr-2">Delete</Button>
                        
                            <Button> Update</Button>
                        </div>
                        
                    </Card.Body>
                </Card>
        
    );
}

function NewPost() {
    let dispatch = useDispatch();
    let login_info = useSelector(selectLogininformation)
    const text = "What's up right now, " + login_info.firstname + "?";
    return(
        
            <Container >
                <Card style={{ width: '30rem' }}>
                    <Card.Body body className="text-right">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Post</Form.Label>
                            <Form.Control  placeholder={text} onChange={e => dispatch(setText(e.target.value))}/>
                            
                        </Form.Group>
                    </Form>
                        <div className="btn-toolbar pull-right">
                            <Button className="btn mr-2" onClick={() => dispatch(uploadPost())}>Send</Button>
                        
                        </div>
                        
                    </Card.Body>
                </Card>
            </Container>
        
    );
}

export {Post,NewPost};