import React, { Component } from "react"
import {Table, Container, Row, Col, Button} from "reactstrap"
import {} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Topmenu from "../dashboard/Topmenu/Topmeunu"
import SideBar from "../sidebar/SideBar"
import "./Table.css"
import axios from "axios";
import { Redirect } from "react-router-dom"


export default class TableUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            touchDelete: false
        }
    }

    handleClick(userID, e) {
       console.log("You clicked Delete Button");
       const headers = {
        'Authorization': localStorage.authorization
       }
       axios.delete("https://leanhhuy.herokuapp.com/users/" + userID, {headers}).then(res => {
            console.log(res);
            this.setState({touchDelelte:true})
        }); 
    }
    componentDidMount() {
        axios.get("https://leanhhuy.herokuapp.com/users").then(res => {
            this.setState({
                users: res.data.users
            })
        });
        console.log(this.state.users);
    }

    render() {
        const { users, touchDelete } = this.state;
        if (!localStorage.authorization) {
            return <Redirect to = '/login' />
          }
        if (touchDelete === true) {
            return <Redirect to='/table'/>
        }
        return(
            <div>
                <div>
                    <Topmenu/>
                </div>
                <Container fluid={true}>
                    <Row >
                        <Col xs="2">
                            <div className="SideBar"><SideBar /></div>
                        </Col>
                        <Col>
                                <div className="Table">
                                    <div >
                                        <h3>Users</h3>
                                    </div>
                                    <div className="TableUsers">
                                        <Table dark>
                                            <thead>
                                                <tr>
                                                <th>avatar</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                                <th>Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {users.map(user => (
                                                <tr>
                                                <th scope="col"><img className="avatar" src={`data:image/jpeg;base64,${user.avatar}`} alt="avatar" width="30" height="30" /></th>
                                                <td>{user.firstName}</td>
                                                <td>{user.lastName}</td>
                                                <td>{user.email}</td>
                                                <th scope="col"><Button href='/table' onClick={this.handleClick.bind(this, user._id)}>Remove</Button></th>
                                                </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}