import React from "react";
import { Box } from '@mui/material';
import LoginHeader from './LoginHeader'
import LogInForm from './LoginForm'
import NextButton from "./NextButton";
import { useState } from "react";

const LoginComponent = (props) => {
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);

    const handleUserNameChange = (event) => {
        console.log(event.target.value);
        setUserName(event.target.value);
    };

    const handlePasswordChange = (event) => {
        console.log(event.target.value);
        setPassword(event.target.value);
    };

    return (
        <Box >
            <LoginHeader />
            <LogInForm handleUserNameChange={handleUserNameChange} handlePasswordChange={handlePasswordChange} isLoginScreen={false} />
            <NextButton userName={userName} password={password}/>
        </Box>
    )
}

export default LoginComponent;