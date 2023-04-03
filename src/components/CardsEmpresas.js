import React from 'react'
import Contato from "./modals/contato"

import patipe from "../img/patipe.png"
import oasis from "../img/oasis.png"
import stellamaris from "../img/stellamaris.png"
import lojadoreal from "../img/lojadoreal.jpg"
import alegriadeviver from "../img/alegriadeviver.png"
import costadosol from "../img/CostadoSol.png"
import BahiaDoMizil from "../img/bahiadomizil.png"
import Makaira from "../img/makaira.png"
import Bambusada from "../img/bambusada.jpg"
import CasaJardim from "../img/CasaJardim.png"
import Kigata from "../img/kigata.jpg"


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
                        <Contato />
                        </div>
                    </div>
                </article>

                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">
                            <img style={{width: '6em'}} src={oasis} alt="" />
                        </div>
                        <div className="img-logo">
                        <Contato />
                        </div>
                    </div>
                </article>

                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">
                            <img style={{width: '5em'}} src={stellamaris} alt="" /> 
                        </div>
                        <div className="img-logo">
                        <Contato />
                        </div>
                    </div>
                </article>

                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">
                            <img style={{width: '8.5em'}} src={lojadoreal} alt="" /> 
                        </div>
                        <div className="img-logo">
                        <Contato />
                        </div>
                    </div>
                </article>

                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">
                        <img style={{width: '7em'}} src={alegriadeviver} alt="" /> 
                        </div>
                        <div className="img-logo">
                        <Contato />
                        </div>
                    </div>
                </article>

                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">Pousada Costa do Sol</div>
                        <div className="img-logo">
                        <Contato />
                        </div>
                    </div>
                </article>

                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">Bahiadomizil</div>
                        <div className="img-logo">
                        <Contato />
                        </div>
                    </div>
                </article>

                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">Makaira</div>
                        <div className="img-logo">
                        <Contato />
                        </div>
                    </div>
                </article>

                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">Bambusada</div>
                        <div className="img-logo">
                        <Contato />
                        </div>
                    </div>
                </article>

                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">Casa Jardim</div>
                        <div className="img-logo">
                        <Contato />
                        </div>
                    </div>
                </article>

                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">Kigata</div>
                        <div className="img-logo">
                        <Contato />
                        </div>
                    </div>
                </article>

                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">Porto dos milagres</div>
                        <div className="img-logo">
                        <Contato />
                        </div>
                    </div>
                </article>
                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">Comandante das Ilhas</div>
                        <div className="img-logo">
                        <Contato />
                        </div>
                    </div>
                </article>
                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">Cabana Tijolinho</div>
                        <div className="img-logo">
                        <Contato />
                        </div>
                    </div>
                </article>
                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">Old School</div>
                        <div className="img-logo">
                        <Contato />
                        </div>
                    </div>
                </article>





        </div>
    </section>

  )
}

export default CardsFilmes