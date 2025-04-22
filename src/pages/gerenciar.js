
import SearchHome from '../../components/search-home.js';
import StudentCard from '../../components/student-card.js';
// eu coloquei header, navbar e footer no app.js e ai tirei das outras paginas pra nao duplicar ;)
export default function Gerenciar() {
  return (
    <>
      <main>
        <SearchHome />
        <StudentCard />
      </main>
    </>
  );
}