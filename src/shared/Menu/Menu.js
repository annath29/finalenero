import { Link } from "react-router-dom";
import './Menu.css'

export function Menu (){
  return(
    <nav class="navbar navbar-expand-lg menu navbar-dark">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">Arctic Monkeys</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="historia">Historia</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="integrantes">Integrantes</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="musica">Musica</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="mercancias">Mercancia</Link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
            <button class="btn btn-outline-light" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>  
  )
}