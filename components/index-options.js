import { useRouter } from 'next/router';
import "../src/styles/index-options.css";

const IndexOptions = () => {
  const router = useRouter();

  const handleRedirect = (path) => {
    router.push(path); // Redireciona para o caminho especificado
  };

  return (
    <div className="container-fluid options">
      <div className="row justify-content-start">
        <div className="col-auto">
          <button
            className="btn-option visitante"
            onClick={() => handleRedirect('/cadVisitante')} 
          >
            <img src="/imgs/cadastro-visitante-branco.svg" alt="" width={90} height={90} />
            <span>Cadastro Visitante</span>
          </button>
        </div>
        <div className="col-auto">
          <button
            className="btn-option sistema"
            onClick={() => handleRedirect('/cadVisitante')} 
          >
            <img src="/imgs/entrar-sistema.svg" alt="" width={90} height={90} />
            <span>Entrar Sistema</span>
          </button>
        </div>
        <div className="col-auto">
          <button
            className="btn-option pedidos"
            onClick={() => handleRedirect('/cadVisitante')} 
          >
            <img src="/imgs/gerenciar-pedidos.svg" alt="" width={90} height={90} />
            <span>Gerenciar Pedidos</span>
          </button>
        </div>
        <div className="col-auto">
          <button
            className="btn-option eventos"
            onClick={() => handleRedirect('/cadVisitante')} 
          >
            <img src="/imgs/ver-eventos.svg" alt="" width={90} height={90} />
            <span>Ver eventos</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndexOptions;
