import React from 'react'

const gastronomia = () => {
  return (
    <main className="Container">
      
    <div className="textToptitleCard">
      <h2 id='gastronomia'>Gastronomia</h2>
    </div>

      <div className="Cards">
          <div className="textToptitleCard">
              <h4>| Cabeça de Robalo:</h4>
          </div>
          <p className="TextContent">
          Comida típica de Canavieiras, é uma iguaria disputada! E uma delícia!
          </p>
          <div className="imgContent">
              <img style={{width: '18em'}} src="https://chefemcasablog.files.wordpress.com/2019/07/cabeca-robalo.jpg?w=663" alt="" />
          </div>
          <br />
          <p className="TextContent">
            Trata-se da cabeça do caranguejo limpa e recheada com uma moqueca feita do catado das pernas e poãs do caranguejo e fechada com o peito do mesmo!
          </p>
          <br />
          <p className="TextContent">
            A Cabeça de Robalo é sempre acompanhada por um pirão feito com o caldo da moqueca. 
          </p>
          <div className="imgContent">
            <img style={{width: '18em'}} src="https://conversadebalcao.com.br/wp-content/uploads/2015/10/IMG_20151023_115417904-copy.jpg" alt="" />
          </div>
          <br />
          <p className="TextContent">
            O prato é uma especialidade da região de Canavieiras e é muito apreciado pelos moradores locais e pelos turistas que visitam a cidade.
          </p>
          <div className="imgContent">
          <img style={{width: '18em'}} src="https://media-cdn.tripadvisor.com/media/photo-s/0a/66/6a/13/cabeca-de-robalo.jpg" alt="" />

          </div>
          <br />
          <p className="TextContent">
            Além do sabor, o prato também tem um valor cultural importante, pois representa a tradição da pesca e da culinária local. É uma experiência gastronômica única para quem visita a cidade e deseja experimentar o melhor da culinária de frutos do mar da região.
          </p>
      </div>
</main>
  )
}

export default gastronomia