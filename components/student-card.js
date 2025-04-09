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
          <div className="student-card" key={index}>
            <div className="student-info">
              <div className="student-avatar"></div>
              <div>
                <div className="student-name">{name}</div>
                <div className="student-class">DSM 4</div>
              </div>
            </div>
            <div className="student-actions">
              <i className="bi bi-pencil-fill text-warning"></i>
              <img src="/imgs/arrow-student-card.svg" alt="" className="seta-card"/>
              <i className="bi bi-trash-fill text-danger"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );  
};

export default StudentCard;
