import React from 'react';
import '../pages/Cadastro.css';
import Select from 'react-select';
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

function Professor() {
    return (
        <div>
            <h1 className="title">Minhas Aulas Agendadas</h1>
            <Table bordered={false} style={{ display: 'block', width: '63%', padding: '30', marginLeft: '300px', textAlign: 'center' }}>
                <thead>
                    <tr>
                        <th style={{ width: '580px' }}>Matéria</th>
                        <th style={{ width: '580px' }}>Data</th>
                        <th style={{ width: '580px' }}>Horário</th>
                        <th style={{ width: '580px' }}>Aluno</th>
                        <th style={{ width: '580px' }}>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Java</td>
                        <td>12/12/2021</td>
                        <td>8:00 - 9:00</td>
                        <td>Maria das Graças</td>
                        <td className="link"><a style={{ cursor: 'pointer' }}>Cancelar</a></td>
                    </tr>
                    <tr>
                        <td>C#</td>
                        <td>13/12/2021</td>
                        <td>9:00 - 10:00</td>
                        <td>João Eduardo dos Santos</td>
                        <td className="link"><a style={{ cursor: 'pointer' }}>Cancelar</a></td>
                    </tr>
                    <tr>
                        <td>Java Script</td>
                        <td>12/12/2021</td>
                        <td>13:00 - 14:00</td>
                        <td>Luis Henrique Duarte</td>
                        <td className="link"><a style={{ cursor: 'pointer' }}>Cancelar</a></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Professor
