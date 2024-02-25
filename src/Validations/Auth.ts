export const matchUsername = (username: string) => {
    if(!username){
        return {
            status: "error",
            message: "Username cannot be empty"
        }
    }
    var checkAlphabet = /[a-zA-Z]/g;
    if(!username.match(checkAlphabet)){
        return {
            status: "error",
            message: "Must contain atleast one alphabet"
        }
    }
    var checkDigit = /[0-9]/g;
    if(!username.match(checkDigit)){
        return {
            status: "error",
            message: "Must contain atleast one digit"
        }
    }
    if(username.length < 4){
        return {
            status: "error",
            message: "Must be atleast 4 characters long"
        }
    }
    if(username.length > 12){
        return {
            status: "error",
            message: "Must be less than 12 characters long"
        }
    }
    return {
        status: "success",
        message:""
    }
};

export const matchEmail = (email: string) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!email){
        return {
            status: "error",
            message: "Email cannot be empty"
        }
    }
    if (!re.test(email)) {
        return {
            status: "error",
            message: "Invalid Email"
        }
    }
    return {
        status: "success",
        message:""
    }
};

export const matchPassword = (password: string) => {
    if(!password){
        return {
            status: "error",
            message: "Password cannot be empty"
        }
    }
    var checkAlphabet = /[a-zA-Z]/g;
    if(!password.match(checkAlphabet)){
        return {
            status: "error",
            message: "Must contain atleast one alphabet"
        }
    }
    var checkDigit = /[0-9]/g;
    if(!password.match(checkDigit)){
        return {
            status: "error",
            message: "Must contain atleast one digit"
        }
    }
    var checkSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    if(!password.match(checkSpecial)){
        return {
            status: "error",
            message: "Must contain atleast one special character"
        }
    }
    if(password.length < 6){
        return {
            status: "error",
            message: "Must be atleast 6 characters long"
        }
    }
    if(password.length > 20){
        return {
            status: "error",
            message: "Must be less than 20 characters long"
        }
    }
    return {
        status: "success",
        message:""
    }
};

