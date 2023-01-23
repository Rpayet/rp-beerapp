import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Pages/Home';
import BeerItem from './Pages/BeerItem';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path='/beer/:id' element={<BeerItem/>}/>
        
        
      </Route>
    </Routes>
  </BrowserRouter>
);

