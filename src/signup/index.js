import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Errors from "../errors";
import { createUser } from "../utils/api";

export default function Signup({setHome}){
    const history = useHistory();
    const initUser = {
        userName : "",
        password : "",
    };

    const [newUser, setNewUser] = useState(initUser);
    const [error, setError] = useState(null);

    const handleSignup = ({target: {name,value}}) => {
        setNewUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createUser(newUser)
        .then(() => {
            // setHome(true);
            history.push("/");
        })
        .catch(setError);
    };
    // console.log(error);
    const handleClick = () => {
        history.push("/");
    };

    return (
        <>
        <div>
            <Errors error = {error} />
        </div>
        <div>
            <form onSubmit = {handleSubmit}>
                <fieldset>
                    Signup
                    <div>
                        <label htmlFor = "userName"> Username: </label>
                        <input
                            id = "userName"
                            name = "userName"
                            type = "text"
                            value = {newUser.userName}
                            onChange = {handleSignup}
                        >
                        </input>
                    </div>
                    <div>
                        <label htmlFor = "password"> Password </label>
                        <input
                            id = "password"
                            name = "password"
                            type = "password"
                            value = {newUser.password}
                            onChange = {handleSignup}
                        >
                        </input>
                    </div>
                    <button type = "Submit">
                        Signup
                    </button>
                </fieldset>
            </form>
        </div>
        <button onClick = {handleClick}>
            Home
        </button>
        </>
    )
}