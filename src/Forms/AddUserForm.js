import React, { useEffect, useState } from 'react';
import '../pages/Cadastro.css';
import InputMask from "react-input-mask";
import Multiselect from 'multiselect-react-dropdown';
import UserService from '../Services/UserService';
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

    const initialFormState = { name: '', email: '', cpf: '', phone: '', password: '', checked: false, url: '', subjectIds: [] }
    const [user, setUser] = useState(initialFormState);
    const [subjects, setSubjects] = useState([]);
    const [checked, setChecked] = useState(false);
    const [selectedValue, setSelectedValue] = useState([]);

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    };

    const handleMultiSelectedValue = (event) => {
        setSelectedValue([]);
        event.forEach(value => selectedValue.push(value.id));
        user.subjectIds = selectedValue;
    }

    const handleChecked = () => {
        if (checked == false) {
            setChecked(true);
            user.checked = true;
        } else {
            setChecked(false);
            user.checked = false;
        }
    }

    const populateMultiselectSubjects = () => {
        UserService.getAllSubjects().then(res => {
            setSubjects(res);
        });
    }

    useEffect(() => {
        populateMultiselectSubjects();
    }, []);

    return (
        <form className="form-area" onSubmit={(event) => {
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
                <InputMask as={InputMask} className="text-input"
                    type="text"
                    name="cpf"
                    mask={"999.999.999-99"}
                    value={user.cpf}
                    onChange={handleInputChange} />
            </div>
            <div className="input-form">
                <label className="text-label">Telefone</label>
                <InputMask className="text-input"
                    type="text"
                    name="phone"
                    mask={"(99) 99999-9999"}
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
                    type="checkbox"
                    //onChange={() => setChecked(!(user.checked))}
                    onChange={handleChecked}
                    value={user.checked}
                    size="md"
                    bsSize="large"
                ></Input>
                <label className="checkbox-label">Você é um professor?</label>
            </div>
            {checked ?
                <div className="input-form">
                    <label className="text-label-2">URL do Linkedin</label>
                    <input className="text-input"
                        type="url"
                        name="url"
                        value={user.url}
                        onChange={handleInputChange} />
                </div> : ''
            }
            {checked ?
                <div className="input-form">
                    <Row>
                        <span className="text-label-3">Assuntos</span>
                        <Multiselect
                            className="multiselect"
                            disablePreSelectedValues
                            displayValue="name"
                            placeholder="Assuntos"
                            options={subjects} // Options to display in the dropdown
                            //onChange={handleMultiSelectedValue}
                            // selectedValues={selectedValue} // Preselected value to persist in dropdown
                            onSelect={handleMultiSelectedValue} // Function will trigger on select event
                            onRemove={handleMultiSelectedValue} // Function will trigger on remove event               
                        />
                    </Row>
                </div> : ''
            }
            <div className="button-form">
                <Button color="primary">Cadastre-se</Button>
            </div>

        </form>
    )
}

export default AddUserForm
