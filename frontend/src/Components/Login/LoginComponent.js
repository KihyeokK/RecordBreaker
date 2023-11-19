import React from "react";
import { Box } from '@mui/material';
import LoginHeader from './LoginHeader'
import LogInForm from './LoginForm'
import NextButton from "./NextButton";

const LoginComponent = () => {
    return (
        <Box >
            <LoginHeader />
            <LogInForm isLoginScreen={false} />
            <NextButton />
        </Box>
    )
}

export default LoginComponent;