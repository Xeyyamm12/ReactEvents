import React from "react";
import NotificationsButton from "../src/Components/FunctionalComponents/NotificationsButton";
import Home from "./pages/Home";
import "./index.css";
import Nav from "./Components/Nav/Nav";
import { Router } from "marshrut/dist/marshrut.es";
import About from "./pages/About";
import Contact from "./pages/Contact";
const App = () => {
  return (
    // <div className="app">
    //   <div className="modal-dialog">
    //     <NotificationsButton />
    //   </div>
    // </div>
    <>
      <Nav />
      <Router path="/" component={Home} />
      <Router path="/about" component={About} />
      <Router path="/contacts" component={Contact} />
    </>
  );
};

export default App;
