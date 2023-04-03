import React from 'react'
import Contato from "./modals/contato"

import AlegriaDeViver1 from "./modals/AlegriadDeViver"
import BahiadoMizil from "./modals/BahiaDoMizil"
import Bambuzada from "./modals/Bambusada"
import Casajardim from "./modals/CasaJardim"
import Comandante from "./modals/ComandanteDasIlhas"
import CostadoSol from "./modals/CostaDoSol"
import HotelPatipe from "./modals/HotelPatipe"
import Kigata from "./modals/Kigata"
import LojaDoReal from "./modals/LojaDoReal"
import Makaira from "./modals/Makaira"
import Oasis from "./modals/Oasis"
import OldSchool from "./modals/OldSchool"
import PortoDosMilagres from "./modals/PortoDosMilagres"
import StellaMaris from "./modals/StellaMaris"

import patipe from "../img/patipe.png"
import oasis from "../img/oasis.png"
import stellamaris from "../img/stellamaris.png"
import lojadoreal from "../img/lojadoreal.jpg"
import alegriadeviver from "../img/alegriadeviver.png"
import costadosol from "../img/CostadoSol.png"
import BahiaDoMizil from "../img/bahiadomizil.png"
import makaira from "../img/makaira.png"
import bambusada from "../img/bambusada.jpg"
import casaJardim from "../img/CasaJardim.png"
import kigata from "../img/kigata.jpg"
import PortodosMilagres from "../img/portodosmilagres.png"
import tijolinho from "../img/tijolinho.png"
import oldSchool from "../img/oldschool.png"



const CardsFilmes = () => {
  return (
    <section className='carousel-content'>
        <div className="carousel-header">
            <h3 id='empresas'>Empresas Parceiras</h3>
        </div>

        <div className='carousel-card'>
                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">
                            <img style={{width: '8em'}} src={patipe} alt="" />
                        </div>
                        <div className="img-logo">
                        <HotelPatipe/>
                        </div>
                    </div>
                </article>

                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">
                            <img style={{width: '6em'}} src={oasis} alt="" />
                        </div>
                        <div className="img-logo">
                        <Oasis />
                        </div>
                    </div>
                </article>

                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">
                            <img style={{width: '5em'}} src={stellamaris} alt="" /> 
                        </div>
                        <div className="img-logo">
                        <StellaMaris />
                        </div>
                    </div>
                </article>

                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">
                            <img style={{width: '8.5em'}} src={lojadoreal} alt="" /> 
                        </div>
                        <div className="img-logo">
                        <LojaDoReal />
                        </div>
                    </div>
                </article>

                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">
                        <img style={{width: '7em'}} src={alegriadeviver} alt="" /> 
                        </div>
                        <div className="img-logo">
                        <AlegriaDeViver1/>
                        </div>
                    </div>
                </article>

                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">
                        <img style={{width: '5.7em'}} src={costadosol} alt="" />    
                        </div>
                        <div className="img-logo">
                        <CostadoSol />
                        </div>
                    </div>
                </article>

                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">
                        <img style={{width: '9.5em'}} src={BahiaDoMizil} alt="" />    
                        </div>
                        <div className="img-logo">
                        <BahiadoMizil />
                        </div>
                    </div>
                </article>

                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">
                        <img style={{width: '5em'}} src={makaira} alt="" />    
                        </div>
                        <div className="img-logo">
                        <Makaira />
                        </div>
                    </div>
                </article>

                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">
                        <img style={{width: '10.5em'}} src={bambusada} alt="" />
                        </div>
                        <div className="img-logo">
                        <Bambuzada />
                        </div>
                    </div>
                </article>

                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">
                        <img style={{width: '10em'}} src={casaJardim} alt="" />    
                        </div>
                        <div className="img-logo">
                        <Casajardim />
                        </div>
                    </div>
                </article>

                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">
                        <img style={{width: '9em'}} src={kigata} alt="" />    
                        </div>
                        <div className="img-logo">
                        <Kigata />
                        </div>
                    </div>
                </article>

                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">
                        <img style={{width: '5em'}} src={PortodosMilagres} alt="" />
                        </div>
                        <div className="img-logo">
                        <PortoDosMilagres />
                        </div>
                    </div>
                </article>
                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">Comandante das Ilhas</div>
                        <div className="img-logo">
                        <Comandante />
                        </div>
                    </div>
                </article>
                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">
                        <img style={{width: '7em'}} src={tijolinho} alt="" />    
                        </div>
                        <div className="img-logo">
                        <Contato />
                        </div>
                    </div>
                </article>
                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">
                        <img style={{width: '5em'}} src={oldSchool} alt="" />    
                        </div>
                        <div className="img-logo">
                        <OldSchool />
                        </div>
                    </div>
                </article>





        </div>
    </section>

  )
}

export default CardsFilmes