import "../src/styles/menu-profile.css";  

const MenuProfile = ({ menuAberto, fecharMenu }) => {
    return(
        <>
            {/* sombra */}
            {menuAberto && (
                <div
                    className="shadow-overlay"
                    onClick={fecharMenu}
                ></div>
            )}

            <div className={`menu-perfil-container ${menuAberto ? "aberto" : ""}`}>
                <div className="row">
                    <img src="/imgs/close-x.svg" className="close-menu" width={20} height={20} alt="Fechar" onClick={fecharMenu} />
                </div>
                <div className="row">
                    <div className="col-md">
                        <img className="foto-perfil-menu" src="imgs/foto-perfil.png" alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="profile-description">
                        <p className="nome-perfil-menu">Calebe Cardoso Almeida Pereira</p>
                        <p className="curso-perfil-menu">DSM 4</p>
                        <p className="tipo-usuarioperfil-menu">ADM</p>
                    </div>
                </div>
                <div className="row">
                    <button className="editar-perfil">Editar Perfil</button>
                </div>
                <div className="row">
                    <button className="sair-perfil">Sair Perfil</button>
                </div>
                <div className="row">
                    <div className="profile-divider"></div>
                </div>
                <div className="row">
                    <button className="cadastrar-projeto">Cadastrar Projeto</button>
                </div>
                <div className="row">
                    <button className="editar-projeto">Editar Projeto</button>
                </div>
            </div>
        </>
    );
}

export default MenuProfile;
