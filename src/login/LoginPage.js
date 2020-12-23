import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { login} from "./login";
import {Link, useHistory} from "react-router-dom";
import './login.css';

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
        if (!userIndex && userIndex !== 0){
            setLoginError(true);
            return null;
        }
        history.push(`/user/${username}`);
    }


    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <div className={"username"}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Username: </Form.Label>
                    <Form.Control
                        className={"username-input"}
                        type="username"
                        value={username}
                        onChange={(input) => setUsername(input.target.value)}
                    />
                </Form.Group>
                </div>
                <div className={"password"}>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control
                        className={"password-input"}
                        type="password"
                        value={password}
                        onChange={(input) => setPassword(input.target.value)}
                    />
                </Form.Group>
                </div>
                <Button block size="lg" type="submit" disabled={!validateForm()} >
                    Login
                </Button>
                {loginError && (<div>Login Error</div>)}
            </Form>
            <Link to={'/signup'}>SignUp</Link>
        </div>
    );
}