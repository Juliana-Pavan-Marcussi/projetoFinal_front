import React, { useState } from 'react';
import UserService from '../Services/UserService';
import LoginUserForm from '../Forms/LoginUserForm';

const Login = () => {

    const [users, setUsers] = useState('');

    const loginUser = (user) => {
       return UserService.loginUserService(user);
        }

    return (
        <div>
            <h1 className="title">Login</h1>
            <LoginUserForm loginUser={loginUser} />
        </div>
    )
}

export default Login
