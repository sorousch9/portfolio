import { useState } from "react";
import Portfolio from "./commponents/portfolio/Portfolio";
import Topbar from "./commponents/topbar/Topbar";
import Intro from "./commponents/intro/Intro";
import Testimonials from "./commponents/testimonials/Testimonials";
import Works from "./commponents/works/Works";
import Contact from "./commponents/contact/Contact";
import "./app.scss";
import Menu from "./commponents/menu/Menu";
const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Testimonials />
        <Works />
        <Contact />
      </div>
    </div>
  );
};

export default App;
