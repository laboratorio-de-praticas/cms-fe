import Header from '../../components/header.js'
import Footer from '../../components/footer.js';
import Navbar from '../../components/navbar.js';
import SearchHome from '../../components/search-home.js';
import StudentCard from '../../components/student-card.js';

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <SearchHome />
        <StudentCard />
      </main>
      <br />
      <Footer />
    </>
  );
}