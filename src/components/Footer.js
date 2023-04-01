import React from 'react'

const Footer = () => {
  return (
    <div className='container-footer'>
    <footer className="top">
        <img src="https://logodownload.org/wp-content/uploads/2013/12/apple-logo-1-2.png" width={70} alt="" />
        <div className="links">
            <div>
                <h2>Canavieiras</h2>
                <a href="www.google.com">Canes</a>
                <a href="www.google.com">Canes</a>
                <a href="www.google.com">Canes</a>
            </div>
            <div>
                <h2>Viva</h2>
                <a href="www.google.com">Viva</a>
                <a href="www.google.com">Viva</a>
                <a href="www.google.com">Viva</a>
            </div>
        </div>
    </footer>
    <footer className="botton">
        <div className="legal">
            <span>@ 2023 All rights reserved</span>
            <a href="www.google.com">License</a>
            <a href="www.google.com">terms</a>
            <a href="www.google.com">politica</a>
        </div>
    </footer>
    </div>
  )
}

export default Footer