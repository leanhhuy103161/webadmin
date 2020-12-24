import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios"
import { Button, Form, FormGroup, Label, Input, FormText, Col, Container, FormFeedback } from 'reactstrap';
import "./Login.css"
import { Redirect } from "react-router-dom"

import {faWeightHanging} from "@fortawesome/free-solid-svg-icons"


export default class Login extends Component {
    constructor(props) {
        super(props);
          this.state = {
          'email': '',
          'password': '',
          validate: {
            emailState: '',
          },
          redirect: null
        }
        this.handleChange = this.handleChange.bind(this);
      }
    
      validateEmail(e) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state
          if (emailRex.test(e.target.value)) {
            validate.emailState = 'has-success'
          } else {
            validate.emailState = 'has-danger'
          }
          this.setState({ validate })
        }
    
      handleChange = async (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        await this.setState({
          [ name ]: value,
        });
      }
    
      submitForm(e) {
        window.localStorage.clear();
        const { email, password } = this.state
        e.preventDefault();
        console.log(`Email: ${ this.state.email }`)
        console.log(`Password: ${ this.state.password }`)
        axios.post('https://leanhhuy.herokuapp.com/users/signin', {
                email: email,
                password: password
            }
        ).then(res => {
          console.log(res.headers.authorization)
          console.log(res.data._id);
          localStorage.setItem('authorization', "bearer " + res.headers.authorization)
          localStorage.setItem('userID', res.data._id)
          const headers = {
            'Authorization': localStorage.authorization
          }
          const userID = localStorage.userID
          console.log("userID: ", userID);
          axios.get('https://leanhhuy.herokuapp.com/users/'+ userID,{headers}).then(response => {
            console.log(response.data);
            if (response.data.user._id) {
              this.setState({
                redirect: true
              })
            }
            localStorage.setItem('avatar', response.data.user.avatar)
            localStorage.setItem('firstName', response.data.user.firstName)
            localStorage.setItem('lastName', response.data.user.lastName)
          }).catch(error => {
              console.log("login error", error)
          });
        }).catch(err => {
            console.log("login error", err)
        });
       
        
      }
  
      render() {
        const { email, password } = this.state;
        if (this.state.redirect) {
          return <Redirect to = '/dashboard' />
        }
        return (
          <Container className="Login">
            <h2>Sign In</h2>
            <Form className="form" onSubmit={ (e) => this.submitForm(e) }>
              <Col>
                <FormGroup>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="myemail@email.com"
                    value={ email }
                    valid={ this.state.validate.emailState === 'has-success' }
                    invalid={ this.state.validate.emailState === 'has-danger' }
                    onChange={ (e) => {
                                this.validateEmail(e)
                                this.handleChange(e)
                              } }
                  />
                  <FormFeedback valid>
                    That's a tasty looking email you've got there.
                  </FormFeedback>
                  <FormFeedback>
                    Uh oh! Looks like there is an issue with your email. Please input a correct email.
                  </FormFeedback>
                  <FormText>Your username is most likely your email.</FormText>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="********"
                    value={ password }
                    onChange={ (e) => this.handleChange(e) }
                />
                </FormGroup>
              </Col>
              <Button className="button">Submit</Button>
          </Form>
          </Container>
        );
      }
}

