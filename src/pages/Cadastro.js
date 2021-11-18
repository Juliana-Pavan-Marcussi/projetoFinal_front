import React, { useState } from 'react';
import './Cadastro.css';
import AddUserForm from '../Forms/AddUserForm';
import UserService from '../Services/UserService';

const Cadastro = () => {

    const [users, setUsers] = useState('');

    const addUser = (user) => {
       return UserService.addUserService(user);
      }

    return (
        <div>
            <h1 className="title">Cadastro</h1>
            <AddUserForm addUser={addUser} />
        </div>
    )
}

export default Cadastro
