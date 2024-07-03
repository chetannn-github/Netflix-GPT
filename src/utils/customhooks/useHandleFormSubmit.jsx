import { useEffect, useState } from "react";
import { checkValidData } from "../validate";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword ,onAuthStateChanged,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../reduxStore/userSlice";





const useHandleFormSubmit = (email,password,isSignInForm,name="testusername") =>{
    const dispatch = useDispatch();
    let [errorMsg , setErrorMsg] = useState(null);
    const navigate = useNavigate();
  // console.log(email.current, password.current);
    let handleSubmitForm = () =>{
      let msg = isSignInForm ? checkValidData(email.current.value,password.current.value, name.current?.value):  checkValidData(email.current.value,password.current.value);
      setErrorMsg(msg);

      if(msg){return}
  
      if(isSignInForm){
          setErrorMsg("");
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential)=>{navigate('/');})
          .catch((error) => {
            if (error.message.includes("auth/user-not-found")) {
              setErrorMsg("No user found with this email.");
            } else if (error.message.includes("auth/wrong-password")) {
              setErrorMsg("Incorrect password.");
            } else if (error.message.includes("auth/invalid-email")) {
              setErrorMsg("Invalid email address.");
            } else if (error.message.includes("auth/invalid-credential")) {
              setErrorMsg("Invalid credential.");
            } else if (error.message.includes("auth/too-many-requests")) {
              setErrorMsg("Access to this account has been temporarily disabled due to many failed login attempts.");
            } else {
            setErrorMsg("something went wrong");
            }
          });
      }else{
            setErrorMsg(null);
            //signup
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              updateProfile(auth.currentUser, {
              displayName: name.current.value, photoURL: ""
              })
              .then(() => {
              // Profile updated!
                const {uid,email,displayName} = auth.currentUser;
                // dispatch(addUser({uid,email,displayName}));
                navigate("/");
              })
              .catch((error) => {
       
          });




      })
      .catch((error) => {
        if (error.message.includes("auth/email-already-in-use")) {
        setErrorMsg("Email already in use.");
      } else if (error.message.includes("auth/invalid-email")) {
        setErrorMsg("Invalid email address.");
      } else if (error.message.includes("auth/weak-password")) {
        setErrorMsg("Weak password.");
      } else {
        setErrorMsg("An unknown error occurred.");
      
      }
    });
    }



  }

  return {handleSubmitForm,errorMsg};

}



export default useHandleFormSubmit;