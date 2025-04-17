import "../src/styles/menu-profile.css";  

const MenuProfile = ({ menuAberto, fecharMenu }) => {
    return (
      <>
        {/* sombra */}
        {menuAberto && (
          <div className="shadow-overlay" onClick={fecharMenu}></div>
        )}

        <div className={`menu-perfil-container ${menuAberto ? "aberto" : ""}`}>
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
          <div className="row">
            <div className="col-md">
              <img
                className="foto-perfil-menu"
                src="imgs/foto-perfil.png"
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div className="profile-description">
              <p className="nome-perfil-menu">Calebe Cardoso Almeida Pereira</p>
              <p className="curso-perfil-menu">DSM 4</p>
              <p className="tipo-usuarioperfil-menu">Aluno - Líder</p>
              <div className="profile-divider"></div>
              <p className="nome-grupo-menu">Learny</p>
              <p className="descgrupo-menu">Ensino de Inglês Gamificado para crianças com TEA.</p>
              <div className="integrantes">
                {/* aqui devera ter um calculo de proporcionalidade de acordo qtd de integrantes para as fotos 
                ficarem na mesma linha  */}
                <img src="/imgs/foto-perfil.png" width={50} height={50} alt="" />
                <img src="/imgs/foto-perfil2.png" width={50} height={50} alt="" />
                <img src="/imgs/foto-perfil.png" width={50} height={50} alt="" />
                <img src="/imgs/foto-perfil2.png" width={50} height={50} alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <button className="editar-perfil">Editar Perfil</button>
          </div>
          <div className="row">
            <button className="sair-perfil">Sair Perfil</button>
          </div>
        </div>
      </>
    );
}

export default MenuProfile;
// autora: Isabele Letícia
// esse menu vai ter varias visoes
// de acordo com o tipo de usuario, mas por enquanto esta no aluno
