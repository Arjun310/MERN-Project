import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home";
import Create from "./Components/Create";
import Edit from "./Components/Edit";
import Read from "./Components/Read";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/read/:id" element={<Read />}/>
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
