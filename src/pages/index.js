import Header from '../../components/header.js'
import Forms from "../../components/forms";
import Footer from '../../components/footer.js';
import Navbar from '../../components/navbar.js';
import SearchHome from '../../components/search-home.js';

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <br/> 
        <SearchHome />
        {/* <h3 class='text-center'>Formulário para cadastro de Alunos / Candidatos</h3>
        <Forms /> */}
      </main>
      <br/>
      <Footer />
    </>
  );
}

