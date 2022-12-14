import './Navbar.css'
import CartWidget  from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link to={'/'}><h1 className="navbar-brand">Manga-Store</h1></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={'/'} className="nav-link active" aria-current="page">Mangas Disponibles</Link>
        </li>
        <li className="nav-item">
          <Link to={'/category/shonen'} className="nav-link">Shonen</Link>
        </li>
        <li className="nav-item">
          <Link to={'/category/seinen'} className="nav-link">Seinen</Link>
        </li>
        <li className="nav-item">
          <Link to={'/'} className="nav-link">Contactanos</Link>
        </li>
      </ul>
      <form className="d-flex">
        <CartWidget />
      </form>
    </div>
  </div>
</nav>
        /*<nav className='navbar bg-light'>
          <div className='container-fluid'>

            <span className='navbar-brand mb-0 h1'>Manga-Store</span>
            
            <div>
                <button>Mangas Disponibles</button>
            </div>
            <div>
                <button>Mangas Populares</button>
            </div>
            <CartWidget />
          </div>
        </nav>*/

    )
}











export default Navbar
