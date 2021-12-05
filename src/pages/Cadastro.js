import React, { useState } from 'react';
import './Cadastro.css';
import AddUserForm from '../Forms/AddUserForm';
import UserService from '../Services/UserService';
import { Link, useParams, useHistory } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Cadastro = () => {

    const [users, setUsers] = useState('');
    const history = useHistory();

    const addUser = (user) => {
        if (user.checked == false) {
            user = {
                name: user.name,
                email: user.email,
                cpf: user.cpf,
                phone: user.phone,
                password: user.password,
            }
            UserService.addStudentService(user).then(res => {
                if (res == 200) {
                    toast.success('Mensagem de sucesso')
                    history.push({
                        pathname: "/estudante" 
                    });

                }else{
                    toast.success('Mensagem de sucesso')
                }
            })
        } else {
            UserService.addTeachertService(user).then(res => {
                if (res == 200) {
                    history.push({
                        pathname: "/professor"
                    });
                }
            })
        }
    }

    return (
        <div>
            <h1 className="title">Cadastro</h1>
            <AddUserForm addUser={addUser} />
        </div>
    )
}

export default Cadastro
