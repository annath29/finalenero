import { Footer } from "../shared/Footer/Footer";

export function Mercancia(){
    let titulo="Productos Arctic Monkeys"
    let productos=[
        {
            nombre:"Camiseta Original",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyang-a7d3b.appspot.com/o/producto1.jfif?alt=media&token=f7d7a1ac-8c1b-4f59-b565-da6625722b2a",
            precio:30
        },
        {
            nombre:"Camisa Original",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyang-a7d3b.appspot.com/o/producto2.jfif?alt=media&token=204a99e7-ff0c-4345-aae8-55f59bcf3241",
            precio:40
        },        
        {
            nombre:"Pines",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyang-a7d3b.appspot.com/o/producto3.webp?alt=media&token=3b0ff123-6790-4ec5-904f-979d979fec83",
            precio:10
        },
        {
            nombre:"Reloj Vinilo",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyang-a7d3b.appspot.com/o/producto4.webp?alt=media&token=241e4f22-9cf7-47e6-a620-826aaba78bdd",
            precio:65
        }, 
        {
            nombre:"Mochila Original",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyang-a7d3b.appspot.com/o/producto5.png?alt=media&token=0db6ca8f-789d-4238-b9a7-9a687de30108",
            precio:58
        },   
        {
            nombre:"Gorro Original",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotifyang-a7d3b.appspot.com/o/producto6.jpg?alt=media&token=def90c35-0adb-4ede-be5d-f756966daa32",
            precio:22
        }   
                
    ];
    return(
        <>
            <h1 class="text center mb-4">{titulo}</h1>
            <div class="container mb-5">
                <div class="row row-cols-1 row-cols-md-3 g-5"> 
                    {
                        productos.map(function(producto){
                            return(
                                <>
                                <div class="col">
                                    <div class="card h-100 shadow text-center">
                                        <h2>{producto.nombre}</h2>
                                        <img class="img-fluid w-100 h-100" src={producto.foto} alt="foto" />
                                        <h4>Precio: ${producto.precio} USD</h4>
                                    </div>
                                </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}