import '../src/styles/navbar.css'
const Navbar = () => {
    return (
      <nav class="navbar navbar-expand-lg nav-padrao">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              class="logo-cps-55"
              src="/imgs/2024_logo_55anos_cps_gov_24-25_regua_horizontal+horizontal_br 1.png"
              alt=""
              width={294.05}
              height={71}
            />
          </a>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <img
                    class="logo-fatec-registro"
                    src="/imgs/fatec_ra_registro_registro_br.png"
                    alt=""
                    width={109.46}
                    height={69}
                  />
                </a>
              </li>
              <li class="nav-item home-item">
                <a class="nav-link" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item dropdown cadastro-item">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Cadastro
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Usuário
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Projeto
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}
export default Navbar