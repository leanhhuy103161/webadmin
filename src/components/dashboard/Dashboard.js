import axios from "axios";
import React, { Component } from "react";
import Topmenu from "./Topmenu/Topmeunu"
import {Container, Row, Col, CardImg, CardSubtitle, CardText, Button, Card,
        CardBody, CardTitle } from "reactstrap"
import Paging from "./Pagination/Pagination"
import SideBar from "../sidebar/SideBar"
import "./Dashboard.css"
import { Redirect } from "react-router-dom"
export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            users: [],
            touchDelete: false
        }
        
    }

    handleClick(postID, e) {
        console.log("You clicked Delete Button");
        const headers = {
         'Authorization': localStorage.authorization
        }
        axios.delete("https://leanhhuy.herokuapp.com/posts/" + postID, {headers}).then(res => {
             console.log(res);
             this.setState({touchDelete:true})
         }); 
     }

    componentDidMount() {
        const headers = {
            'Authorization': localStorage.authorization
        }
        axios.get("https://leanhhuy.herokuapp.com/posts", {headers}).then(res => {
            this.setState({
                posts: res.data.posts
            })
        });
        console.log(this.state.posts);
    }

    render() {
        const { posts, touchDelete } = this.state;
        console.log(this.state.posts);
        if (!localStorage.authorization) {
            return <Redirect to = '/login' />
          }
        if (touchDelete === true) {
            return <Redirect to='/'/>
        }
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
                                    posts.map(post => (
                                        <Col xs="4">
                                            <Card>
                                                <CardImg top width="100%" sizes="255"
                                                    src={`data:image/jpeg;base64,${post.image}`}
                                                    alt="Card image cap" />
                                                <CardBody>
                                                    <CardTitle tag="h5">{post.owner.firstName} {post.owner.lastName}</CardTitle>
                                                    <CardText>{post.description}</CardText>
                                                    <Button onClick={this.handleClick.bind(this, post._id)}>Remove</Button>
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
