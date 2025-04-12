import "../src/styles/student-card.css";
import React, { useState } from "react";

const StudentCard = () => {
  const students = [
    "Guilherme Marcos da Silva",
    "Jorge Kirimis Leandro",
    "João Massau Marcos",
  ];

  const [formAberto, setFormAberto] = useState({});
  const [detalhesAbertos, setDetalhesAbertos] = useState({});
  const [dados, setDados] = useState(
    students.map((name) => ({
      nome: name,
      semestre: 4,
      celular: "",
      nascimento: "",
      ingresso: "2023",
    }))
  );

  const toggleFormulario = (index) => {
    setFormAberto((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
    setDetalhesAbertos((prev) => ({
      ...prev,
      [index]: false,
    }));
  };

  const toggleDetalhes = (index) => {
    setDetalhesAbertos((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
    setFormAberto((prev) => ({
      ...prev,
      [index]: false,
    }));
  };

  const handleChange = (index, campo, valor) => {
    const novosDados = [...dados];
    novosDados[index][campo] = valor;
    setDados(novosDados);
  };

  return (
    <div className="container-fluid container-students">
      <div className="student-card-wrapper">
        {students.map((_, index) => (
          <div className="student-row" key={index}>
            <div className={`student-card 
              ${formAberto[index] ? "expanded" : ""} 
              ${detalhesAbertos[index] && !formAberto[index] ? "details-open" : ""}`}>
              
              {/* FORMULÁRIO DE EDIÇÃO */}
              {formAberto[index] && (
                <form className="student-form inside-card">
                  <div className="form-avatar">
                    <img src="/imgs/foto-perfil.png" alt="Foto" />
                  </div>
                  <div className="form-fields">
                    <div className="field-group">
                      <div className="form-tags">
                        <div className="btn-group-curso" role="group">
                          <input
                            type="radio"
                            className="btn-check"
                            name={`options-${index}`}
                            id={`option1-${index}`}
                            autoComplete="off"
                          />
                          <label className="btn btn-amarelo-curso" htmlFor={`option1-${index}`}>
                            DSM
                          </label>
                          <input
                            type="radio"
                            className="btn-check"
                            name={`options-${index}`}
                            id={`option2-${index}`}
                            autoComplete="off"
                          />
                          <label className="btn btn-branco-curso" htmlFor={`option2-${index}`}>
                            GE
                          </label>
                        </div>
                      </div>
                      <div className="semestre-container">
                        <label className="semestre-label">Semestre Atual:</label>
                        <input
                          className="semestre-input"
                          type="number"
                          value={dados[index].semestre}
                          onChange={(e) => handleChange(index, "semestre", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="nome-container">
                      <label className="nome-label">Nome:</label>
                      <input
                        className="nome-input"
                        name="nome"
                        type="text"
                        value={dados[index].nome}
                        onChange={(e) => handleChange(index, "nome", e.target.value)}
                      />
                    </div>

                    <div className="field-group">
                      <div className="celular-container">
                        <label className="celular-label">Celular:</label>
                        <input
                          type="tel"
                          className="celular-input"
                          value={dados[index].celular}
                          onChange={(e) => handleChange(index, "celular", e.target.value)}
                        />
                      </div>
                      <div className="nascimento-container">
                        <label className="nascimento-label">Data de nascimento:</label>
                        <input
                          className="nascimento-input"
                          value={dados[index].nascimento}
                          onChange={(e) => handleChange(index, "nascimento", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="field-group">
                      <div className="ingresso-container">
                        <label className="ingresso-label">Ano de Ingresso:</label>
                        <input
                          className="ingresso-input"
                          value={dados[index].ingresso}
                          onChange={(e) => handleChange(index, "ingresso", e.target.value)}
                        />
                      </div>
                      <div className="form-actions">
                        <button type="button" className="editar-button">
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
                  </div>
                </form>
              )}

              {/* DETALHES */}
              {!formAberto[index] && detalhesAbertos[index] && (
                <div className="student-details-view">
                <div className="form-avatar">
                  <img src="/imgs/foto-perfil.png" alt="Avatar do aluno" />
                </div>
              
                <div className="student-details">
                  {/* Primeira linha: Nome */}
                  <div className="detail-line ">
                    <p class="nome-detalhe"><strong>Nome:</strong> {dados[index].nome}</p>
                  </div>
              
                  {/* Segunda linha: Celular e Data de Nascimento */}
                  <div className="detail-line cel-nasc-line">
                    <p class="cel-detalhe"><strong>Celular:</strong> {dados[index].celular || "Não informado"}</p>
                    <p class="nasc-detalhe"><strong>Nascimento:</strong> {dados[index].nascimento || "Não informado"}</p>
                  </div>
              
                  {/* Terceira linha: Ano de Ingresso, Semestre e Curso */}
                  <div className="detail-line ingresso-sem-curso">
                    <p class="ingresso-detalhe"><strong>Ingresso:</strong> {dados[index].ingresso}</p>
                    <p class="sem-detalhe"><strong>Semestre Atual:</strong> {dados[index].semestre}</p>
                    <div className="btn-group" role="group">
                        {/* aqui seria legal o back end colocar como colorido o valor do curso que a pessoa esta */}
                        <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" />
                        <label className="btn btn-color-curso" htmlFor="option1">DSM</label>
                        <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off" />
                        <label className="btn btn-branco-detalhes" htmlFor="option2">GE</label>
                    </div>
                  </div>
                </div>
              
                <div className="student-actions">
                  <img
                    src={
                      detalhesAbertos[index]
                        ? "/imgs/arrow-down-card.svg"
                        : "/imgs/arrow-student-card.svg"
                    }
                    alt="seta"
                    className="seta-card"
                    onClick={() => toggleDetalhes(index)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
              
              )}

              {/* MODO RESUMIDO */}
              {!formAberto[index] && !detalhesAbertos[index] && (
                <>
                  <div className="student-info">
                    <div className="student-avatar">
                      <img src="/imgs/foto-perfil.png" width={70} height={70} alt="" />
                    </div>
                    <div>
                      <div className="student-name">{dados[index].nome}</div>
                      <div className="student-class">DSM {dados[index].semestre}</div>
                    </div>
                  </div>
                  <div className="student-actions">
                    <img
                      src={
                        detalhesAbertos[index]
                          ? "/imgs/arrow-down-card.svg"
                          : "/imgs/arrow-student-card.svg"
                      }
                      alt="seta"
                      className="seta-card"
                      style={{ cursor: "pointer" }}
                      onClick={() => toggleDetalhes(index)}
                    />
                  </div>
                </>
              )}
            </div>

            <div className="student-buttons">
              <img
                src="/imgs/edit-student.svg"
                alt="Editar"
                className="icon-button"
                onClick={() => toggleFormulario(index)}
              />
              <span>|</span>
              <img
                src="/imgs/Delete-student.svg"
                alt="Deletar"
                className="icon-button"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentCard;
