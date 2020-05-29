import React, { Component } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

// import github from '../images/github-octocat.png';
import mnist from '../images/mnist.png';

//import flappy from '../images/flappy.jpg';

class Portfolio extends Component {
	render() {
		return (
			<div>
                <h1 id="titleh1">Portfolio</h1>

                    <Container>
                        <Row>
                            <Col md={4}>
                                <Card bg="dark" text="white">
                                    <Card.Img variant="top" src={mnist}/>
                                    <Card.Body>
                                        <Card.Title>Hand drawn digit classifier</Card.Title>
                                        <Card.Text>
                                        ML project where you can draw a digit and have it interpreted by an AI.
                                        </Card.Text>
                                        <Button href='/portfolio/digits'>Try it out!</Button>
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