import React, { Component } from "react";
import '../src/components/css/style.css'
import Header from '../src/components/Header'
import Home from '../src/components/Home'
import About from './project-ui/About'
import { BrowserRouter, Routes, Route } from "react-router-dom";


class App extends Component {

  render() {

    return (
      <>
        {/* <Header /> */}
        <BrowserRouter >
          <Header />
          <Routes>
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/About" element={<About />} />
          </Routes>
        </BrowserRouter >

      </>
    );
  }
}

export default App;
