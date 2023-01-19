import './Footer.css'
export function Footer(){
    return(
        <footer>
            <div class="container-fluid">
                <div class="row p-3 pie">
                    <div class="col-12 col-md-4 align-self-center d-flex justify-content-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotifyang-a7d3b.appspot.com/o/logotipo.png?alt=media&token=d724002b-757d-49c3-9304-ef90fdbe6f91" alt="logo" class="img-fluid w-100" />
                    </div>
                    <div class="col-12 col-md-4 text-center align-self-center">
                        <h3 class="fw-blond">SOBRE LA BANDA</h3>
                        <h5>Banda de rock alternativa</h5>
                        <br/>
                        <h3 class="fw-blond">SOBRE LA BANDA</h3>
                        <h5>Banda de rock alternativa</h5>
                    </div>
                    <div class="col-12 col-md-4 align-self-center d-flex justify-content-center">
                        <i class="bi bi-instagram fuente me-4"></i>
                        <i class="bi bi-facebook fuente me-4"></i>
                        <i class="bi bi-tiktok fuente me-4"></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}