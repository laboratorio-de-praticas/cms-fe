import { useUser } from '../context/userContext'; // Importando o hook do contexto
import "../src/styles/menu-profile.css";

const MenuProfile = ({
  menuAberto,
  fecharMenu,
  nome = "Calebe Cardoso Almeida Pereira",
  cursoOuSetor = "DSM 4",
  grupo = { nome: "Learny", descricao: "Ensino de Inglês Gamificado para crianças com TEA." },
  integrantes = [ // lista de imagens dos integrantes (opcional se tipoUsuario for "adm")
    "/imgs/foto-perfil.png",
    "/imgs/foto-perfil2.png",
    "/imgs/foto-perfil.png",
    "/imgs/foto-perfil2.png"
  ]
}) => {
  const { userType } = useUser(); // Obtendo o tipo de usuário do contexto

  return (
    <>
      {/* sombra */}
      {menuAberto && (
        <div className="shadow-overlay" onClick={fecharMenu}></div>
      )}

      <div className={`menu-perfil-container ${menuAberto ? "aberto" : ""}`}>
        {/* botão de fechar */}
        <div className="row">
          <img
            src="/imgs/close-x.svg"
            className="close-menu"
            width={20}
            height={20}
            alt="Fechar"
            onClick={fecharMenu}
          />
        </div>

        {/* foto de perfil */}
        <div className="row">
          <div className="col-md">
            <img
              className="foto-perfil-menu"
              src="/imgs/foto-perfil.png"
              alt="Foto do perfil"
            />
          </div>
        </div>

        {/* conteúdo condicional baseado no tipo de usuário */}
        <div className="row">
          {userType === "aluno" ? (
            <div className="profile-description">
              <p className="nome-perfil-menu">{nome}</p>
              <p className="curso-perfil-menu">{cursoOuSetor}</p>
              <p className="tipo-usuarioperfil-menu">Aluno - Líder</p>
              <div className="profile-divider"></div>
              <p className="nome-grupo-menu">{grupo.nome}</p>
              <p className="descgrupo-menu">{grupo.descricao}</p>
              <div className="integrantes">
                {/* aqui o back pode ajustar para exibir proporcionalmente com base no número de integrantes */}
                {integrantes.map((img, index) => (
                  <img key={index} src={img} width={50} height={50} alt={`Integrante ${index + 1}`} />
                ))}
              </div>
            </div>
          ) : (
            <div className="profile-description-adm">
              <p className="nome-perfil-menu-adm">{nome}</p>
              <p className="curso-perfil-menu-adm">{cursoOuSetor}</p>
              <p className="tipo-usuarioperfil-menu-adm">ADM</p>
            </div>
          )}
        </div>

        {/* botões comuns */}
        <div className="row">
          <button className="editar-perfil">Editar Perfil</button>
        </div>
        <div className="row">
          <button className="sair-perfil">Sair Perfil</button>
        </div>

        {/* botões extras para adm */}
        {userType === "adm" && (
          <>
            <div className="row">
              <div className="profile-divider"></div>
            </div>
            <div className="row">
              <button className="cadastrar-projeto">Cadastrar Projeto</button>
            </div>
            <div className="row">
              <button className="editar-projeto">Editar Projeto</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MenuProfile;
