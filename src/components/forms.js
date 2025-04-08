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
                    <div class="col-md-6">
                        <br/>
                        <div class='input-group'>
                            <span class='input-group-text fw-bold bg-white'>Nome:</span>
                            <input type="text" class="form-control border-start-0" name='nome' placeholder='Digite seu nome completo' required/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <br/>
                        <div class='input-group'>
                            <span class='input-group-text fw-bold bg-white'>RA:</span>
                            <input type="text" class="form-control border-start-0" name='ra' placeholder='Digite seu RA' required/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <br/>
                        <div class='input-group'>
                            <span class='input-group-text fw-bold bg-white'>Email Institucional:</span>
                            <input type="email" class="form-control border-start-0" name='email_institucional' placeholder='Digite seu email@fatec.sp.gov.br' required/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <br/>
                        <div class='input-group'>
                            <span class='input-group-text fw-bold bg-white'>Telefone:</span>
                            <input type="text" class="form-control border-start-0" name='telefone' placeholder='(00) 0000-0000' required/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <br/>
                        <div class='input-group'>
                            <span class='input-group-text fw-bold bg-white'>Senha:</span>
                            <input type="password" class="form-control border-start-0" name='senha' placeholder="Digite sua senha" required/>
                        </div>
                    </div>                    
                    <div class="col-md-6">
                        <br/>
                        <div class='input-group'>
                            <span class='input-group-text fw-bold bg-white'>Ano de Ingresso:</span>
                            <input type="text" class="form-control border-start-0" name='ano_ingresso' placeholder='Ex: 2023/1' required/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <br/>
                        <div class='input-group'>
                            <span class='input-group-text fw-bold bg-white'>Semestre Atual:</span>
                            <input type="text" class="form-control border-start-0" name='turma_atual' placeholder='Ex: DSM 5 ou GE 3' required/>
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
                            <span class='input-group-text fw-bold bg-white'>Foto 3x4:</span>
                            <input type="file" class="form-control border-start-0" name='foto' required/>
                        </div>
                    </div>
                    <div class='col-md-6'>
                        <br/>
                        <div class='fw-bold'>Deseja se candidatar a Representante de Turma?</div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
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
                        <button type="submit" class="btn btn-success">Cadastrar</button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Forms