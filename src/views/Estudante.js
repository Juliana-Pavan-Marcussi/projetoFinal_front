import React, { useEffect, useState } from 'react';
import '../pages/Cadastro.css';
import Calendar from 'react-calendar';
import UserService from '../Services/UserService';
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
        width: 150,
    }

    const [subjects, setSubjects] = useState([]);
    const [teahers, setTeachers] = useState([]);

    const populateSelectSubjects = () => {
        UserService.getAllSubjects().then(res => {
            res.forEach(el => {
                subjects.push(el);
            });
            subjects.forEach(el => {
                el["label"] = el.name;
            });
        });
    }

    const populateSelectTeachers = () => {
        UserService.getAllTeachersById().then(res => {
            res.forEach(el => {
                subjects.push(el);
            });
            subjects.forEach(el => {
                el["label"] = el.name;
            });
        });
    }

    const handleChangeSubject = (event) => {
       UserService.getTeachersBySubjectId(event.id).then(res => {

       });
    }

    const handleChangeTeacher = () => {

    }

    const onEventClick = () => {
        
    }

    useEffect(() => {
        populateSelectSubjects();
    }, []);


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
                                name="name"
                                options={subjects}
                                placeholder="Selecione um assunto"
                                onChange={handleChangeSubject.bind(this)}
                                style={styles.select}
                            />
                        </div>
                        <div className="input-form-2">
                            <span>Selecione um professor</span>
                            <Select
                                className="basic-single"
                                classNamePrefix="select"
                                name="name"
                                options={subjects}
                                onChange={handleChangeTeacher}
                                placeholder="Selecione um professor"
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
                            onEventClick={onEventClick}
                            onNewEventClick={onEventClick}
                            events={[]}
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
                                name="name"
                                options={subjects}
                                placeholder="Selecione um horário"
                            />
                        </div >
                    </div >
                </Col>
            </Row>
            <Row>
                <div className="button-form-3">
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
