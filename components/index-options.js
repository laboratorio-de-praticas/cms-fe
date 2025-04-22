import { useRouter } from 'next/router';
import { useUser } from '../context/userContext'; // Importando o hook do contexto
import "../src/styles/index-options.css";

const IndexOptions = () => {
  const router = useRouter();
  const { userType } = useUser(); // Obtendo o tipo de usuário do contexto

  const handleRedirect = (path) => {
    router.push(path); 
  };

  return (
    <div className="container-fluid options">
      <div className="row justify-content-start">

        {/* === Botões exclusivos para ADMINISTRADOR === */}
        {userType === "adm" && (
          <>
            <div className="col-auto">
              <button className="btn-option visitante" onClick={() => handleRedirect('/cadVisitante')}>
                <img src="/imgs/cadastro-visitante-branco.svg" alt="" width={90} height={90} />
                <span>Cadastro Visitante</span>
              </button>
            </div>
            <div className="col-auto">
              <button className="btn-option sistema" onClick={() => handleRedirect('/gerenciar')}>
                <img src="/imgs/entrar-sistema.svg" alt="" width={90} height={90} />
                <span>Entrar Sistema</span>
              </button>
            </div>
            <div className="col-auto">
              <button className="btn-option pedidos" onClick={() => handleRedirect('/cadVisitante')}>
                <img src="/imgs/gerenciar-pedidos.svg" alt="" width={90} height={90} />
                <span>Gerenciar Pedidos</span>
              </button>
            </div>
            <div className="col-auto">
              <button className="btn-option eventos" onClick={() => handleRedirect('/cadVisitante')}>
                <img src="/imgs/ver-eventos.svg" alt="" width={90} height={90} />
                <span>Ver eventos</span>
              </button>
            </div>
          </>
        )}

        {/* === Botões exclusivos para ALUNO === */}
        {userType === "aluno" && (
          <>
            <div className="col-auto">
              <button className="btn-option projeto" onClick={() => handleRedirect('/cadVisitante')}>
                <img src="/imgs/cadastro-proj.svg" alt="" width={90} height={90} />
                <span>Cadastrar Projeto</span>
              </button>
            </div>
            <div className="col-auto">
              <button className="btn-option edit-projeto" onClick={() => handleRedirect('/cadVisitante')}>
                <img src="/imgs/edit-proj.svg" alt="" width={90} height={90} />
                <span>Editar Projeto</span>
              </button>
            </div>
          </>
        )}
        
      </div>
    </div>
  );
};

export default IndexOptions;
