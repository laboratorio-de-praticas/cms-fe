import { useState, useEffect } from 'react';
import "../src/styles/form-student.css";

const FormStudent = () => {
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

    const handleCursoChange = (cursoSelecionado) => {
        setFormData(prev => ({
          ...prev,
          curso: cursoSelecionado
        }));
      };
    
    const [dateFocused, setDateFocused] = useState(false);


    const [showPopup, setShowPopup] = useState(true);
    useEffect(() => {
        setShowPopup(true);
    }, []);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const semestre = formData.turma_atual;
        const form = new FormData();
        form.append('dados', JSON.stringify({ ...formData, semestre }));
        if (formData.foto) form.append('foto', formData.foto);

        try {
            const response = await fetch('/api/form', {
                method: 'POST',
                body: form,
            });
            const result = await response.json();
            if (response.ok) alert('Candidato cadastrado com sucesso!');
            else alert(`Erro: ${result.erro}`);
        } catch (error) {
            console.error('Erro ao enviar dados:', error);
            alert('Ocorreu um erro ao enviar o formulário. Tente novamente.');
        }
    };

    return (
        <>
        {showPopup && (
            <div className="popup-overlay">
                <div className="popup-content">
                    <h5 className="fw-bold">Para prosseguir, confirme seu cadastro</h5>
                    <br />
                    <button className="btn btn-success" onClick={() => setShowPopup(false)}>Ok</button>
                </div>
            </div>
        )}

        <div className="container-md container-form-student">
            <div className="title-form-student">
                <div className="col-md-12 text-left my-3">
                    <h5 className="mb-0">Continuação do</h5>
                    <h3 className="fw-bold">Cadastro de Alunos</h3>
                    <div className="divider"></div>
                </div>
            </div>
            <form className="form-student" method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-grid">
                    {/* Lado esquerdo: foto */}
                    <div className="foto-container">
                    <div className="photo-box">
                        <img src="/imgs/camera.svg" width={80} height={80} alt="" />
                    </div>
                    </div>

                    {/* lado direito */}
                    <div className="info-container">
                    {/* toggle e checkbox */}
                    <div className="d-flex align-items-center gap-3 mb-3">
                        <div className="toggle-group">
                        <button type="button" className={formData.curso === 'DSM' ? 'active' : ''} onClick={() => handleCursoChange('DSM')}>DSM</button>
                        <button type="button" className={formData.curso === 'GE' ? 'active' : ''} onClick={() => handleCursoChange('GE')}>GE</button>
                        </div>

                        <label className="checkbox-label ">
                        <input type="checkbox" name="deseja_ser_lider" checked={formData.deseja_ser_lider} onChange={handleChange} className='check-lider' />
                        Desejo me cadastrar como Líder do PI que participo
                        </label>
                    </div>

                    {/* Campos */}
                    {/* Nome */}
                    <div className="form-field">
                    <input 
                        type="text" 
                        name="nome" 
                        value={formData.nome} 
                        onChange={handleChange} 
                        className="styled-input inp-nome"
                        placeholder="Nome:"
                    />
                    </div>

                    {/* RA e Data de Matrícula lado a lado */}
                    <div className="form-row">
                        <div className="form-field ra">
                            <input
                            type="text"
                            name="ra"
                            value={formData.ra}
                            onChange={handleChange}
                            className="styled-input inp-ra"
                            placeholder="RA:"
                            />
                        </div>

                        <div className="form-field data">
                        <input
                    type={dateFocused ? "date" : "text"}
                    onFocus={() => setDateFocused(true)}
                    name="ano_ingresso"
                    value={formData.ano_ingresso}
                    onChange={handleChange}
                    className="styled-input inp-data"
                    placeholder="Data de Matrícula:"
                    />
                        </div>
                        </div>
                    {/* Semestre Atual */}
                    <div className="form-field">
                    <input 
                        type="number" 
                        name="turma_atual" 
                        value={formData.turma_atual} 
                        onChange={handleChange} 
                        className="styled-input"
                        placeholder="Semestre Atual:"
                    />
                    </div>

                    {/* Botões */}
                    <div className="button-group mt-3">
                        <button type="submit" className="btn btn-success">Cadastrar</button>
                        <a href="/" className="btn btn-outline-danger">Cancelar</a>
                    </div>
                    </div>
                </div>
                </form>

        </div>
        </>
    );
};

export default FormStudent;