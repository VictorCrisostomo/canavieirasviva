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
            <a href="/">Sobre</a>
          </button>

          <button className="btn-link" onClick={showNavbar}>
          <a href="/">Pontos Turisticos</a>
          </button>

          <button className="btn-link" onClick={showNavbar}>
          <a href="/">Gastronomia</a>
          </button>

          <button className="btn-link" onClick={showNavbar}>
          <a href="/">Empresas Parceiras</a>
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