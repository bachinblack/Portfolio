import './App.scss';

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import Home from './views/Home';
import About from './views/About';
import Projects from './views/Projects';
import Photos from './views/Photos';
import Footer from './views/Footer';


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
      });
    } else {
      this.setState({
        scrollDisplay: { display: "none" },
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar id="nav-home" bg="light" expand="lg" style={this.state.navbar}>
          <Navbar.Brand href="#nav-home"><FontAwesomeIcon icon={faHome} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#about">ABOUT ME</Nav.Link>
              <Nav.Link href="#projects">PROJECTS</Nav.Link>
            </Nav>
            {/* <Form inline>
              <FormControl type="text" placeholder="Looking for something?" className="mr-sm-2" />
            </Form> */}
          </Navbar.Collapse>
        </Navbar>
        <Home />
        <About />
        <Projects />
        {/* <Photos /> */}
        <Footer />
        {/* Bottom right button to go back on top of the page */}
        <a href="#home" className="navigator scrollup" style={this.state.scrollDisplay}><FontAwesomeIcon icon={faChevronUp} size="3x" /></a>
        {/* Bottom left button to go to the next section */}
        {/* <a href="#projects" className="navigator scrolldown" style={this.state.scrollDisplay}><FontAwesomeIcon icon={faChevronDown} size="3x" /></a> */}
      </div>
    );
  }
}

export default App;
