import React, { Component } from "react";
import Header from "./components/Header";
import LeadParagraph from "./components/LeadParagraph";
import Values from "./components/Values";
import Services from "./components/Services";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Container } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <section id="about" />
          <LeadParagraph
            title="Who We Are"
            details="We build custom web solutions to enable small businesses gain exposure online. We are coders. We are designers. We love open source. We have served our country and continue to serve. We are sacodersunited."
          />
          <Values />

          <section id="services" />
          <LeadParagraph
            title="Services"
            details="We offer a variety of solutions for all budgets. Whether it is a single page information site to a fully featured web application sacodersunited can make it happen."
          />
          <Services />

          <section id="team" />
          <LeadParagraph
            title="Team"
            details="Band members have a special bond. A great band is more than just some people working together. It's like a highly specialized army unit, or a winning sports team. A unique combination of elements that becomes stronger together than apart. - Steven Van Zandt"
          />
          <Team />

          <section id="contact" />
          <Contact />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
