import React, { Component } from 'react';
import profilepic from "../images/profil.jpg";
import { Container,Col ,Row} from 'react-bootstrap';

class Home extends Component {
	render() {
		return (
			<div class="container-fluid">
                <Row className="homeRow" sm="fluid">
                    <Col md={4}>
                        <img id="profilepic" src={profilepic} alt="" width="300" height="300"/>
                    </Col>

                    <Col md={4}> 
                    <h1 id="aboutH1">Welcome to my portfolio! </h1>
                    <p id="aboutText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <span id="highlight-text">dolore</span> magna aliqua. Ut enim ad minim veniam, quis nostrud <span id="highlight-text">exercitation</span> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in <span id="highlight-text">voluptate</span> velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia <span id="highlight-text">deserunt</span> mollit anim id est laborum.
                        </p>
                    </Col>
                </Row>
                    
                <Container className="linkContainer">
                <a href="https://github.com/arohlen?tab=repositories">
                    <i class="lab la-github la-5x"></i>
                </a>
                <a href="https://www.linkedin.com/in/arohlen/">
                       <i class="lab la-linkedin la-5x"></i>
                </a>
                <a href="mailto:arohlen@kth.se">
                    <i class="las la-at la-5x"></i>
                </a>
                </Container>
                
            </div>
		);
	}
}

export default Home;