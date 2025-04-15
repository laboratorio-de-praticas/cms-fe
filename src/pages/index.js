import Header from '../../components/header.js'
import Footer from '../../components/footer.js';
import Navbar from '../../components/navbar.js';
import SearchHome from '../../components/search-home.js';
import StudentCard from '../../components/student-card.js';
import MenuProfile from '../../components/menu-profile.js';

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <SearchHome />
        <StudentCard />
        <MenuProfile />
      </main>
      <Footer />
    </>
  );
}