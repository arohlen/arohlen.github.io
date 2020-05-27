import React , {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';

class App extends Component{

    render() {

      return (

        <Router>
				  <div className="App">
					  <Navbar bg="dark" variant="dark" collapseOnSelect expand="sm">
              <Navbar.Brand as={NavLink} to="/">Andreas Rohlén <i class="las la-kiwi-bird"></i></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link as={NavLink} to="/"> <i class="las la-home"></i> Home  </Nav.Link>
                <Nav.Link as={NavLink} to="/portfolio"> <i class="las la-suitcase"></i> Portfolio  </Nav.Link>
                <Nav.Link as={NavLink} to="/about"> <i class="las la-user"></i> About me  </Nav.Link>
                <Nav.Link as={NavLink} to="/contact"> <i class="las la-address-book"></i> Contact  </Nav.Link>
              </Nav>
              </Navbar.Collapse>
					  </Navbar>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
            </Switch>
				  </div>
        </Router>

      
      );
      
    }
}

export default App;
