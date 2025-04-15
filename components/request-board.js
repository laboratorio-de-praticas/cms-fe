import '../src/styles/request-board.css';

const RequestBoard = () => {
    return(
        <div className="container-fluid request-board">
            <div className="header-board">
                
                <p className="titulo-pedidos">Pedidos</p>

                <div className="linha-topo">
                <h2 className="titulo-h2">Aspirantes a Candidato</h2>
                <div className="acoes-direita">
                    <a href="#">Ocultar Todos</a>
                    <span className="request-board-divider">|</span>
                    <a href="#">Histórico</a>
                </div>
                </div>
                <div className="divider-title-board"></div>
            </div>
            <div className="body-board">
                <div className="turma">
                    <div className="titulo-turma">
                        <div className="row">
                        <p>DSM 6</p>
                        <a href="#">⌃</a> 
                        </div>
                        <div className="turma-divider"></div>
                        <div className="card-request">
                            <img src="/imgs/foto-perfil.png" width={70} height={70} alt="" />
                            <div className="data-request">
                                <p className="nome-candidato-request">Guilherme Marcos da Silva</p>
                                <p className="turma-candidato-request">DSM 6</p>
                            </div>
                            <div className="actions-card-request">
                                <button>Aceitar</button>
                                <button>Recusar</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
            
    );
}
export default  RequestBoard;
// autora: Isabele Letícia