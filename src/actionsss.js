import { USERNAME_LOGED,PASSWORD_LOGED,ID,TOKEN } from "./actionType";

export const fetch_username = (userdata)=>
{
    return{
        type:USERNAME_LOGED,
        payload:userdata
    }
}
export const fetch_password = (userpassword)=>
{
    return{
        type:PASSWORD_LOGED,
        payload:userpassword
    }
}
export const fetch_id = (userid)=>
{
    return{
        type:ID,
        payload:userid
    }
}
export const fetch_token = (usertoken)=>
{
    return{
        type:TOKEN,
        payload:usertoken
    }
}

