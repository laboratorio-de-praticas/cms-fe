import "../src/styles/project-card.css";
import React from "react";

const PorjectCard = () => {
  return (
    <div className="container-md container-project-card">
        {/* minimizado */}
        <div className="card-project-minimizado">
            <div className="project-img">
                <img src="/img/project-img.png" width={120} height={120} alt="" />
            </div>
            <div className="infos-proj">
                <div className="row">
                    <div className="nome">Kastle - Learny</div>
                    <div className="status-e-btns">
                        <p className="status">Ativo</p>
                        <button className="editar">Editar</button>
                        <button className="deletar">Deletar</button>
                    </div>
                    <div className="expandir">
                        <img src="/imgs/arrow-student-card.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default PorjectCard;