import React, { useEffect, useState } from "react";
import Errors from "../errors";
import { createUser, readUsers } from "../utils/api";

export default function Login({setHome}){
    const initUser = {
        userName: "",
        password: "",
    };
    const [users, setUsers] = useState([])
    const [user, setUser] = useState (initUser);
    const [error, setError] = useState (null);
    const handleChange = ({target:{name,value}}) => {
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }))
    };

    useEffect(() => {
        readUsers()
        .then(setUsers)
        .catch(setError);
    },[])

    console.log(users);

    const handleSubmit = (event) => {
        event.preventDefault();
        const found = users.some((dataUser, idx) => dataUser.userName === user.userName && dataUser.password === user.password);
        if(found)      
        setHome(true);
        else setHome(false);
    };

    return (
        <>
        <div>
            <Errors error = {error} />
        </div>
        <form onSubmit = {handleSubmit}>
            <fieldset> Login 
                <div>
                    <label htmlFor = "userName" > Username: </label>
                    <input
                        id = "userName"
                        name = "userName"
                        type = "text"
                        value = {user.userName}
                        onChange = {handleChange}
                    >
                    </input>
                </div>
                <div>
                    <label htmlFor = "password"> Password: </label>
                    <input
                        id = "password"
                        name = "password"
                        type = "password"
                        value = {user.password}
                        onChange = {handleChange}
                    >
                    </input>
                </div>
                <button type = "submit">
                    Login
                </button>
            </fieldset>
        </form>
        </>
    )
}