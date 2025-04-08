const Edit=()=>{
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
                <div class="col-md-6">
                    <br/>
                    <div class='input-group'>
                        <span class='input-group-text fw-bold bg-white'>Nome:</span>
                        <input type="text" class="form-control border-start-0" name='nome' value='' required/>
                    </div>
                </div>
                <div class="col-md-6">
                    <br/>
                    <div class='input-group'>
                        <span class='input-group-text fw-bold bg-white'>RA:</span>
                        <input type="text" class="form-control border-start-0" name='ra' value='' required/>
                    </div>
                </div>
                <div class="col-md-6">
                    <br/>
                    <div class='input-group'>
                        <span class='input-group-text fw-bold bg-white'>Email Institucional:</span>
                        <input type="email" class="form-control border-start-0" name='email_institucional' value='' required/>
                    </div>
                </div>
                <div class="col-md-6">
                    <br/>
                    <div class='input-group'>
                        <span class='input-group-text fw-bold bg-white'>Telefone:</span>
                        <input type="text" class="form-control border-start-0" name='telefone' value='' required/>
                    </div>
                </div>
                <div class="col-md-6">
                    <br/>
                    <div class='input-group'>
                        <span class='input-group-text fw-bold bg-white'>Senha:</span>
                        <input type="password" class="form-control border-start-0" name='senha' value='' required/>
                    </div>
                </div>                    
                <div class="col-md-6">
                    <br/>
                    <div class='input-group'>
                        <span class='input-group-text fw-bold bg-white'>Ano de Ingresso:</span>
                        <input type="text" class="form-control border-start-0" name='ano_ingresso' value='' required/>
                    </div>
                </div>
                <div class="col-md-6">
                    <br/>
                    <div class='input-group'>
                        <span class='input-group-text fw-bold bg-white'>Semestre Atual:</span>
                        <input type="text" class="form-control border-start-0" name='turma_atual' value='' required/>
                    </div>
                </div>

                <div class="col-md-6">
                    <br/>
                    <div class='input-group'>
                        <span class='input-group-text fw-bold bg-white'>Data Nascimento:</span>
                        <input type="date" class="form-control border-start-0" name='data_nasc' value='' required/>
                    </div>
                </div>
                <div class="col-md-6">
                    <br/>
                    <div class='input-group'>
                        <span class='input-group-text fw-bold bg-white'>Foto 3x4:</span>
                        <input type="file" class="form-control border-start-0" name='foto' value='' required/>
                    </div>
                </div>
                <div class='col-md-6'>
                    <br/>
                    <div class='fw-bold'>Quer ser candidato a representante de turma?</div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value='' />
                        <label class="form-check-label" for="inlineCheckbox1">Sim</label>
                    </div>
                    {/* <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label class="form-check-label" for="inlineCheckbox2">Não</label>
                    </div> */}
                </div>
                <br/>
                <div class="col-md-6">
                    <br/>
                    <button type="submit" class="btn btn-success">Editar</button>
                </div>
                </div>
            </form>
        </div>
    </div>
    )
}
export default Edit