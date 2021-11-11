import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Allproducts from './pages/AllProducts/Allproducts';
import NoMatch from './pages/NoMatch/NoMatch.js';
import DashBoard from './pages/DashBoard/DashBoard';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import PreLoader from './pages/Preloader/PreLoader';
import React, { useState } from 'react';
import AuthProvider from './Provider/AuthProvider';
import ProductProvider from './Provider/ProductProvider';


function App() {
  const [loading, setLoading] = useState(true);
  window.addEventListener('load', () => {
    setLoading(false)
  })
  return (
    <AuthProvider>
      <ProductProvider>
        <div className="App font-oswald">
          {
            loading ? <PreLoader /> :
              <Router>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/all-products" element={<Allproducts />} />
                  {/* <Route path="/dashboard" element={<PrivateRoute><DashBoard /></PrivateRoute>} /> */}
                  <Route path="/dashboard" element={<DashBoard />} />
                  <Route path="*" element={<NoMatch />} />
                </Routes>
              </Router>
          }
        </div>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
