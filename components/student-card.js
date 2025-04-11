import "../src/styles/student-card.css";
import React, { useState } from "react";

const StudentCard = () => {
  const students = [
    "Guilherme Marcos da Silva",
    "Jorge Kirimis Leandro",
    "João Massau Marcos",
  ];

  const [formAberto, setFormAberto] = useState({});

  const toggleFormulario = (index) => {
    setFormAberto((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="container-fluid container-students">
      <div className="student-card-wrapper">
        {students.map((name, index) => (
          <div className="student-row" key={index}>
            <div className={`student-card ${formAberto[index] ? "expanded" : ""}`}>
              {/* Se o formulário estiver aberto, mostra só o formulário */}
              {formAberto[index] ? (
                <form className="student-form inside-card">
                  <div className="form-avatar">
                    <img src="/imgs/foto-perfil.png" alt="Foto" width={100} height={100} />
                  </div>
                  <div className="form-fields">
                    <div><strong>Nome:</strong> <input value={name} readOnly /></div>
                    <div><strong>Celular:</strong> <input value="(**) *****-*****" readOnly /></div>
                    <div><strong>Data de nascimento:</strong> <input value="11/03/2024" readOnly /></div>
                    <div><strong>Ano de Ingresso:</strong> <input value="2023" readOnly /> | <strong>Semestre Atual:</strong> <input value="4" readOnly /></div>
                    <div className="form-tags">
                      <button type="button" className="active">DSM</button>
                      <button type="button">GE</button>
                    </div>
                    <div className="form-buttons">
                        <button
                            type="button"
                            className="editar-button"
                            onClick={() => alert("Editar clicado!")}
                        >
                            Editar
                        </button>
                        <button
                            type="button"
                            className="cancelar-button"
                            onClick={() => toggleFormulario(index)}
                        >
                            Cancelar
                        </button>
                        </div>
                  </div>
                </form>
              ) : (
                // Caso contrário, mostra a visualização normal
                <>
                  <div className="student-info">
                    <div className="student-avatar">
                      <img src="/imgs/foto-perfil.png" width={70} height={70} alt="" />
                    </div>
                    <div>
                      <div className="student-name">{name}</div>
                      <div className="student-class">DSM 4</div>
                    </div>
                  </div>
                  <div className="student-actions">
                    <img
                      src="/imgs/arrow-student-card.svg"
                      alt="seta"
                      className={`seta-card ${formAberto[index] ? "virada" : ""}`}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </>
              )}
            </div>

            {/* Botões fora do card */}
            <div className="student-buttons">
              <img
                src="/imgs/edit-student.svg"
                alt="Editar"
                className="icon-button"
                onClick={() => toggleFormulario(index)}
              />
              <img src="/imgs/Delete-student.svg" alt="Deletar" className="icon-button" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentCard;
