import React from 'react'

const sobre = () => {
  return (
    <main className="Container">
      
      <div className="textToptitleCard">
        <h2 id='sobre'>Sobre</h2>
      </div>

    <div className="Cards">

      <div className="ContentCard">
        <div className="imgContent">
        <img style={{width: '18em'}} src="https://media-cdn.tripadvisor.com/media/photo-c/1280x250/11/76/36/fd/vista-dos-casaroes-centenarios.jpg" alt="" />
        </div>
        <br />
          <p className="TextContent">
          Canavieiras é uma cidade localizada no estado da Bahia, no litoral sul, com uma população de cerca de 32 mil habitantes. É conhecida por suas praias paradisíacas e por ser uma das principais produtoras de cacau do Brasil.
          <br />
          A cidade tem uma história rica, que remonta ao período colonial, quando era um importante centro produtor de açúcar. No século XIX, a economia local mudou para a produção de cacau, que se tornou a principal atividade econômica da região.
          <br />
          Além das praias, Canavieiras também possui uma rica cultura, com uma gastronomia baseada em frutos do mar e um centro histórico preservado, com casarões coloniais e uma igreja do século XIX.
          <br />
          A cidade é um destino turístico popular para aqueles que procuram tranquilidade, contato com a natureza e um pouco de história e cultura.          </p>
      </div>
    </div>
  </main>
  )
}

export default sobre