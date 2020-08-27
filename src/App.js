import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import MainBody from './components/MainBody/MainBody';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="container-fluid px-2">
      <Header></Header>
      <MainBody></MainBody>
      <Footer></Footer>
    </div>
  );
}

export default App;