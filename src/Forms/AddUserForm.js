import React, { useState } from 'react';
import '../pages/Cadastro.css';
import Multiselect from 'multiselect-react-dropdown';
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

const AddUserForm = (props) => {

    const initialFormState = { name: '', email: '', cpf: '', phone: '', password: '', checkbox: '' }
    const [user, setUser] = useState(initialFormState);
    const [isChecked, setIsChecked] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    };

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            if (!user.name || !user.email || !user.password) return

            props.addUser(user)
            setUser(initialFormState)
        }}
        >

            <div className="input-form">
                <label className="text-label">Nome</label>
                <input className="text-input"
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange} />
            </div>
            <div className="input-form">
                <label className="text-label">E-mail</label>
                <input className="text-input"
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange} />
            </div>
            <div className="input-form">
                <label className="text-label">CPF</label>
                <input className="text-input"
                    type="text"
                    name="cpf"
                    value={user.cpf}
                    onChange={handleInputChange} />
            </div>
            <div className="input-form">
                <label className="text-label">Telefone</label>
                <input className="text-input"
                    type="text"
                    name="phone"
                    value={user.phone}
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
            <div className="input-form">
                <Input
                    type="radio"
                    name="radio"
                    value={user.checkbox}
                    onChange={handleInputChange}
                    size="md"
                    bsSize="large"
                ></Input>
                <label className="checkbox-label">Você é um professor?</label>
            </div>
            <div className="input-form">
                <label className="text-label-2">URL do Linkedin</label>
                <input className="text-input"
                    type="url"
                    name="url"
                    value={user.url}
                    onChange={handleInputChange} />
            </div>
            <div className="input-form">
                <Row>
                    <span className="text-label-3">Assuntos</span>
                    <Multiselect
                        disablePreSelectedValues
                        displayValue="name"
                        options={[
                            {
                                name: 'Phyton',
                                description: 'Curso de Phyton'
                            },
                            {
                                name: 'Java',
                                description: 'Curso de Java'
                            },
                            {
                                name: 'C#',
                                description: 'Curso de C#'
                            },
                            {
                                name: 'Java Script',
                                description: 'Curso de Java Script'
                            },
                        ]} // Options to display in the dropdown
                    //selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                    //onSelect={this.onSelect} // Function will trigger on select event
                    //onRemove={this.onRemove} // Function will trigger on remove event               
                    />
                </Row>
            </div>
            <div className="button-form">
                <Button color="primary">Cadastre-se</Button>
            </div>

        </form>
    )
}

export default AddUserForm
