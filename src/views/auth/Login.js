import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./Login.css"
export default class Login extends Component {
    constructor(props) {
        super(props) 
        
        this.state = {
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit(event) {
        const {email, password} = this.state;
        axios
            .post(
                "url",
                {
                    admin: {
                        email: email,
                        password: password
                    }
                }
            )
            .then(res => {console.log(res)}
            )
            .catch(err => {
                console.log("login error", err)
            });
    }
    
    render() {
        return (
            <div className="Login-background">
                <div className="Login-form">
                    <Form>
                       <FormGroup>
                        <Label for="Account" className="align">ACCOUNT</Label>
                        <Input type="email" name="email" id="Account" placeholder="Admin Account" 
                             value={this,this.state.email} onChange={this.handleChange}
                            required
                        />
                       </FormGroup>
                       <FormGroup>
                        <Label for="Password">PASSWORD</Label>
                        <Input type="password" name="password" id="Password" placeholder="password placeholder" 
                            value={this,this.state.password} onChange={this.handleChange}
                            required
                        />
                       </FormGroup>
                        <Button className="w-100" type="submit">Login</Button>
                    </Form>
                </div>
            </div>
        )
    }
}

