import { useRouter } from 'next/router';
import '../src/styles/navbar.css';

const Navbar = ({ abrirMenu }) => {
  const router = useRouter();
  const caminhoAtual = router.pathname;

  return (
    <nav className="navbar navbar-expand-lg nav-padrao">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            className="logo-cps-55"
            src="/imgs/2024_logo_55anos_cps_gov_24-25_regua_horizontal+horizontal_br 1.png"
            alt=""
            width={235.24}
            height={56.8}
          />
        </a>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <img
                  className="logo-fatec-registro"
                  src="/imgs/fatec_ra_registro_registro_br.png"
                  alt=""
                  width={87.57}
                  height={55.2}
                />
              </a>
            </li>
            <li className="nav-item home-item">
              <a
                className={`nav-link ${caminhoAtual === '/' ? 'active-page' : ''}`}
                href="/"
              >
                Home
              </a>
            </li>
            <span className="separador">|</span>
            <li className="nav-item pedidos-item">
              <a
                className={`nav-link ${caminhoAtual === '/pedidos' ? 'active-page' : ''}`}
                href="/pedidos"
              >
                Pedidos
              </a>
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
};

export default Navbar;
// autora: Isabele Letícia