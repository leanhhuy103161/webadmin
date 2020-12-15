import React, { Component } from "react"
import {Table, Container, Row, Col} from "reactstrap"
import {} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Topmenu from "../dashboard/Topmenu/Topmeunu"
import SideBar from "../sidebar/SideBar"
import "./Table.css"
import axios from "axios";


export default class TableUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get("https://uqtik.sse.codesandbox.io/users").then(res => {
            this.setState({
                users: res.data
            })
        });
        console.log(this.state.users);
    }

    render() {
        const { users } = this.state;
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
                                                <th>#</th>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Username</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {users.map(user => (
                                                <tr>
                                                <th scope="col">{user.id}</th>
                                                <td>{user.first_name}</td>
                                                <td>{user.last_name}</td>
                                                <td>{user.email}</td>
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