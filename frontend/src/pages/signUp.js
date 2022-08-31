import React, { useEffect, useState } from 'react';
import { Box, TextField, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }
    });
    const register = async () => {
        console.table(name, email, password);
        let result = await fetch('http://​localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'Application/json'
            },
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem('user', JSON.stringify(result));
        navigate('/');
    }

    return (
        <div className='register'>
            <h1>Registration Form</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField type="text" className="outlined-basic" value={name} onChange={(e) => setName(e.target.value)} label="Name" variant="outlined" />
                <TextField type="text" className="outlined-basic" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" />
                <TextField type="password" className="outlined-basic" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" variant="outlined" />
                &nbsp;
                &nbsp;
                <Button variant="contained" onClick={register}>Submit</Button>
            </Box>
        </div>
    )
}

export default SignUp;