import React, { Component } from "react";
import Header from "./components/Header";
import LeadParagraph from "./components/LeadParagraph";
import Values from "./components/Values";
import Services from "./components/Services";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Container } from "reactstrap";
import ScrollableAnchor from "react-scrollable-anchor";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <section id="about" />
          <LeadParagraph
            title="Who We Are"
            details="Pour-over intelligentsia yr banjo hot chicken health goth man braid ramps fingerstache. Hell of offal enamel pin occupy snackwave 3 wolf moon af heirloom normcore man bun bitters. Mumblecore copper mug before they sold out artisan direct trade. Lyft cardigan ennui dreamcatcher. Single-origin coffee tattooed dreamcatcher blue bottle green juice slow-carb hot chicken occupy venmo. "
          />
          <Values />
          <section id="services" />
          <LeadParagraph
            title="Services"
            details="Listicle tumblr cold-pressed distillery freegan squid tote bag umami neutra cloud bread ethical vaporware hexagon mixtape meditation. +1 sustainable bitters tacos. VHS retro venmo, succulents wayfarers squid umami pickled banjo bicycle rights street art. Brunch typewriter cliche, offal put a bird on it paleo dreamcatcher 90's meditation distillery crucifix irony prism."
          />
          <Services />
          <section id="team" />

          <LeadParagraph
            title="Team"
            details="Pour-over intelligentsia yr banjo hot chicken health goth man braid ramps fingerstache. Hell of offal enamel pin occupy snackwave 3 wolf moon af heirloom normcore man bun bitters. "
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
