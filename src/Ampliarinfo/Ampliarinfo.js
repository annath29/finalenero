import "./Ampliarinfo.css"
import { useLocation } from "react-router-dom"
export function Ampliarinfo(){

    let datosrecibidos=useLocation()
    let producto=datosrecibidos.state.productoSeleccionado
    console.log(producto)

    return(
        <>
           <div className="container">

                <div className="row my-5">
                    <div className="col-12 col-md-5">
                        <img src={producto.foto} alt="foto" className="img-fluid w-100"/>
                    </div>
                    <div className="col-12 col-md-4 border rounded p-3">
                        <h2 className="text-center fw-bold">{producto.nombre}</h2>
                        <div className="row">
                            <div className="col 6">
                                <h1 className="text-center mt-3 display-1">${producto.precio}</h1>
                                <span className='d-flex justify-content-center descuento'>20% off</span>
                                <span className=" mb-3 d-flex justify-content-center mx-auto badge text-bg-primary">Descuento del dia</span>
                                <p className="text-center">Hasta 48 Cuotas</p>
                                <div className="d-flex justify-content-evenly">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/american-express.png?alt=media&token=0a9bf1a5-2c8f-4350-8733-04909938f7aa" alt="" className="img-fluid"/>
                                    <img src="https://firebasestorage.googleapis.com/v0/b/personalsoft-a1bec.appspot.com/o/visa.png?alt=media&token=0ac289a7-5b4a-4d73-a1d6-62a5aa3efc08" alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col">
                                <i className="d-flex justify-content-center bi bi-truck mt-4 fs-1 text-success"></i>
                                <p className="text-center text-success fw-bold">Envio gratis a nivel nacional</p>
                                <p>Conoce los tiempos y las formas de envío.</p>
                                <i class=" d-flex justify-content-center bi bi-arrow-clockwise mt-1 fs-1 text-success"></i>
                                <p className=" text-center text-success fw-bold">Devolución gratis</p>
                                <p className="text-center">30 dias para reembolso</p>
                            </div>

                        </div>

                        

                    </div>
                </div>

           </div>
        </>
    )

}