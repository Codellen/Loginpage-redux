import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import "../App.css";

function Profile() {

    let[userDetails,setUserDetails] = useState("")
    const username = useSelector((state)=>state.data.username)
    const password = useSelector((state)=>state.data.password)
    const id = useSelector((state)=>state.data.id)
    const token = useSelector((state)=>state.data.token)
    //console.log(username)

    useEffect(()=>{
        fetch(`https://dummyjson.com/users/${id}`)
        .then((res)=> res.json())
        .then((data)=>{
            //console.log(data)
            setUserDetails(data)
        })
    },[id])



  return (
    <div className='parent'>
  <div className='heading'>
    <h1>Your Profile</h1>
     <br></br>
    <h3>Name : {userDetails.firstName} {userDetails.lastName}</h3>
    <br></br>
    <img src={userDetails.image}></img>
    <br></br>
    <h3>Email Id : {userDetails.email}</h3>
    <br></br>
    <h3>Date of Birth : {userDetails.birthDate} </h3>
    <br></br>
    <h3>Domain: {userDetails.domain}</h3>
    
  </div>
  
    </div>
  )
}

export default Profile