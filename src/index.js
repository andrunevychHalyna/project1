import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";



ReactDOM.render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<App/>}>
          <Route path="/expenses" element={<Expenses/>}/>
          <Route path="/invoices" element={<Invoices/>}/>
          </Route>
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


