import React from 'react'
import Contato from "./modals/contato"

const CardsFilmes = () => {
  return (
    <section className='carousel-content'>
        <div className="carousel-header">
            <h3>Empresas Parceiras</h3>
        </div>

        <div className='carousel-card'>
                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">LOGO</div>
                        <div className="img-logo">
                        <Contato />
                        </div>
                    </div>
                </article>

                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">LOGO</div>
                        <div className="img-logo">
                        <Contato />
                        </div>
                    </div>
                </article>

                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">LOGO</div>
                        <div className="img-logo">
                        <Contato />
                        </div>
                    </div>
                </article>

                <article className='card'>
                    <div className="film-bg">
                        <div className="img-logo">LOGO</div>
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