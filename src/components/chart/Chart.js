import React, { Component } from "react"
import { Bar, Line, Pie } from "react-chartjs-2";

import "./Chart.css"
import {Row, Col, Container} from "reactstrap"
import SideBar from "../sidebar/SideBar"
import Topmenu from "../dashboard/Topmenu/Topmeunu"


export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            barData : {
                labels: [
                    "Africa",
                    "Asia",
                    "Europe",
                    "Latin America",
                    "North America"
                ],
                datasets: [
                    {
                    label: "Population (millions)",
                    backgroundColor: [
                        "#3e95cd",
                        "#8e5ea2",
                        "#3cba9f",
                        "#e8c3b9",
                        "#c45850"
                    ],
                    data: [2478, 5267, 734, 784, 433]
                    }
                ]
            },
            pieData : {
                labels: [
                    "Africa",
                    "Asia",
                    "Europe",
                ],
                datasets: [
                    {
                    label: "Population (millions)",
                    backgroundColor: [
                        "#3e95cd",
                        "#8e5ea2",
                        "#3cba9f",
                    ],
                    data: [2478, 5267, 734]
                    }
                ]
            },
            lineData : {
                labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
                datasets: [
                    {
                    data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                    label: "Africa",
                    borderColor: "#3e95cd",
                    fill: false
                    },
                    {
                    data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                    label: "Asia",
                    borderColor: "#8e5ea2",
                    fill: false
                    },
                    {
                    data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                    label: "Europe",
                    borderColor: "#3cba9f",
                    fill: false
                    },
                    {
                    data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                    label: "Latin America",
                    borderColor: "#e8c3b9",
                    fill: false
                    },
                    {
                    data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
                    label: "North America",
                    borderColor: "#c45850",
                    fill: false
                    }
                ]
            }
        }
    }

    render() {
        const {barData, pieData, lineData} = this.state;
        return (
            <div>
                <div>
                    <Topmenu />
                </div>
                <Container fluid={true}>
                    <Row >
                        <Col xs="2">
                            <div className="SideBar"><SideBar /></div>
                        </Col>
                        <Col>
                            <div >
                                <div className="Chart-Bar">
                                    <Bar
                                        data={barData}
                                        options={{
                                        legend: { display: false },
                                        title: {
                                            display: true,
                                            text: "Users in the regions"
                                        }
                                    }}
                                    />
                                </div>
                                <div className="Chart-Line">
                                    <Line
                                        data={lineData}
                                        options={{
                                        title: {
                                            display: true,
                                            text: "user performance"
                                        },
                                        legend: {
                                            display: true,
                                            position: "bottom"
                                        }
                                        }}
                                    />
                                </div>
                                <div className="Chart-Pie">
                                    <Pie
                                        data={pieData}
                                        option={{
                                        title: {
                                            display: true,
                                            text: "Age",
                                        },
                                        legend: {
                                            display: false,
                                            position: "bottom"
                                        }
                                        }}
                                    />
                                </div>
                                <div className="Chart-Pie-2">
                                    <Pie
                                        data={pieData}
                                        option={{
                                        title: {
                                            display: true,
                                            text: "Age",
                                        },
                                        legend: {
                                            display: false,
                                            position: "bottom"
                                        }
                                        }}
                                    />
                                </div>
                            </div>
                        </Col>
                     </Row>
                </Container>
            </div>
        )
    }
}