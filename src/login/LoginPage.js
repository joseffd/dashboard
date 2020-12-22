import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {login} from "./login";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);
    const history = useHistory();
    function validateForm() {
        return username.length > 0 && password.length > 0;
    }
    function handleSubmit(event) {
        event.preventDefault();
        let userIndex = login(username, password);
        console.log(userIndex);
        if (!userIndex && userIndex !== 0){
            setLoginError(true);
            return null;
        }
        console.log('yes');
        history.push(`/user/${username}`);
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        autoFocus
                        type="username"
                        value={username}
                        onChange={(input) => setUsername(input.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(input) => setPassword(input.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()} >
                    Login
                </Button>
                {loginError && (<div>Login Error</div>)}
            </Form>
        </div>
    );
}