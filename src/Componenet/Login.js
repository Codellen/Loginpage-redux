import React, { useState } from 'react';
import "../App.css"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetch_password,fetch_username,fetch_id,fetch_token } from '../actionsss';

function Login() {

let[username,setUsername] = useState("");
let[password,setPassword] = useState("");

const dispatch = useDispatch();
const navigate = useNavigate()

const handelogin = ()=>{
    // console.log(username)
    // console.log(password)
    fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: `${username}`,
          password: `${password}`,
        })
      })
        .then((res) => {
            if(res.ok)
            {
                return  res.json()
            }
            else{
                throw new Error('Username or Password is invalid.')
            }
        })
        
        .then( data=>{
            // console.log(data.id)
            // console.log(data.token)
            dispatch(fetch_username(username))
            dispatch(fetch_password(password))
            dispatch(fetch_id(data.id))
            dispatch(fetch_token(data.token))
            navigate("/profile")
}).catch((error)=>{
    console.log(error.name)
})

}

  return (
   <div>
    <div className='display-input'>   
    <div className='child-div'>
    <div>
   <p>Enter UserName:</p>
   <br></br>
        <input type="text" placeholder='Username' onChange={(event)=>{setUsername(event.target.value)}} value={username} ></input>
   </div>
   <br></br>
   <div>
   <p>Password:</p>
   <br></br>
        <input type="password" placeholder='Password' onChange={(event)=>{setPassword(event.target.value)}} value={password}></input>
   </div>
   <br></br>
   <button onClick={handelogin}>Login</button>
    </div>
  
    </div>
   </div>
  )
}

export default Login