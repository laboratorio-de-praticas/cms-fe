import React, { useState } from 'react'
import "../src/styles/create-project.css"

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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
        ...prev,
        foto: file
    }));
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
    <>
    <div className="divider-azul"></div>
    <div className="container-projeto">
      <form className="form-projeto" onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="foto-turma d-flex align-items-start">
                <div className="foto-container">
                  <div className="photo-box">
                    <input type="file" accept="image/*" id="imageUpload" style={{ display: 'none' }} onChange={handleImageChange} />
                      <label htmlFor="imageUpload">
                        <img src="/imgs/camera.svg" width={80} height={80} alt="Upload Image" />
                      </label>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="row row-border d-flex justify-content-center g-3 mt-3">
            <div className="col-md-12 title-add"> Adicionar Integrantes </div>
            <div className="col-md-9 d-flex justify-content-center mb-4">
              <input className="search ms-4"/>
            </div>
            <div className="col-md-3 d-flex justify-content-center mb-4">
              <button className="btn-add">Adicionar</button>
            </div>
          </div>
          <br/>
          <br/>
          <div className="row row-border d-flex justify-content-center g-3">
            <div className="col-md-12 title-add"> Áreas Temáticas (máx. 3) </div>
            <div className="col-md-6 d-flex justify-content-center">
            <div class="form-check">
                <label class="form-check-label" for="checkDefault"> Comunicação </label>
                <input class="form-check-input" type="checkbox" value="" id="checkDefault" />
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
            <div class="form-check">
                <label class="form-check-label" for="checkDefault"> Meio Ambiente </label>
                <input class="form-check-input" type="checkbox" value="" id="checkDefault" />
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
            <div class="form-check">
                <label class="form-check-label" for="checkDefault"> Cultura </label>
                <input class="form-check-input" type="checkbox" value="" id="checkDefault" />
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
            <div class="form-check">
                <label class="form-check-label" for="checkDefault"> Saúde </label>
                <input class="form-check-input" type="checkbox" value="" id="checkDefault" />
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
            <div class="form-check">
                <label class="form-check-label" for="checkDefault"> Direitos Humanos </label>
                <input class="form-check-input" type="checkbox" value="" id="checkDefault" />
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
            <div class="form-check">
                <label class="form-check-label" for="checkDefault"> Tecnologia e Produção </label>
                <input class="form-check-input" type="checkbox" value="" id="checkDefault" />
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
            <div class="form-check">
                <label class="form-check-label" for="checkDefault"> Educação </label>
                <input class="form-check-input" type="checkbox" value="" id="checkDefault" />
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center mb-4">
              <div class="form-check">
                <label class="form-check-label" for="checkDefault"> Trabalho </label>
                <input class="form-check-input" type="checkbox" value="" id="checkDefault" />
              </div>
            </div>
          </div>
          <br/>
          <br/>
          <div className="row row-border d-flex justify-content-center g-3">
            <div className="col-md-12 title-add"> Linhas de Extenção (máx. 5) </div>
            <div className="col-md-9 d-flex justify-content-center mb-4">
              <input className="search ms-4"/>
            </div>
            <div className="col-md-3 d-flex justify-content-center mb-4">
              <button className="btn-add">Adicionar</button>
            </div>
          </div>
          <br/>
          <br/>
          <div className="row row-border d-flex justify-content-center g-3">
            <div className="col-md-12 title-add mb-4"> Cadastro em Evento </div>
            <div className="col-md-9 d-flex justify-content-between align-items-center mb-4 evento">
              <div className="text-white ms-5 title-event">HubTec´25</div>
              <button className="btn-inscri me-5">Inscrever-se</button>
            </div>
            <div className="col-md-9 d-flex justify-content-between align-items-center mb-4 evento">
              <div className="text-white ms-5 title-event">FTX´25</div>
              <button className="btn-inscri-y me-5">Inscrito</button>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <button className="btn-cadastrar">Cadastrar</button>
            </div>
          </div>
        </div>







































































{/* 
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
        </div> */}
      </form>
    </div>
  </>
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
