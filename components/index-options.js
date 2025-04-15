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
            className="btn-option primary"
            onClick={() => handleRedirect('/loginUser')} // Redireciona para /loginUser
          >
            <img src="/imgs/entrar.svg" alt="" width={90} height={90} />
            <span>Entrar</span>
          </button>
        </div>
        <div className="col-auto">
          <button
            className="btn-option outlined"
            onClick={() => handleRedirect('/cadAluno')} // Redireciona para /cadAluno
          >
            <img src="/imgs/cadastro-aluno.svg" alt="" width={90} height={90} />
            <span>Cadastro Aluno</span>
          </button>
        </div>
        <div className="col-auto">
          <button
            className="btn-option outlined"
            onClick={() => handleRedirect('/cadVisitante')} // Redireciona para /cadVisitante
          >
            <img src="/imgs/cadastro-visitante.svg" alt="" width={90} height={90} />
            <span>Cadastro Visitante</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndexOptions;
