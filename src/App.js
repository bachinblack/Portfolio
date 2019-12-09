import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faChevronUp } from '@fortawesome/free-solid-svg-icons'

import Home from './views/Home';
import Projects from './views/Projects';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      scrollDisplay: { display: "none" },
      navBar: {}
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      this.setState({
        scrollDisplay: { display: "block" },
        // navbar: { position: "fixed", backgroundColor: "#f8f9fa !important"}
      });
    } else {
      this.setState({
        scrollDisplay: { display: "none" },
        // navbar: { position: "static", backgroundColor: "transparent !important"}
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar id="home" bg="light" expand="lg" style={this.state.navbar}>
          <Navbar.Brand href="#home"><FontAwesomeIcon icon={faHome} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">ABOUT ME</Nav.Link>
              <Nav.Link href="#link">PROJECTS</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Looking for something?" className="mr-sm-2" />
            </Form>
          </Navbar.Collapse>
        </Navbar>
        {/* Each elem is a window'heighted view */}
        <Home />
        <Projects/>

        <a href="#home" className="navigator scrollup" style={this.state.scrollDisplay}><FontAwesomeIcon icon={faChevronUp} size="3x" /></a>
      </div>
    );
  }
}

export default App;
