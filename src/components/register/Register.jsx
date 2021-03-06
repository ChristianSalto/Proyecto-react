import React, { Component } from 'react';
import { getRegister } from '../../services/api';
import { Link } from 'react-router-dom';
import { Button, Layout, Input, FieldContainer, FieldTitle, FieldError } from './StyleRegister';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            error: ""
        }
    }

    handleRegister = async (event) => {
        event.preventDefault();
        const { username, password } = event.target;
        const { data } = await getRegister(username.value, password.value);
        //console.log(data)
        // debugger
        if (data.success) {
            this.setState({ success: data.success });
            //     console.log(data.success);
            this.props.history.push('/login', { state: this.state.success });
        } else {
            this.setState({ error: data.error, success: true });
            setTimeout(() => this.setState({ error: "" }), 5000);
        }
    }

    alreadyRegistered = () => {
        if (this.state.success) {
            this.props.history.push('/login', { state: this.state.success });
        } else {
            this.setState({ error: "Please, you have to register" });
            setTimeout(() => this.setState({ error: "" }), 5000);
        }
    }

    render() {
        return (
            <Layout>
                <form onSubmit={this.handleRegister} >
                    <FieldTitle className="register-title"><h1>Register</h1></FieldTitle>
                    <FieldContainer>
                        <label htmlFor="username">Username</label>
                        <Input type="text" name="username" className="login-input" placeholder="Username" required />
                    </FieldContainer>

                    <FieldContainer>
                        <label htmlFor="password">Password</label>
                        <Input type="password" name="password" className="login-input" placeholder="Password" required />
                    </FieldContainer>
                    <FieldContainer>
                        <Button primary type="submit" className="login-btn">Register</Button>
                        <Link to="/login">
                            <Button type="button" className="login-btn">Login</Button>
                        </Link>
                    </FieldContainer>
                    <FieldError className="error">{this.state.error}</FieldError>
                </form>
            </Layout>
        );
    }
}

export default Register;