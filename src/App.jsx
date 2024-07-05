import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Header from './components/header/Header'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Products from './pages/products/Products'
import News from './pages/news/News'
import Contact from './pages/contact/Contact'


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
