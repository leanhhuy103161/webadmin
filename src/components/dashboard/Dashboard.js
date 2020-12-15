import axios from "axios";
import React, { Component } from "react";
import Topmenu from "./Topmenu/Topmeunu"
import {Container, Row, Col, CardImg, CardSubtitle, CardText, Button, Card,
        CardBody, CardTitle } from "reactstrap"
import Paging from "./Pagination/Pagination"
import SideBar from "../sidebar/SideBar"
import "./Dashboard.css"
export default class Dashboard extends Component {
    constructor(props) {
        super(props)
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
        return (
            <div className="Dashboard">
                <div><Topmenu /></div>
                <Container fluid={true}>
                <Row >
                    <Col xs="2">
                        <div className="SideBar"><SideBar /></div>
                    </Col>
                    <Col>
                        <div className="Newfeed">
                            <Container>
                                <div>
                                    <h2>High interaction posts</h2>
                                </div>
                                <Row>
                                {
                                    users.map(user => (
                                        <Col xs="4">
                                            <Card>
                                                <CardImg top width="100%" sizes="255"
                                                    src={user.imageUrl}
                                                    alt="Card image cap" />
                                                <CardBody>
                                                    <CardTitle tag="h5">{user.first_name} {user.last_name}</CardTitle>
                                                    <CardText>Some quick example text to 
                                                        build on the card title and make up 
                                                        the bulk of the card's content.</CardText>
                                                    <Button>Remove</Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                ))} 
                            </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>
                    <div>
                        <Paging />
                    </div>
                </Container>
            </div>
        )
    }
}
