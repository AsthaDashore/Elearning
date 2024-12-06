import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Dashboard/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ProductList from './components/Products/ProductList';
import ProductDetail from './components/Products/ProductDetail';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';

function App() {
  return (

      <div>
        <Navbar />
        {/*<div className="container mt-4">*/}
        <div style={{ minHeight: '80vh' }}>
          <Routes>
            <Route path="/" exact Component={Home}/>
            <Route path="/login" Component={Login}/>
            <Route path="/register" Component={Register}/>
            <Route path="/products" exact Component={ProductList}/>
            <Route path="/products/:id" Component={ProductDetail}/>
          </Routes>
        </div>
        <Footer />
      </div>
  );
}

export default App;
