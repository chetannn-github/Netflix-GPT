import {  signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { removeUser } from "../reduxStore/userSlice";


let handleSignOut = () =>{
    signOut(auth).then(() => {
    console.log("signout successfully")
    }).catch((error) => {
 
});

}




const useSignout =() =>{
  return handleSignOut
    
}


export default useSignout;