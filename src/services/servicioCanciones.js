import { generarToken } from "./servicioToken";

export async function servicioCancionesTop(){
    let token= await generarToken()
    const URL="https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH/top-tracks?market=US"

    const PETICION={
        method:"GET",
        headers:{Authorization:token}
    }
    let respuesta=await fetch(URL,PETICION)
    let canciones= await respuesta.json()
    return(canciones)
}