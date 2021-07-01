import MongoClient  from "mongodb";
import assert from "assert";
const uri =
  "mongodb://localhost:27017/admin?ssl=false";
// Connection URI

export async function addUser(name, first_name, email, password) {
    var uid = Math.floor(Math.random()*1000000)
    const client = await MongoClient.MongoClient.connect(uri);
        
    const connect = client.db('socialDB')
        
    const users = await connect.collection('users').find({"email":email}).toArray();
    if(users[0]==null){
        connect.collection('users').insertOne({"uid":uid,"name": name,"first_name":first_name,"email":email,"password":password})
    }
    else {
        uid = 0;
    }
     

     return uid;
    
}


export async function getUser(pid) {
    const client = await MongoClient.MongoClient.connect(uri);

    //var list = [];
    const connect = client.db('socialDB');
    /*connect.collection('users').find({"id":id}).toArray(function(err, result) {
         list.push(result);
         
    
    })*/
    const cursor = await connect.collection('users').find({"uid":pid}).toArray();
    return cursor[0];
     
}
export async function getUsers() {
    const client = await MongoClient.MongoClient.connect(uri);

    //var list = [];
    const connect = client.db('socialDB');
    /*connect.collection('users').find({"id":id}).toArray(function(err, result) {
         list.push(result);
         
    
    })*/
    const cursor = await connect.collection('users').find().toArray();
    return cursor;
     
}

export async function login(email,password) {
    const client = await MongoClient.MongoClient.connect(uri);

    //var list = [];
    const connect = client.db('socialDB');
    /*connect.collection('users').find({"id":id}).toArray(function(err, result) {
         list.push(result);
         
    
    })*/
    const cursor = await connect.collection('users').find({'email': email}).toArray();
    if(cursor[0]==null)
    {
        return { "uid" : 0, "ApiKey" : 0 }
    }
    if(cursor[0]['password']==password)
    {
        return { "uid" : cursor[0]['uid'], "ApiKey" : 1234 } ;
    }
    else {
        return { "uid" : 0, "ApiKey" : 0 };
    }
     
}

export async function getPosts() {
    const client = await MongoClient.MongoClient.connect(uri);

    //var list = [];
    const connect = client.db('socialDB');
    /*connect.collection('users').find({"id":id}).toArray(function(err, result) {
         list.push(result);
         
    
    })*/
    const cursor = await connect.collection('posts').find().toArray();
    return cursor;
     
}

export async function getPost(id) {
    const client = await MongoClient.MongoClient.connect(uri);

    //var list = [];
    const connect = client.db('socialDB');
    /*connect.collection('users').find({"id":id}).toArray(function(err, result) {
         list.push(result);
         
    
    })*/
    const cursor = await connect.collection('posts').find({"id":id}).toArray();
    if(cursor[0]!=null){
        return cursor[0];
    }
    else {
        return {"uid":0,"pid":0,"text":""}
    }
     
}

export async function updatePost(id,userid,text) {
    const client = await MongoClient.MongoClient.connect(uri);

    //var list = [];
    const connect = client.db('socialDB');
    /*connect.collection('users').find({"id":id}).toArray(function(err, result) {
         list.push(result);
         
    
    })*/
    const cursor = await connect.collection('posts').updateOne({"id":id},{$set: {"text":text}});
    return cursor;
     
}

export async function deletePost(id,uid) {
    const client = await MongoClient.MongoClient.connect(uri);

    //var list = [];
    const connect = client.db('socialDB');
    /*connect.collection('users').find({"id":id}).toArray(function(err, result) {
         list.push(result);
         
    
    })*/
    const cursor = await connect.collection('posts').deleteOne({"id":id});
    return cursor;
     
}

export async function createPost(userid,text) {
    var id = Math.floor(Math.random()*1000000);
    const client = await MongoClient.MongoClient.connect(uri);

    //var list = [];
    const connect = client.db('socialDB');
    /*connect.collection('users').find({"id":id}).toArray(function(err, result) {
         list.push(result);
         
    
    })*/
    connect.collection('posts').insertOne({"id":id,"userid": userid,"text":text})
    return id;
     
}


