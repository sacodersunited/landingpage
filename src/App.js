import React, { Component } from "react";
import Header from "./components/Header";
import LeadParagraph from "./components/LeadParagraph";
import Values from "./components/Values";
import Services from "./components/Services";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Container } from "reactstrap";
import GlobalStyles from "./GlobalStyles";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyles />
        <Header />
        <section id="about" />
        <LeadParagraph title="Who We Are" details="" />
        <Container>
          <Values />
        </Container>

        <section id="services" />
        <LeadParagraph
          title="Services"
          details="We offer a variety of solutions for all budgets. Whether it is a single page information site to a fully featured web application sacodersunited can make it happen."
        />
        <Container>
          <Services />
        </Container>

        <section id="team" />
        <LeadParagraph
          title="Team"
          details="Band members have a special bond. A great band is more than just some people working together. It's like a highly specialized army unit, or a winning sports team. A unique combination of elements that becomes stronger together than apart. - Steven Van Zandt"
        />
        <Team />

        <section id="contact" />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
