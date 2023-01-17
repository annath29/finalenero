import './Home.css';
import { Footer } from '../shared/Footer/Footer';

export function Home(){
    return(
        <>
        <section>
            <div class="banner">
            </div>
        </section>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-8">
                        <h2>Arctic Monkeys</h2>
                        <p> Arctic Monkeys es una banda británica de rock, formada en Sheffield, Reino Unido.3​ El grupo está compuesto por el guitarrista principal y vocalista Alex Turner, el guitarrista Jamie Cook, el baterista Matt Helders y el bajista Nick O'Malley. El bajista original de la banda, Andy Nicholson, dejó el proyecto en 2006 poco después del lanzamiento del álbum debut.<br></br>Los Arctic Monkeys fueron considerados como una de las primeras bandas en hacerse conocidas al público gracias a la difusión de sus canciones por Internet, por lo cual se los catalogó como «la banda que pudo haber cambiado el mercado de la música».4​ Esto le valió para que su álbum de estudio debut, Whatever People Say I Am, That's What I'm Not (2006), se convierta en el disco debut británico más vendido en la historia, con más de 300 mil copias vendidas en su primera semana en el mercado.5​ Ganó el premio al Mejor Álbum Británico en los Brit Awards 2007. El segundo álbum de la banda, Favourite Worst Nightmare (2007), contó casi con el mismo éxito, ganando también el premio al Mejor Álbum Británico en los Brit Awards 2008. Luego pasarían a sacar Humbug (2009), un proyecto más experimental, y Suck It and See (2011).
                        </p>
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotifyang-a7d3b.appspot.com/o/concierto.jpg?alt=media&token=9854152a-ed5d-44c8-8ca5-3e50bd6fa148" class="img-fluid w-100"></img>
                    </div>
                    <div class="col-12 col-md-4 mt-3">
                        <h2 class="text-center mb-3">Conciertos</h2>
                        <div class="row">
                            <div class="col-6 text-end">
                            <i class="bi bi-vinyl-fill fs-1"></i>
                            </div>
                            <div class="col">
                                <h3>Medellin</h3>
                                <h5>Dec 2</h5>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 text-end">
                            <i class="bi bi-vinyl-fill fs-1"></i>
                            </div>
                            <div class="col">
                                <h3>Cali</h3>
                                <h5>Dec 3</h5>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 text-end">
                            <i class="bi bi-vinyl-fill fs-1"></i>
                            </div>
                            <div class="col">
                                <h3>Amsterdam</h3>
                                <h5>Dec 15</h5>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 text-end">
                            <i class="bi bi-vinyl-fill fs-1"></i>
                            </div>
                            <div class="col">
                                <h3>Sidny</h3>
                                <h5>Dec 30</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <h1>NOTICIAS</h1>
                        <hr/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-4">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotifyang-a7d3b.appspot.com/o/tour.jpg?alt=media&token=8223b9f5-6234-4bf6-a7c5-d5b170467fa8" alt="" class="img-fluid w-100 h-50"/>
                        <p class="mt-2">Concretamente, la primera de sus dos fechas será el sábado 8 de julio de 2023 durante la celebración del festival Bilbao BBK Live y la segunda con un único concierto en el WiZink de Madrid el lunes 10 de julio de 2023. Será la primera vez en 10 años que la banda actúe en un pabellón de la capital de nuestro país. Las entradas para Madrid saldrán a la venta el miércoles 7 de diciembre a las 12h y se podrán adquirir a través de lasttour.org y seetickets.com/es</p>
                    </div>
                    <div class="col-12 col-md-4">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotifyang-a7d3b.appspot.com/o/conciertbog.png?alt=media&token=c1ecc1cd-655f-43e3-8e1d-9f8d1210099b" alt="" class="img-fluid w-100 h-50"/>
                        <p class="mt-2">Se espera que en el espectáculo Arctic Monkeys toque sus sencillos, además de éxitos más famosos como “I Wanna Be Your”, “505″, “Knee Socks”, “R U Mine”, entre muchos más. El concierto se llevará a cabo el próximo jueves 17 de noviembre en Coliseo Live y será su tercera participación en el país, desde su primer concierto en el 2014.</p>
                    </div>
                    <div class="col-12 col-md-4">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotifyang-a7d3b.appspot.com/o/arctic-nuevo-album.jpg?alt=media&token=ad5c4773-3a93-481a-bf9a-803ac4351577" alt="" class="img-fluid w-100 h-50"/>
                        <p class="mt-2">El sexto álbum de la banda británica se estrenó este viernes 21 de octubre y ya se encuentra disponible en todas las plataformas de streaming de música.'The Car' cuenta con 10 temas musicales con un total de 37 minutos de reproducción, en donde destacan canciones como 'There'd Better Be A Mirrorball', 'I Ain't Quite Where I Think I Am' y 'Body Paint'. Han pasado casi 20 años desde que Arctic Monkeys lanzó sus primeros sencillos en el 2004 con su primer álbum 'Beneath The Boardwalk', disco que incluye canciones como 'A Certain Romance' o 'Cigarette Smoke', y desde ese entonces, la banda ha puesto en alto el género de Rock Alternativo en diversas partes del mundo.</p>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>        
        </>
    )
}