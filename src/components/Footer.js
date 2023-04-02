import React from 'react'

const Footer = () => {
  return (
    <div className='container-footer'>
    <footer className="top">
        <img src="https://logodownload.org/wp-content/uploads/2013/12/apple-logo-1-2.png" width={60} alt="" />
        <div className="links">
            <div>
                <h2>Canavieiras</h2>
                <a href="#sobre">Sobre</a>
                <a href="#pontosTuristicos">Pontos Turisticos</a>
                <a href="#pescaEsportiva">Pesca Esportiva</a>
                <a href="#gastronomia">Gastronomia</a>
                <a href="www.google.com">Empresas Parceiras</a>
            </div>
        </div>
    </footer>
    <footer className="botton">
        <div className="legal">
            <span>@ 2023 All rights reserved</span>
            <a href="www.google.com">Developed by Victor Crisóstomo</a>
        </div>
    </footer>
    </div>
  )
}

export default Footer