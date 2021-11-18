import React, { useState } from 'react';
import './Cadastro.css';
import AddUserForm from '../Forms/AddUserForm';


const Cadastro = () => {

    const [users, setUsers] = useState('');

    const addUser = (user) => {
        user.id = users.length + 1
        setUsers([...users, user])
      }

    return (
        <div>
            <h1 className="title">Cadastro</h1>
            <AddUserForm addUser={addUser} />
        </div>
    )
}

export default Cadastro
