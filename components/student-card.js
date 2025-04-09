import "../src/styles/student-card.css";

const StudentCard = () => {
  const students = [
    "Guilherme Marcos da Silva",
    "Jorge Kirimis Leandro",
    "João Massau Marcos",
  ];

  return (
    <div className="container-fluid container-students">
        <div className="student-card-wrapper">
            {students.map((name, index) => (
            <div className="student-row" key={index}>
                <div className="student-card">
                <div className="student-info">
                    <div className="student-avatar"></div>
                    <div>
                    <div className="student-name">{name}</div>
                    <div className="student-class">DSM 4</div>
                    </div>
                </div>
                <div className="student-actions">
                    <img src="/imgs/arrow-student-card.svg" alt="seta" className="seta-card" />
                </div>
                </div>
                <div className="student-buttons">
                <img src="/imgs/edit-student.svg" alt="Editar" className="icon-button" />
                <img src="/imgs/Delete-student.svg" alt="Deletar" className="icon-button" />
                </div>
            </div>
            ))}
        </div>
    </div>

  
  );  
};

export default StudentCard;
