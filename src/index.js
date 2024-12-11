import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import HomePage from './Pages/HomePage';




import ContactPage from './Pages/ContactPage';
import Shoppage from './Pages/Shoppage';

import ProductSet from './Pages/ProductSet';
import ListBrands from './Pages/ListBrands';
import ProductDetail1 from './asset/Components/ProductDetail1';
import Bestsell from './Pages/Bestsell';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';
import Page7 from './components/Page7';
import Page8 from './components/Page8';
import Logo1 from './components/Logo1';
import Logo2 from './components/logo2';
import Logo3 from './components/Logo3';
import Logo4 from './components/Logo4';
import Logo5 from './components/Logo5';
import Logo6 from './components/Logo6';





// import ProductDetail1 from './components/ProductDetail1';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} />
        <Route path="/page7" element={<Page7 />} />
        <Route path="/page8" element={<Page8 />} />
        <Route path="/bestseller" element={<Bestsell />} />

        <Route path="/clothes" element={<Shoppage />} />

       


        <Route path="/skincare" element={<ContactPage />} />

        <Route path="/skincareSets" element={<ProductSet />} />



        <Route path="/brands" element={<ListBrands />} />
        <Route path="/product1/:id1" element={<ProductDetail1 />} />

        <Route path="/logo1" element={<Logo1 />} />
        <Route path="/logo2" element={<Logo2 />} />
        <Route path="/logo3" element={<Logo3 />} />
        <Route path="/logo4" element={<Logo4 />} />
        <Route path="/logo5" element={<Logo5 />} />
        <Route path="/logo6" element={<Logo6 />} />


      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();


