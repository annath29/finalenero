export async function generarToken(){
    const client_id="client_id=56b3725ac10849d69d41cadc7ae88d3e"
    const client_secret="client_secret=75b201d4de654094826e9a32e6270b1f"
    const grant_type="grant_type=client_credentials"

    let dataEnvio=grant_type+"&"+client_secret+"&"+client_id

    const URL="https://accounts.spotify.com/api/token"
    const PETICION={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:dataEnvio
    }

    let respuesta=await fetch(URL,PETICION)
    let token= await respuesta.json()
    let tokenDefinitivo=token.token_type+" "+token.access_token
    
    console.log(tokenDefinitivo)
    return(tokenDefinitivo)
}