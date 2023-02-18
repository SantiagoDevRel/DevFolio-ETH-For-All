// @author Blextick (Santiago Trujillo Zuluaga)

//import React, {useEffect, useState} from 'react'
import {Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import "./App.css"
import Login from "./Components/user/Login"


import Marketplace from './Components/user/Marketplace';
import MyAccount from './Components/user/MyAccount';
import Events from './Components/user/Events';
import LoginOrganizer from "./Components/organizer/LoginOrganizer";
import CreateEvent from "./Components/organizer/CreateEvent";
import MyAccountOrganizer from "./Components/organizer/MyAccountOrganizer"
import BlextickPlus from "./Components/user/BlextickPlus/BlextickPlus";

function App() {

  /* const [isUser, setIsUser] = useState(false)
  const [isOrganizer, setIsOrganizer] = useState(false)

 */
  return (
    <>
      <Routes>
         {/* Homepage */}
        <Route path="/" element={<Home/>}/>
        
        {/* Pages for the users */}
        <Route path="/user/events" element={<Events/>}/>
        <Route path="/user/login" element={<Login/>}/>
        <Route path="/user/marketplace" element={<Marketplace/>}/>
        <Route path="/user/blextickPlus" element={<BlextickPlus/>}/>
        <Route path="/user/myaccount" element={<MyAccount/>}/>

        
        
         {/* Pages for the organizers */}
        <Route path="/organizer/login" element={<LoginOrganizer/>}/>
        <Route path="/organizer/create-event" element={<CreateEvent/>}/>
        <Route path="/organizer/myaccount" element={<MyAccountOrganizer/>}/>



      </Routes>      
    </>
  )
}

export default App
