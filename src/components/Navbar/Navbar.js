import './Navbar.css'
import CartWidget  from '../CartWidget/CartWidget'
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Manga-Store</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Mangas Disponibles</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Mangas Populares</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Contactanos</a>
        </li>
      </ul>
      <form class="d-flex">
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
