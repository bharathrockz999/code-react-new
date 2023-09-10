import React, { Component } from "react";
import '../src/components/css/style.css'
import Header from '../src/components/Header'
import Home from '../src/components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";


class App extends Component {

  render() {

    return (
   <>
        {/* <Header /> */}
        <BrowserRouter >
        <Header/>
        <Routes>
         
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
       
      
          </Route>
        </Routes>
        </BrowserRouter >
    
        </>
    );
  }
}

export default App;
