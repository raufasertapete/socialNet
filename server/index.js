// server/index.js

import { addUser,getUser, getUsers,login,updatePost,deletePost,getPost,getPosts,createPost} from "./db.js";

import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.post("/login", (req, res) => {

    if(req.body.email==null||req.body.password==null) {
        res.json({"id": 0, "APIKey": 0})
    }
    else {
    login(req.body.email,req.body.password).then((result) => {
        var message = ''
        if(result!=null) {
        message = {result}
        }
        else {
        message = { "uid" : 0, "ApiKey" : 0 }
        }
        res.json(message);
    })}
  });

app.put("/users", (req, res) => {
    //Creates a new User
    if(req.body.email==null||req.body.password==null||req.body.name==null||req.body.firstname==null) {
        res.status = 400;
        res.json({"uid": 0});
    }
    else {
        addUser(req.body.name,req.body.firstname,req.body.email,req.body.password).then((result) => {
            res.json({"uid":result});
        })
    }
    //res.json({ message: "Hello from server!" });
});

app.get("/users", (req, res) => {
    //Returns a list of all users
   if(req.query.uid!= null){
   getUser(parseInt(req.query.uid)).then((result) => {
        var message = ''
        if(result!=null) {
        message = {'users': result}
        }
        else {
        message = {'users': {}}
        }
        res.json(message);
    })}
    else {
        getUsers().then((result) => {
            var message = ''
            if(result!=null) {
            message = {'users': result}
            }
            else {
            message = {'users': {}}
            }
            res.json(message);
        })
    }
    //console.log(message2);
    //res2.json({ message: message2});
});

app.put("/posts", (req, res) => {
    //Edit or Delete a Post
    //Returns Status and Post ID
    if(req.body.uid!=null||req.body.text!=null)
    {
        createPost(req.body.uid,req.body.text).then((result)=>{
            res.json({"pid":result});
        })
    }
    else{
        res.json({"pid":0});
    }
});

app.post("/posts", (req, res) => {
    //Edit or Delete a Post
    //Returns Status and Post ID
    if(req.body.uid!=null||req.body.text!=null,req.body.pid!=null)
    {
        if(req.body.text!=""){
            updatePost(req.body.pid,req.body.uid,req.body.text).then((result)=>{
                res.json({"pid":result});
            })
        }
        else{
            deletePost(req.body.pid,req.body.pid).then((result)=>{
                res.json({"pid":result});
            })
        }
    }
    else{
        res.json({"pid":0});
    }
});

app.get("/posts", (req, res) => {
    if(req.query.pid!=null){
        getPost(parseInt(req.query.pid)).then((result)=>{
            res.json(result);
        })
    }
    else {
        getPosts().then((result)=>{
            res.json(result);
        })
    }
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

//run().catch(console.dir);


