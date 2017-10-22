import React, { Component } from "react";
import Header from "./components/Header";
import LeadParagraph from "./components/LeadParagraph";
import Values from "./components/Values";
import Services from "./components/Services";
import Team from "./components/Team";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LeadParagraph
          title="Who We Are"
          details="Pour-over intelligentsia yr banjo hot chicken health goth man braid ramps fingerstache. Hell of offal enamel pin occupy snackwave 3 wolf moon af heirloom normcore man bun bitters. Mumblecore copper mug before they sold out artisan direct trade. Lyft cardigan ennui dreamcatcher. Single-origin coffee tattooed dreamcatcher blue bottle green juice slow-carb hot chicken occupy venmo. "
        />
        <Values />
        <LeadParagraph
          title="Services"
          details="Listicle tumblr cold-pressed distillery freegan squid tote bag umami neutra cloud bread ethical vaporware hexagon mixtape meditation. +1 sustainable bitters tacos. VHS retro venmo, succulents wayfarers squid umami pickled banjo bicycle rights street art. Brunch typewriter cliche, offal put a bird on it paleo dreamcatcher 90's meditation distillery crucifix irony prism."
        />
        <Services />
        <LeadParagraph
          title="Team"
          details="Pour-over intelligentsia yr banjo hot chicken health goth man braid ramps fingerstache. Hell of offal enamel pin occupy snackwave 3 wolf moon af heirloom normcore man bun bitters. "
        />
        <Team />
      </div>
    );
  }
}

export default App;
