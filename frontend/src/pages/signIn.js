import React, { useState, useEffect } from "react";
import { Box, TextField, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const [email, getEmail] = useState("");
    const [password, getPassword] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    });

    const login = async () => {
        console.log("login form");
        console.table(email, password);
        let result = await fetch('http://​localhost:5000/login',{
            method: 'post',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type' : 'Application/json'
            },
        });

        result = await result.json();
        localStorage.setItem('user', JSON.stringify(result));
        navigate('/')
    }
    return (
        <div className='register'>
            <h1>Login Form</h1>
            <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
                <TextField className="outlined-basic" type="text" value={email} onChange={(e) => getEmail(e.target.value)} label="Email" variant="outlined"/>
                <TextField className="outlined-basic" type="password" value={password} onChange={(e) => getPassword(e.target.value)} label="Password" variant="outlined"/>
                &nbsp;
                &nbsp;
                <Button variant="contained" onClick={login}> Login </Button>
            </Box>
        </div>
    )
}

export default SignIn;