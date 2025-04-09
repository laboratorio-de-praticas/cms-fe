import "../src/styles/search-home.css";

const SearchHome = () => {
  return (
    <div className="container-fluid linha-filtros-dsm">
      {/*botao solitário */}
      <div className="btn-group" role="group" aria-label="Botão Todos">
        <input
          type="radio"
          className="btn-check"
          name="options"
          id="option1"
          autoComplete="off"
        />
        <label className="btn btn-todos" htmlFor="option1">
          Todos
        </label>
      </div>

      {/*grupo aluno e projeto*/}
      <div className="btn-group grupo-2" role="group" aria-label="Grupo Aluno e Projeto">
        <input
          type="radio"
          className="btn-check"
          name="options"
          id="option2"
          autoComplete="off"
        />
        <label className="btn btn-aluno" htmlFor="option2">
          Aluno
        </label>

        <input
          type="radio"
          className="btn-check"
          name="options"
          id="option3"
          autoComplete="off"
        />
        <label className="btn btn-projeto" htmlFor="option3">
          Projeto
        </label>
      </div>

      {/*dropdown */}
      <div className="custom-dropdown-dsm">
        <select className="dropdown-select-dsm">
          <option value="dsm">DSM</option>
          <option value="adm">ADM</option>
          <option value="ge">GE</option>
        </select>
        <img
          src="/imgs/drop-curso.svg"
          alt="Seta"
          className="dropdown-arrow-dsm"
        />
      </div>

      {/*pesquisa */}
      <div className="search-bar-dsm">
        <div className="search-input-container-dsm">
          <img src="/imgs/search.svg" alt="" className="search-icon-dsm"/>
          <input
            type="text"
            className="search-input-dsm"
            placeholder="Pesquisar aluno"
          />
        </div>
        <button className="search-button-dsm">Pesquisar</button>
      </div>
    </div>
  );
};

export default SearchHome;
