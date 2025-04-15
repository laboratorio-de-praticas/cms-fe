import "../src/styles/index-options.css";


const IndexOptions = () => {
    return (
        <div className="container-fluid options">
            <div className="row justify-content-start">
                <div className="col-auto">
                    <button className="btn-option primary">
                       <img src="/imgs/entrar.svg" alt="" width={40} height={40}/>
                        <span>Entrar</span>
                    </button>
                </div>
                <div className="col-auto">
                    <button className="btn-option outlined">
                    <img src="/imgs/cadastro-aluno.svg" alt="" width={40} height={40}/>
                        <span>Cadastro Aluno</span>
                    </button>
                </div>
                <div className="col-auto">
                    <button className="btn-option outlined">
                    <img src="/imgs/cadastro-visitante.svg" alt="" width={40} height={40}/>
                        <span>Cadastro Visitante</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default IndexOptions;
