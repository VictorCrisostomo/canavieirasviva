import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Navbar />
      </React.Fragment>

      <React.Fragment>
        <Carousel />
      </React.Fragment>

      <React.Fragment>
        <Footer />
      </React.Fragment>

    </div>
  );
}

export default App;