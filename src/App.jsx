import React from "react";
import TopBar from "../src/components/topbar/TopBar";
import Intro from "../src/components/intro/Intro";
import Portafolio from "../src/components/portafolio/Portafolio";
import Contact from "../src/components/contact/Contact";
import "./app.scss";
import Menu from "./components/menu/Menu";
import { useState } from "react";
import Works from "./components/works/Works";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portafolio />
        <Works />
        <Contact />
      </div>
    </>
  );
};

export default App;
