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
      <Link to="/search">Search</Link> <br></br>


      <Routes>
        <Route path="/search" element={<Searchthing />}/>
        <Route path="/extraInfo" element={<Info />}/>
      </Routes>
      <Link to="/extrainfo">Result nog found</Link>
      

      </div>
    </>
  );
}

export default App;