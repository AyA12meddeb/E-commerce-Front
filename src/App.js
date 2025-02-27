import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NavBar from './components/NavBar';
import ContactUs from './pages/ContactUs';
import Products from './pages/Products';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <NavBar/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/Products" element={<Products />} />



     </Routes>
     <Footer/>
    </div>
  );
}

export default App;