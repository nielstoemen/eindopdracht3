import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import {Link, Route, Routes} from "react-router-dom";
import { Info } from "./info";
import { Searchthing } from "./Searchthing";

function App() {
  

  

  return (

    <>
    <div className="homeApp">
      <button className="searchbutton">
      <Link to="/search">Search Page</Link> <br></br>
      </button>


      <Routes>
        <Route path="/search" element={<Searchthing />}/>
        <Route path="/extraInfo" element={<Info />}/>
      </Routes>
      
      


      </div>
      <footer className="footer1">
        <button className="resultnotfountbutton">
        <Link to="/extrainfo">no results?</Link>
        </button>
      </footer>
    </>
  );
}

export default App;