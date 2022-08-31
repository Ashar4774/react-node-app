import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/');
    }
    return (
        <div>
            <img src='https://cdn3d.iconscout.com/3d/free/thumb/react-5645899-4695757.png' alt='react-logo' className='logo'/>
            {
                auth ? <ul className='navbar-ul'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/product/add">Add Product</Link></li>
                    <li><Link to="/product/update">Update Product</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/logout" onClick={logout}>Logout({JSON.parse(auth).name})</Link></li>
                </ul>
                    : <ul className='navbar-ul nav-right'>
                        <li><Link to="/signUp">Sign Up</Link></li>
                        <li><Link to="/signIn">Login</Link></li>
                    </ul>
            }
        </div>
    )
}

export default Nav;