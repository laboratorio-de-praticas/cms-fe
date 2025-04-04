const Forms = () =>{
    return(
        <div class="container">
            <div class="row">
                {/* Posteriormente colocar o action para envio das informações pro banco de dados */}
                <form class="g-3"  method='post'>
                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" />
                    <label class="btn btn-secondary" for="option1">DSM</label>
                    <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" />
                    <label class="btn btn-secondary" for="option2">GE</label>
                    </div>
                    <div class="row g-3">
                    <div class="col-md-12">
                        <br/>
                        <div class='input-group'>
                            <span class='input-group-text fw-bold bg-white'>Nome:</span>
                            <input type="text" class="form-control border-start-0" name='nome' required/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <br/>
                        <div class='input-group'>
                            <span class='input-group-text fw-bold bg-white'>Celular:</span>
                            <input type="text" class="form-control border-start-0" name='celular' required/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <br/>
                        <div class='input-group'>
                            <span class='input-group-text fw-bold bg-white'>Data Nascimento:</span>
                            <input type="date" class="form-control border-start-0" name='data_nasc' required/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <br/>
                        <div class='input-group'>
                            <span class='input-group-text fw-bold bg-white'>Ano de Ingresso:</span>
                            <input type="text" class="form-control border-start-0" name='ano_ingresso' required/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <br/>
                        <div class='input-group'>
                            <span class='input-group-text fw-bold bg-white'>Semestre Atual:</span>
                            <input type="text" class="form-control border-start-0" name='semestre_atual' required/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <br/>
                        <div class='input-group'>
                            <span class='input-group-text fw-bold bg-white'>Foto 3x4:</span>
                            <input type="file" class="form-control border-start-0" name='foto' required/>
                        </div>
                    </div>
                    <br/>
                    <div class="col-md-6">
                        <br/>
                        <button type="submit" class="btn btn-success">Cadastrar</button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Forms