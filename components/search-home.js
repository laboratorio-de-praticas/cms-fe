import "../src/styles/search-home.css";
const SearchHome = () => {
    return (
      <div className="container-fluid">
        {/* grupo d botao todos solitario */}
        <div
          class="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            class="btn-check"
            name="options"
            id="option1"
            autocomplete="off"
          />
          <label class="btn btn-todos" for="option1">
            Todos
          </label>
        </div>
        {/* grupo de alunos/projetos */}
        <div
          class="btn-group grupo-2"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            class="btn-check"
            name="options"
            id="option1"
            autocomplete="off"
          />
          <label class="btn btn-aluno" for="option1">
            Aluno
          </label>
          <input
            type="radio"
            class="btn-check"
            name="options"
            id="option2"
            autocomplete="off"
          />
          <label class="btn btn-projeto" for="option2">
            Projeto
          </label>
        </div>
        {/* dropdown */}
        <a href="" class="drop">
          dropdown
        </a>
        {/* barra de pesquisa */}
        <a href="" class="barra">
          barra
        </a>
      </div>
    );
}
export default SearchHome;