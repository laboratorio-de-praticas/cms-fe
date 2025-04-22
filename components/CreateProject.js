import React, { useState } from 'react';
import '../src/styles/create-project.css';

function CreateProject() {
  const [formData, setFormData] = useState({
    turma: 'DSM',
    nomeProjeto: '',
    integrantes: '',
    semestre: '',
    notaTrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Projeto cadastrado com sucesso!');
    setFormData({
      turma: 'DSM',
      nomeProjeto: '',
      integrantes: '',
      semestre: '',
      notaTrl: '',
    });
  };

  const handleCancel = () => {
    if (window.confirm('Deseja cancelar o cadastro?')) {
      setFormData({
        turma: 'DSM',
        nomeProjeto: '',
        integrantes: '',
        semestre: '',
        notaTrl: '',
      });
    }
  };

  return (
    <div className="container-projeto">
      <h2>Cadastro de Projetos</h2>
      <hr />

      <form className="form-projeto" onSubmit={handleSubmit}>
        <div className="foto-turma">
          <div className="foto-box">
            <CameraIcon size={48} strokeWidth={1.5} />
          </div>

          <div className="turma">
            <button type="button" className={formData.turma === 'DSM' ? 'ativo' : ''} onClick={() => setFormData({ ...formData, turma: 'DSM' })}>DSM</button>
            <button type="button" className={formData.turma === 'GE' ? 'ativo' : ''} onClick={() => setFormData({ ...formData, turma: 'GE' })}>GE</button>
          </div>
        </div>

        <div className="form-campos">
          <label>
            Nome do Projeto:
            <input
              type="text"
              name="nomeProjeto"
              value={formData.nomeProjeto}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Nome dos Integrantes:
            <input
              type="text"
              name="integrantes"
              value={formData.integrantes}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Semestre:
            <input
              type="text"
              name="semestre"
              value={formData.semestre}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Nota TRF:
            <input
              type="number"
              name="notaTrf"
              value={formData.notaTrf}
              onChange={handleChange}
              step="0.01"
              min="0"
              max="10"
              required
            />
          </label>
        </div>

        <div className="botoes">
          <button type="submit" className="btn-cadastrar">Cadastrar</button>
          <button type="button" className="btn-cancelar" onClick={handleCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default CreateProject;

// import React, { useState } from 'react';
// import '../src/styles/create-project.css';

// function CreateProject() {
  // const [projects, setProjects] = useState([
    // { id: 1, titulo: 'Sistema Escolar', descricao: 'Plataforma para alunos e professores' },
    // { id: 2, titulo: 'Site Portfólio', descricao: 'Apresentação de projetos pessoais' },
  // ]);

  // const [mostrarForm, setMostrarForm] = useState(false);
  // const [novoProjeto, setNovoProjeto] = useState({ titulo: '', descricao: '' });

  // const toggleFormulario = () => {
    // setMostrarForm((prev) => !prev);
  // };

  // const handleChange = (e) => {
    // const { name, value } = e.target;
    // setNovoProjeto((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = (e) => {
    // e.preventDefault();
    // const novoId = projects.length + 1;
    // setProjects((prev) => [...prev, { id: novoId, ...novoProjeto }]);
    // setNovoProjeto({ titulo: '', descricao: '' });
    // setMostrarForm(false);
  // };

  // const handleDelete = (id) => {
    // setProjects((prev) => prev.filter((p) => p.id !== id));
  // };

  // return (
    // <div className="create-project-container">
      // <h2>Projetos</h2>

      // <button className="botao-novo" onClick={toggleFormulario}>
        //{mostrarForm ? 'Cancelar' : 'Novo Projeto'}
      // </button>

      // {mostrarForm && (
        // <form onSubmit={handleSubmit}>
          // <input
            // type="text"
            // name="titulo"
            // placeholder="Título"
            // value={novoProjeto.titulo}
            // onChange={handleChange}
            // required
          // />
          // <input
            // type="text"
            // name="descricao"
            // placeholder="Descrição"
            // value={novoProjeto.descricao}
            // onChange={handleChange}
            // required
          // />
          // <button type="submit">Salvar</button>
        // </form>
      // )}

      // <div className="lista-projetos">
        // {projects.map((p) => (
          // <div key={p.id} className="projeto">
            // <h3>{p.titulo}</h3>
            // <p>{p.descricao}</p>
            // <button
              // className="botao-excluir"
              // onClick={() => handleDelete(p.id)}>
              //Excluir
            // </button>
          // </div>
        // ))}
      // </div>
    // </div>
  // );
// }

// export default CreateProject;
