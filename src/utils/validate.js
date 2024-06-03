export const checkValidData = (email, password, name="testuser") =>{
    // console.log(email)
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    
    const isName = /^[A-Za-z][A-Za-z0-9_]{5,29}$/.test(name)
    if(!(isEmailValid ) ){
        return "email is not valid"
    }
    else if (!isName) return "username should be valid"
    return null
};