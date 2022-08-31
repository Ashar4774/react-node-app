import React, { useEffect, useState } from "react";
import { Box, TextField, Button, Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
    const user = localStorage.getItem('user');
    const user_Id = JSON.parse(user)._id;
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const userId = user_Id;
    const [company, setCompany] = useState('');
    const [error, getError] = useState(false);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(()=>{
        getProductDetails(params);
    },[]);

    const getProductDetails = async () => {
        let result = await fetch(`http://​localhost:5000/product/${params.id}`);
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }

    const updateProduct = async () => {
        let result = await fetch(`http://​localhost:5000/product/${params.id}`,{
            method: 'put',
            body: JSON.stringify({name, price, category, company}),
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        result = await result.json();
        navigate('/product')
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
                    <TextField type="text" className="outlined-basic" value={name} onChange={(event) => { setName(event.target.value); }} label="Name" variant="outlined" error={!name} helperText={!name ? 'Empty field!' : ' '} />
                    
                </FormControl>

                <FormControl fullWidth>
                    <TextField type="text" className="outlined-basic" value={price} onChange={(event) => {setPrice(event.target.value)}} label="Price" variant="outlined" error={!price} helperText={!price ? 'Empty field!' : ' '}/>
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
                        }} error={!category} helperText={!category ? 'Empty field!' : ' '}
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
                    <TextField type="text" className="outlined-basic" value={company} onChange={(event) => {setCompany(event.target.value)}} label="Company" variant="outlined" error={!company} helperText={!company ? 'Empty field!' : ' '}/>
                </FormControl>
                &nbsp;
                &nbsp;
                <Button variant="contained" onClick={updateProduct}> Update </Button>
            </Box>
        </div>
    )
}

export default UpdateProduct;