import React, { useState } from 'react';
import '../pages/Cadastro.css';
import Calendar from 'react-calendar';
import Multiselect from 'multiselect-react-dropdown';
import Select from 'react-select';
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { BsStopwatch } from "../../node_modules/react-icons/bs/index";
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

const Estudante = () => {

    const styles = {
        fontSize: 14,
        width: 200,
    }

    const colourOptions = [
        { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
        { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
        { value: 'purple', label: 'Purple', color: '#5243AA' },
        { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
        { value: 'orange', label: 'Orange', color: '#FF8B00' },
        { value: 'yellow', label: 'Yellow', color: '#FFC400' },
        { value: 'green', label: 'Green', color: '#36B37E' },
        { value: 'forest', label: 'Forest', color: '#00875A' },
        { value: 'slate', label: 'Slate', color: '#253858' },
        { value: 'silver', label: 'Silver', color: '#666666' },
    ];

    return (
        <div className="container">
            <h1 className="title">Bem vindo Fulano</h1>
            <Row>
                <Col md="4">
                    <div className="grid-1">
                        <h4 style={{ textAlign: 'center', marginTop: '14px' }}>Passo 1</h4>
                        <div className="input-form-2">
                            <span style={{ marginBottom: "20px" }}>Selecione um assunto</span>
                            <Select
                                className="basic-single"
                                classNamePrefix="select"
                                //defaultValue={colourOptions[0]}
                                name="color"
                                options={colourOptions}
                                placeholder="Selecione um horário"
                                style={styles.select}
                            />
                        </div>
                        <div className="input-form-2">
                            <span>Selecione um professor</span>
                            <Select
                                className="basic-single"
                                classNamePrefix="select"
                                //defaultValue={colourOptions[0]}
                                name="color"
                                options={colourOptions}
                                placeholder="Selecione um horário"
                            />
                        </div>
                    </div>
                </Col>
                <Col md="4">
                    <div className="grid-1">
                        <h4 style={{ textAlign: 'center', marginTop: '14px', marginBottom: '40px' }}>Passo 2</h4>
                        <div className="input-form">
                            <span style={{ marginBottom: "20px" }}>Selecione uma data</span>
                            <Calendar
                            />
                        </div >
                    </div >
                </Col>
                <Col md="4">
                    <div className="grid-1">
                        <h4 style={{ textAlign: 'center', marginTop: '14px', marginBottom: '40px' }}>Passo 3</h4>
                        <div className="input-form">
                            <span style={{ marginBottom: "20px" }}>Selecione um horário</span>
                            <Select
                                className="basic-single"
                                classNamePrefix="select"
                                //defaultValue={colourOptions[0]}
                                name="color"
                                options={colourOptions}
                                placeholder="Selecione um horário"
                            />
                        </div >
                    </div >
                </Col>
            </Row>
            <Row>
                <div className="button-form">
                    <Button color="primary">Agendar Horário</Button>
                </div>
                {/* <div className="button-form-2">
                    <NavLink to="/agendamentos-estudante">
                        <BsStopwatch class="icon" /><a style={{ cursor: 'pointer' }}><span>Ver horários Agendados</span></a>
                    </NavLink>
                </div> */}
            </Row>
        </div>
    )
}

export default Estudante
