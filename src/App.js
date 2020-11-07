import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import profile_pic from "./img/profile_pic.jpg";



function App() {
  return (

    <body className="App">
      <header>
        <h1 id="top">Josh Dorn</h1>
      </header>
      <Navbar />
      <main>
        <br />
        <Container class="container">
          <Row>
            <Col md="6">
              <img id="pimg" src={profile_pic} alt="profile" />
            </Col>
          </Row>
          <br />
          <Row>
            <Col md="6">
              <p id="ptext">
                Josh Dorn graduated with highest honors from the
                University of California, Davis where he majored in linguistics. After taking a course on computational linguistics and an introductory Python course, 
                Josh knew he wanted to 
                continue studying computer science to build cool things to help people.
                 He is currently studying front-end engineering in
                Transition to Tech and is also interested in social impact
                investing and human-centered design. When not coding, you can
                find Josh reading, doing improv, and practicing Vipassana
                meditation.
              </p>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </body>
  );
}

export default App;
