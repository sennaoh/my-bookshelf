import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import {App, BookLibrary, About} from "./App";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';



ReactDOM.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/my-books" element={<BookLibrary />}/>
    <Route path="/about" element={<About />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
