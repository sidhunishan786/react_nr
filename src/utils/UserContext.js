import { createContext } from "react";

const UserContext=createContext({
    user:{
    name: "Dummyname",
    email:"dummy@gmail.com"

}});

export default UserContext; 