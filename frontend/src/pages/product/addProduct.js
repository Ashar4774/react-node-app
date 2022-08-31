import React, { useState } from "react";
import { Box, TextField, Button, Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const user = localStorage.getItem('user');
    const user_Id = JSON.parse(user)._id;
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const userId = user_Id;
    const [company, setCompany] = useState('');
    const navigate = useNavigate();

    const addProduct = async () => {
        let result = await fetch('http://​localhost:5000/product/add',{
            method: 'post',
            body: JSON.stringify({name, price, category, userId, company}),
            headers:{
                'Content-Type' : 'application/json'
            },
        });
        result = await result.json();
        console.log(result);
        navigate('/product');
    };
    return (
        <div className='product'>
            <h1>Add Product</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <FormControl fullWidth>
                    <TextField type="text" className="outlined-basic" value={name} onChange={(event) => { setName(event.target.value); }} label="Name" variant="outlined" />
                </FormControl>

                <FormControl fullWidth>
                    <TextField type="text" className="outlined-basic" value={price} onChange={(event) => {setPrice(event.target.value)}} label="Price" variant="outlined" />
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="Category"
                        onChange={(event) => {
                            setCategory(event.target.value);
                        }}
                    >
                        <MenuItem value={"mobile"}>Mobile</MenuItem>
                        <MenuItem value={"laptop"}>Laptop</MenuItem>
                        <MenuItem value={"smat watch"}>Smart Watch</MenuItem>
                        <MenuItem value={"power bank"}>Power Bank</MenuItem>
                    </Select>
                </FormControl>

                {/* <FormControl fullWidth>
                    <TextField type="text" className="outlined-basic" value={userId} label="UserId" variant="outlined" />
                </FormControl> */}

                <FormControl fullWidth>
                    <TextField type="text" className="outlined-basic" value={company} onChange={(event) => {setCompany(event.target.value)}} label="Company" variant="outlined" />
                </FormControl>
                &nbsp;
                &nbsp;
                <Button variant="contained" onClick={addProduct}> Add </Button>
            </Box>
        </div>
    )
}

export default AddProduct;