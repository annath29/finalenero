import './Footer.css'
export function Footer(){
    return(
        <footer>
            <div class="container-fluid">
                <div class="row p-5 pie">
                    <div class="col-12 col-md-4">
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotifyang-a7d3b.appspot.com/o/logo.png?alt=media&token=8618067d-da4b-408b-9e56-773e3368eeab" alt="logo" class="img-fluid w-100" />
                    </div>
                    <div class="col-12 col-md-4 text-center align-self-center">
                        <h2 class="fw-blond">SOBRE LA BANDA</h2>
                        <h4>Banda de rock alternativa</h4>
                        <br/>
                        <h2 class="fw-blond">SOBRE LA BANDA</h2>
                        <h4>Banda de rock alternativa</h4>
                    </div>
                    <div class="col-12 col-md-4 align-self-center">
                        <i class="bi bi-instagram fuente me-2"></i>
                        <i class="bi bi-facebook fuente me-2"></i>
                        <i class="bi bi-tiktok fuente me-2"></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}