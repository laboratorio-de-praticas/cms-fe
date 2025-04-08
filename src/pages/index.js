import Header from '../../components/header.js'
import Forms from "../../components/forms";
import Footer from '../../components/footer.js';
import Navbar from '../../components/navbar.js';

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <h1>Formulário para cadastro de Alunos / Candidatos</h1>
        <Forms />
      </main>
      <Footer />
    </>
  );
}

