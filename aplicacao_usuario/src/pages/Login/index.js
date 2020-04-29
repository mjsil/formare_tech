import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Container from '../../components/Container';
import { Form, SubmitButton } from './styles';

export default function Login() {
    const [userName, setUserName] = useState('');

    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();

        localStorage.setItem('userName', userName);

        history.push('/chat');
    }

    return (
        <Container>
            <h1>LOGIN</h1>

            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />
                <SubmitButton>LOGIN</SubmitButton>
            </Form>
        </Container>
    );
}
