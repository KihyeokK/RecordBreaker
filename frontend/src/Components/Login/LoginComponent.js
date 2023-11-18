import React from "react";
import { Box } from '@mui/material';
import LoginHeader from './LoginHeader'
import LogInForm from './LoginForm'

const LoginComponent = () => {
    return (
        <Box sx={{}}>
            <LoginHeader />
            <LogInForm />
        </Box>
    )
}

export default LoginComponent;