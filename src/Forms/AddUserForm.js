import React, { useState } from 'react';
import '../pages/Cadastro.css';
import Multiselect from 'multiselect-react-dropdown';

const AddUserForm = (props) => {

    const initialFormState = { id: null, name: '', email: '', cpf: '', phone: '', password: '', checkbox: '' }
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
            {/* <div className="input-form">
                <label className="text-label">CPF</label>
                <input className="text-input"
                    type="text"
                    name="cpf"
                    value={user.cpf}
                    onChange={handleInputChange} />
            </div> */}
            {/* <div className="input-form">
                <label className="text-label">Telefone</label>
                <input className="text-input"
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={handleInputChange} />
            </div> */}
            <div className="input-form">
                <label className="text-label">Senha</label>
                <input className="text-input"
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInputChange} />
            </div>
            <div className="input-form">
                <input className="checkbox-input"
                    type="checkbox"
                    name="checkbox"
                    value={user.checkbox}
                    checked={isChecked}
                    onChange={handleInputChange} />
                <label className="checkbox-label">Você é um professor?</label>
            </div>
            <div className="input-form">
                <label className="text-label">URL do Linkedin</label>
                <input className="text-input"
                    type="text"
                    name="url"
                    value={user.url}
                    onChange={handleInputChange} />
            </div>
            <div className="multiselct-form">
            <label className="text-label">Assuntos</label>
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
                displayValue="name" // Property name to display in the dropdown options
            />
             </div>
            <div className="button-form">
                <button className="btn-blue">Cadastre-se</button>
            </div>
        </form>
    )
}

export default AddUserForm
