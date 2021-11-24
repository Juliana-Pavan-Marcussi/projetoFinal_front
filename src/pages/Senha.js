import React, { useState } from 'react';
import './Cadastro.css';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Col,
    Row,
    Card,
    CardBody,
    Table,
    CardHeader,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
} from 'reactstrap';

const Senha = (props) =>{

    const initialFormState = {  email: ''}
    const [user, setUser] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    };

    return (
        <div>
            <h1 className="title">Esqueceu sua senha?</h1>
            <h5 className="title">Preencha o campo abaixo e clique em enviar para receber um e-mail de recadastramento de senha.</h5>

            <form className="form-area-2" onSubmit={(event) => {
                event.preventDefault()
                if (!user.email) return

                props.addUser(user)
                setUser(initialFormState)
            }}
            >
                <div className="input-form">
                    <label className="text-label">E-mail</label>
                    <input className="text-input"
                        type="text"
                        name="email"
                        value={user.email}
                        onChange={handleInputChange} />
                </div>
                <div className="button-form">
                    <Button color="primary">Enviar</Button>
                </div>

            </form>
        </div>
    )
}

export default Senha
