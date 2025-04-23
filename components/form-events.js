import React from 'react';
import { useRouter } from 'next/router';
import "../src/styles/form-events.css";
const FormEvents = () => {
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData(prev => ({
            ...prev,
            foto: file
        }));
    };  
    return(
        <div className="container-md container-cadevento">
            <div className="row">
                <div className="col-6">
                    <div className="title-cadevento">
                        <p>Cadastro de</p>
                        <h3>Eventos</h3>
                    </div>
                </div>
                <div className="col-6">
                    {/* alternar o status */}
                    <div className="status-desativar">
                        <div className="status">
                            <p className='ativ'>Ativado</p>
                        </div>
                        {/* <div className="status-des">
                            <p className='desativ'>Desativado</p>
                        </div> */}
                        {/* o botao deve altenar entre esses dois */}
                        <button className="desativar">Desativar</button>
                        {/* <button className="ativar">Ativar</button> */}
                    </div>
                </div>
            </div>
            <div className="divider-cadevento"></div>
            <form action="">
            <div className="row">
                <div className="photo-box">
                    <input type="file" accept="image/*" id="imageUpload" style={{ display: 'none' }} onChange={handleImageChange} />
                        <label htmlFor="imageUpload">
                            <img src="/imgs/camera.svg" width={80} height={80} alt="Upload Image" />
                        </label>
                    </div>
            </div>
            <div className="row">
                <input type="text" className="nome-evento" placeholder='Nome:'/>
                <input type="text" className="tipo-evento" placeholder='Tipo:' />       
            </div>
            <div className="row">
                <input type="number" className="semestre-evento" placeholder='Semestre:' />
                <input type="number" className='ano-semestre-evento' placeholder='Ano do Semestre:'/>
            </div>
            <div className="row">
                <textarea name="" id="" className="descricao-evento" placeholder='Descrição:'></textarea>
            </div>
            <div className="row">
                <button className="concluir-evento">Concluir</button>
                <button className="cancelar-evento">Cancelar</button>
            </div>
            </form>
        </div>
    );
}
export default FormEvents;
