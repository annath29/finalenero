import { Route,Routes } from "react-router-dom"
import {Home} from "../Home/Home"
import {Menu} from "../shared/Menu/Menu"
import {Historia} from "../Historia/Historia"
import { Integrantes } from "../Integrantes/Integrantes"
import { Musica } from "../Musica/Musica"
import { Mercancia } from "../Mercancia/Mercancia"
import {Ampliarinfo} from "../Ampliarinfo/Ampliarinfo"

export function Rutas(){
  return (
    <>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/musica" element={<Musica />} />
          <Route path="/tienda" element={<Ampliarinfo />} />
          <Route path="/mercancias" element={<Mercancia />} />
        </Routes>
    </>
  )
}