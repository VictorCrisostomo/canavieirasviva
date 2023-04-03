import React from 'react'

import acooptur from "../img/acooptur.png"

const Footer = () => {
  return (
    <div className='container-footer'>
    <footer className="top">
        <img src={acooptur} width={110} alt="" />
        <div className="links">
            <div>
                <h2>Canavieiras</h2>
                <a href="#sobre">Sobre</a>
                <a href="#pontosTuristicos">Pontos Turisticos</a>
                <a href="#pescaEsportiva">Pesca Esportiva</a>
                <a href="#gastronomia">Gastronomia</a>
                <a href="#empresas">Empresas Parceiras</a>
            </div>
        </div>
    </footer>
    <footer className="botton">
        <div className="legal">
            <span>@ 2023 All rights reserved</span>
            <a href="https://github.com/VictorCrisostomo">Developed by Victor Crisóstomo</a>
        </div>
    </footer>
    </div>
  )
}

export default Footer