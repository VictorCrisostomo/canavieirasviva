import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/carousel';
import Footer from './components/Footer';
import CardEmpresa from './components/CardsEmpresas';
import CardSobre from "./components/cards/sobre"
import CardPontosTuristicos from "./components/cards/pontosTuristicos"
import CardPescaEsportiva from "./components/cards/pescaEsportiva"
import CardGastronomia from "./components/cards/gastronomia"

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
        <CardSobre/>
      </React.Fragment>

      <React.Fragment>
        <CardPontosTuristicos/>
      </React.Fragment>

      <React.Fragment>
        <CardPescaEsportiva/>
      </React.Fragment>

      <React.Fragment>
        <CardGastronomia/>
      </React.Fragment>

      <React.Fragment>
        <CardEmpresa/>
      </React.Fragment>


      <React.Fragment>
        <Footer />
      </React.Fragment>

    </div>
  );
}

export default App;