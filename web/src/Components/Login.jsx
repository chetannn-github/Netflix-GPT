import React, { useRef ,useState} from 'react';
import "../Stylesheets/Login.css";
import { Link } from 'react-router-dom';
import useIsSignInForm from '../utils/customhooks/useIsSIgnInForm';
import { Background } from './Background';
import { Header } from './Header';
import useHandleFormSubmit from '../utils/customhooks/useHandleFormSubmit';

export const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  let { isSignInForm, toggleSignInForm} = useIsSignInForm();
  let {handleSubmitForm ,errorMsg} = useHandleFormSubmit(email,password,isSignInForm,name);
  

  return (
    <>
    <Header/>
    <Background/>

    <div id="form">
      <form action="#" onSubmit={(e)=>e.preventDefault()}>
        <h1>{isSignInForm? "Sign In" : "Sign Up" }</h1>
        <input ref={email} type="text"   placeholder='Email address '/>

        {/* {!isSignInForm? (<>
          <input type="text" name="" id="" placeholder='Username '/>
          </>):(<></>)} */}
        {!isSignInForm && <input ref={name} type="text" placeholder='Username '/>}


        <input ref={password} type="password"  placeholder='Password' />
        {errorMsg && <p id='error-msg'>{errorMsg}</p>}


        <button onClick={()=>handleSubmitForm()}>{isSignInForm ? "Sign In" : "Sign Up "}</button>
       
        <p>{isSignInForm? (<>New to Netflix? <Link to='/signup' onClick={toggleSignInForm}> Sign Up Now</Link></>): (<>Already user? <Link to='/login' onClick={toggleSignInForm}> Sign in now</Link></>) }</p>
    </form>
    </div>
    </>
  )
}
