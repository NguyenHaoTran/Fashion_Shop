import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useEffect } from 'react';

import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Products from "./pages/products/Products.jsx";
import News from "./pages/news/News";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/Fashion_Shop/home" element={<Home />} />
          <Route path="/Fashion_Shop/about" element={<About />} />
          <Route path="/Fashion_Shop/products" element={<Products />} />
          <Route path="/Fashion_Shop/news" element={<News />} />
          <Route path="/Fashion_Shop/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
