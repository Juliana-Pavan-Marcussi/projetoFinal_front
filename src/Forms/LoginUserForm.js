import React, { useState } from 'react';
import { Button } from 'reactstrap';

const LoginUserForm = (props) => {

    const initialFormState = {  email: '', password: '' }
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
            <div className="button-form">
            <Button color="primary">Entrar</Button>
            </div>
        </form>
    )
}

export default LoginUserForm
