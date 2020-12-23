import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {getIndex, login} from "../login/login";
import ls from "local-storage";
import {useHistory} from "react-router-dom";


export default function SignupPage(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [signupError, setSignupError] = useState(false);
    const history = useHistory();

    function validateForm() {
        return username.length > 0 && password.length > 0 && password === confirmPassword;
    }
    function handleSubmit(event) {
        event.preventDefault();
        const users = ls.get('users') || [];
        let userIndex = getIndex(username, users);
        if (userIndex != -1){
            setSignupError(true);
            return null;
        }
        users.push({username, password, tasks: []});
        ls.set('users', users);
        history.push(`/`);
    }


    return (
        <div className="signup">

            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="username">
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
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={confirmPassword}
                        onChange={(input) => setConfirmPassword(input.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()} >
                    Login
                </Button>
                {signupError && (<div>Login Error</div>)}
            </Form>
        </div>)
}