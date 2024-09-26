import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useEffect } from "react";

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
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
