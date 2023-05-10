import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Login from './Componenet/Login';
import Profile from './Componenet/Profile';
const App = ()=>{


  return(
    <Routes>
       <Route path='/' element={<Login></Login>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
    </Routes>
  )
}


export default App;
