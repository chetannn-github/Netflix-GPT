import React, { useEffect } from 'react';
import "../Stylesheets/header.css";
import { useDispatch, useSelector } from 'react-redux';
import useSignout from '../utils/customhooks/useSignout';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';

import { addUser, removeUser } from '../utils/reduxStore/userSlice';
import { toggleGpt } from '../utils/reduxStore/gptSlice';
import { useNavigate } from 'react-router-dom';



export const Header = () => {
  const dispatch = useDispatch();
  let handleSignOut = useSignout();
  const navigate = useNavigate();
  const userName = useSelector((store) =>store.user?.displayName);
  const isGpt = useSelector((store)=>store.isGpt);
  
  let handleToggleGptPage =() =>{
    dispatch(toggleGpt());
}
 
  
  useEffect(()=>{
    const unsuscribe = onAuthStateChanged(auth,(user)=>{
      if(user){
        const {uid,email, displayName} = user;
        dispatch(addUser({uid,email,displayName}));
        // navigate("/");
      }else{
      // console.log(user)
        dispatch(removeUser());
        navigate('/login');
      }
    });
  // unsuscribe when component is unmounted
  return ()=>unsuscribe();
},[])
  
  return (
    <>
        <div id="nav">
            <div id="logo">
                <img src="assets/logo.png" alt="" />
            </div>
           {userName &&
            <div id="user">
              <button onClick={handleToggleGptPage}>{!isGpt? "GPT Search":"Homepage"}</button>
            <img src="./assets/usericon.png" alt="" />
            <h3>Hey!👋 {userName}</h3>
            <h4 onClick={handleSignOut}>(Signout)</h4>
           </div>}
        
        </div> 
        

    </>

  )
}
