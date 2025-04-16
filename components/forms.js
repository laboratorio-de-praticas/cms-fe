import { useState } from 'react';
import '../src/styles/form.css'

const Forms = () => {
    const [formData, setFormData] = useState({
        nome: '',
        ra: '',
        email_institucional: '',
        telefone: '',
        senha: '',
        ano_ingresso: '',
        turma_atual: '',
        data_nasc: '',
        deseja_ser_candidato: false,
        deseja_ser_lider: false,
        curso: '',
        foto: null,
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === 'file') {
            setFormData({ ...formData, [name]: files[0] });
        } else if (type === 'checkbox') {
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleCursoChange = (e) => {
        setFormData({ ...formData, curso: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Define semestre a partir da turma atual
        const semestre = formData.turma_atual;

        const form = new FormData();
        form.append('dados', JSON.stringify({
            ...formData,
            semestre,
        }));

        if (formData.foto) {
            form.append('foto', formData.foto);
        }

        try {
            const response = await fetch('/api/form', {
                method: 'POST',
                body: form,
            });

            const result = await response.json();
            if (response.ok) {
                alert('Candidato cadastrado com sucesso!');
            } else {
                alert(`Erro: ${result.erro}`);
            }
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            alert('Ocorreu um erro ao enviar o formulário. Tente novamente.');
        }
    };

    return (
        <div className="container" style={{ color: '#004854', border: 'solid', borderWidth:1, borderRadius:5}}>
            <div className="row">
                <div className="col-md-4">
                <br/>
                <br/>
                    <h5>Tela de cadastrado do</h5>
                    <h3 className='fw-bold'>CMS - Sistema de</h3>
                    <h3 className='fw-bold'>Gerenciamento de Conteúdo</h3>
                </div>
            </div>
            <br/>
            <form className="g-3" method="POST" onSubmit={handleSubmit} encType="multipart/form-data">

                {/* Candidato e Líder */}
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="input-group align-items-center" style={{height:61}}> 
                            <span className="input-group-text fw-bold bg-white" style={{ color: '#004854' }}>Foto 3x4:</span>
                            <input type="file" className="form-control border-start-0" name="foto" onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ms-0 row form-control">
                            <div className="col-md-12">
                                <div className="input-group gap-3">
                                    <input className="form-check-input" type="checkbox" name="deseja_ser_candidato" checked={formData.deseja_ser_candidato} onChange={handleChange} /> 
                                    <div className="fw-bold" style={{ color: '#004854' }}>Desejo me cadastrar como Representante de Turma</div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="input-group gap-3">
                                    <input className="form-check-input" type="checkbox" name="deseja_ser_lider" checked={formData.deseja_ser_lider} onChange={handleChange} />
                                    <div className="fw-bold" style={{ color: '#004854' }} >Desejo me cadastrar como Líder do grupo PI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row d-flex justify-content-center">
                {/* Curso */}
                    <div className="col-md-6">
                        <div className="input-group" role="group">
                        <span className="input-group-text fw-bold bg-white" style={{ color: '#004854'}}>Curso:</span>
                        <input type="text" className="form-control border-start-0" name="curso" value={formData.curso} onChange={handleChange} placeholder="Ex: Desenvenvolvimento de Software Multiplataforma" required />
                        </div>
                    </div>

                {/* Turma Atual */}
                    <div className="col-md-6">
                        <div className="input-group">
                            <span className="input-group-text fw-bold bg-white" style={{ color: '#004854'}}>Semestre Atual:</span>
                            <input type="text" className="form-control border-start-0" name="turma_atual" value={formData.turma_atual} onChange={handleChange} placeholder="Ex: 5" required />
                        </div>
                    </div>
                </div>

                {/* Nome */}
                <br />
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="input-group">
                            <span className="input-group-text fw-bold bg-white" style={{ color: '#004854' }}>Nome:</span>
                            <input type="text" className="form-control border-start-0" name="nome" value={formData.nome} onChange={handleChange} placeholder="Digite seu nome completo" required />
                        </div>
                    </div>

                {/* Ano de Ingresso */}
                <br />
                    <div className="col-md-6">
                        <div className="input-group">
                            <span className="input-group-text fw-bold bg-white" style={{ color: '#004854' }}>Ano de Ingresso:</span>
                            <input type="text" className="form-control border-start-0" name="ano_ingresso" value={formData.ano_ingresso} onChange={handleChange} placeholder="Ex: 2023 / 2" required />
                        </div>
                    </div>
                </div>

                {/* Senha e RA */}
                <br />
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="input-group">
                            <span className="input-group-text fw-bold bg-white" style={{ color: '#004854' }}>Senha:</span>
                            <input type="password" className="form-control border-start-0" name="senha" value={formData.senha} onChange={handleChange} placeholder="Digite sua senha" required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group">
                            <span className="input-group-text fw-bold bg-white" style={{ color: '#004854' }}>RA:</span>
                            <input type="text" className="form-control border-start-0" name="ra" value={formData.ra} onChange={handleChange} placeholder="Digite seu RA" required />
                        </div>
                    </div>
                </div>

                {/* Email e Telefone */}
                <br />
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="input-group">
                            <span className="input-group-text fw-bold bg-white" style={{ color: '#004854' }}>Email Institucional:</span>
                            <input type="email" className="form-control border-start-0" name="email_institucional" value={formData.email_institucional} onChange={handleChange} placeholder="Digite seu email@fatec.sp.gov.br" required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="input-group">
                            <span className="input-group-text fw-bold bg-white" style={{ color: '#004854' }}>Celular:</span>
                            <input type="text" className="form-control border-start-0" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="(00) 00000 - 0000" required />
                        </div>
                    </div>
                </div>

                {/* Foto */}
                <br />
                <div className="row d-flex justify-content-end">
                    <div className='col-md-6 d-flex justify-content-between'>
                        <button type="submit" className="btn btn-success col-md-7">Cadastrar</button>
                        <a href='/' className="btn btn-outline-danger d-flex justify-content-center align-items-center col-md-4">Cancelar</a>
                    </div>
                <br />
                </div>
                <br />
            </form>
        </div>
    );
};

export default Forms;
