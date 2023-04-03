import { useRef } from "react"
import { FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  return (
    <header>
      <a href="/"><h3>Canavieiras Viva</h3></a>
        <nav ref={navRef}>

          <button className="btn-link" onClick={showNavbar}>
            <a href="#sobre">Sobre</a>
          </button>

          <button className="btn-link" onClick={showNavbar}>
          <a href="#pontosTuristicos">Pontos Turisticos</a>
          </button>

          <button className="btn-link" onClick={showNavbar}>
          <a href="#pescaEsportiva">Pesca Esportiva</a>
          </button>

          <button className="btn-link" onClick={showNavbar}>
          <a href="#gastronomia">Gastronomia</a>
          </button>

          <button className="btn-link" onClick={showNavbar}>
          <a href="#empresas">Empresas Parceiras</a>
          </button>

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
    </header>
  )
}

export default Navbar