import "../src/styles/menu-profile.css";
const MenuProfile = () => {
    return(
        <div className="container-fluid menu-perfil-container">
            <div className="row">
                <img src="/imgs/close-x.svg" class="" width={20} height={20} alt="" />
            </div>
            <div className="row">
                <div className="col-md">
                    <img class="foto-perfil" src="imgs/foto-perfil.png" alt="" />
                </div>
            </div>
            <div className="row">
                <div className="profile-description">
                    <p className="nome-perfil">aa</p>
                    <p className="curso-perfil">dsm4</p>
                    <p className="tipo-usuarioperfil">adm</p>
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
    );
}
export default MenuProfile;