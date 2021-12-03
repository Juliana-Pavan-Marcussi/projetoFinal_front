import React, { useState } from 'react';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
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

const LoginUserForm = (props) => {

    const initialFormState = { email: '', password: '' }
    const [user, setUser] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    };

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            if (!user.email || !user.password) return

            props.loginUser(user)
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
            <div className="input-form">
                <label className="text-label">Senha</label>
                <input className="text-input"
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInputChange} />
            </div>
            <NavLink to="/redefinir-senha">
                <a><span style={{ color: "#031349", marginLeft: "46%", cursor: "pointer" }}>Esqueceu sua senha?</span></a>
            </NavLink>
            <div className="button-form">
                <Button color="primary">Entrar</Button>
            </div>
            <NavLink to="/cadastro">
                <a><span style={{ color: "#031349", marginLeft: "44%", cursor: "pointer", fontWeight:"bolder"}}>Não tem conta? <span style={{ color: "rgb(86 117 188)"}}>Cadastre-se.</span></span></a>
            </NavLink>
            <p style={{color: "rgb(155 155 157)", marginLeft:"47%", width: "170px", textAlign: "center", marginTop:"40px"}}>Dúvidas na área de TI. Agende seu horário.</p>
            <p style={{color: "rgb(155 155 157)", marginLeft:"47%", width: "170px", textAlign: "center", marginTop:"30px"}}>Nós você à educadores da área da Tecnologia da Informação.</p>
        </form>
    )
}

export default LoginUserForm
