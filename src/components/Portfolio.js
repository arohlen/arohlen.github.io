import React, { Component } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import github from '../images/github-octocat.png';
import flappy from '../images/flappy.jpg';

class Portfolio extends Component {
	render() {
		return (
			<div>
                <h1>Portfolio</h1>
                <Container>
                    <Row>
                        <Col lg={true}>
                            <Card bg="dark" text="white">
                                <Card.Img variant="top" src={flappy} />
                                <Card.Body>
                                    <Card.Title>Flappy Bird ML</Card.Title>
                                    <Card.Text>
                                    ML project where flappy birds learns to fly with a genetic algorithm.
                                    </Card.Text>
                                    <Button variant="primary">Check it out</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={true}>
                            <Card bg="dark" text="white">
                                <Card.Img variant="top" src={github} />
                                <Card.Body>
                                    <Card.Title>Flappy Bird ML</Card.Title>
                                    <Card.Text>
                                    ML project where flappy birds learns to fly with a genetic algorithm.
                                    </Card.Text>
                                    <Button variant="primary">Check it out</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={true}>
                            <Card bg="dark" text="white">
                                <Card.Img variant="top" src={github} />
                                <Card.Body>
                                    <Card.Title>Flappy Bird ML</Card.Title>
                                    <Card.Text>
                                    ML project where flappy birds learns to fly with a genetic algorithm.
                                    </Card.Text>
                                    <Button variant="primary">Check it out</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                    </Row>

                    

                    <Row>
                        <Col lg={true}>
                            <Card bg="dark" text="white">
                                <Card.Img variant="top" src={github} />
                                <Card.Body>
                                    <Card.Title>Flappy Bird ML</Card.Title>
                                    <Card.Text>
                                    ML project where flappy birds learns to fly with a genetic algorithm.
                                    </Card.Text>
                                    <Button variant="primary">Check it out</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={true}>
                            <Card bg="dark" text="white">
                                <Card.Img variant="top" src={github} />
                                <Card.Body>
                                    <Card.Title>Flappy Bird ML</Card.Title>
                                    <Card.Text>
                                    ML project where flappy birds learns to fly with a genetic algorithm.
                                    </Card.Text>
                                    <Button variant="primary">Check it out</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={true}>
                            <Card bg="dark" text="white">
                                <Card.Img variant="top" src={github} />
                                <Card.Body>
                                    <Card.Title>Flappy Bird ML</Card.Title>
                                    <Card.Text>
                                    ML project where flappy birds learns to fly with a genetic algorithm.
                                    </Card.Text>
                                    <Button variant="primary">Check it out</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                    </Row>

        
                </Container>
            </div>
		);
	}
}

export default Portfolio;