import '../src/styles/navbar.css'
const Navbar = ({ abrirMenu }) => {
    return (
      <nav class="navbar navbar-expand-lg nav-padrao">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              class="logo-cps-55"
              src="/imgs/2024_logo_55anos_cps_gov_24-25_regua_horizontal+horizontal_br 1.png"
              alt=""
              width={ 235.24}
              height={56.8}
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
                    width={87.57}
                    height={55.2}
                  />
                </a>
              </li>
              <li class="nav-item home-item">
                <a class="nav-link" href="/">
                  Home
                </a>
              </li>
              <span class="separador">|</span>
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
                <ul className="dropdown-menu custom-dropdown">
                  <div className="dropdown-top-bar"></div>
                  <li>
                    <a className="dropdown-item" href="/formStudent">Usuário</a>
                  </li>
                  <li className="dropdown-divider-white"></li>
                  <li>
                    <a className="dropdown-item" href="/formProject">Projeto</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="perfil-retangulo">
            <img
              src="/imgs/foto-perfil.png"
              alt="Foto de Perfil"
              className="foto-perfil"
            />
            <div className="info-perfil">
              <span className="nome-perfil">José Alves da Silva</span>
              <span className="turma-perfil">DSM-4</span>
            </div>
            <a href="#" onClick={(e) => { e.preventDefault(); abrirMenu(); }}>
              <img
                src="/imgs/vector-down.svg"
                alt=""
                className="icon-vector"
              />
            </a>
          </div>
        </div>
      </nav>
    );
}
export default Navbar