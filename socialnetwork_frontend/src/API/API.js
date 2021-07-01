import axios from "axios";

const instance = axios.create({
    baseURL:'http://localhost:3001',
    timeout:1000,
    headers: {'Content-Type':'application/json'}
})


async function API_login(state) {

    const idres = await instance.post(
        '/login',
        {
            'email':state.login.email,
            'password':state.login.password
        },

    )
    if(idres.data.result.uid == 0){
        return {
            name : "",
            firstname : "",
            uid : 0,
            logged_in : false
        }
    }
    else {
        let userres = await instance.get(
            '/users?uid='+idres.data.result.uid,
        )
        return {
            name : userres.data.users.name,
            firstname : userres.data.users.first_name,
            uid : idres.data.result.uid,
            apiKey: idres.data.result.ApiKey,
            logged_in : true
        }

    }

}

async function API_signUp(state) {
    const res = await instance.put(
        '/users',
        {
            'name': state.login.name,
            'firstname': state.login.firstname,
            'email': state.login.email,
            'password': state.login.password
        }
    )
    return res;
}



async function API_getPosts() {
    const res = await instance.get(
        '/posts'

    )
    console.log(res)
    let retlist = [];
    for(const element of res.data)
    {
        let userres = await instance.get('/users?uid='+element.userid)
        console.log(userres)
        userres = userres.data.users
        console.log(userres)
        retlist.push(
            {
                'uid' :element.userid,
                'text' : element.text,
                'name' : userres.name,
                'firstname' : userres.first_name
            }
        )
    }
    return retlist;
  

}





async function API_uploadPosts(state) {
    await instance.put(
        '/posts',
        {
            'uid': state.login.uid,
            'text': state.posts.draft.text
        }

    )
    return await API_getPosts();
  

}


export {API_login,API_getPosts,API_uploadPosts,API_signUp};