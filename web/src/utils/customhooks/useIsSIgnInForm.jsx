import { useState } from "react";


const useIsSignInForm = () => {
    let [isSignInForm, setIsSignInForm] = useState(0);
    let toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    }

    return {isSignInForm, toggleSignInForm};
}



 export default useIsSignInForm; 