import "../src/styles/project-card.css";
import React from "react";

const ProjectCard = () => {
  return (
    <div className="container-project-card">
      <div className="card-project-minimizado">
        <div className="project-img">
          <img src="/imgs/project-img.png" alt="Logo do projeto" />
        </div>

        <div className="infos-proj">
        <div className="top-info">
            <div className="titulo-e-turma">
                <h4 className="nome">Kastle - Learny</h4>
                <p className="turma">DSM 4</p>
            </div>

            <div className="acoes">
                <span className="status ativo">Ativo</span>
                <button className="editar">Editar</button>
                <button className="deletar">Deletar</button>
                <div className="expandir">
                <img src="/imgs/arrow-student-card.svg" alt="Expandir" />
                </div>
            </div>
            </div>

            <div className="members">
            <img src="/imgs/foto-perfil.png" width={50} height={50}  alt="Membro 1" />
            <img src="/imgs/foto-perfil2.png" width={50} height={50} alt="Membro 2" />
            <img src="/imgs/foto-perfil2.png" width={50} height={50} alt="Membro 3" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
