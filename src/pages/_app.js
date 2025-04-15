import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import { useState } from 'react';
import Navbar from '../../components/navbar.js';
import MenuProfile from '../../components/menu-profile.js';
import Header from '../../components/header.js';
import Footer from '../../components/footer.js';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  // FUNCAO PRA MENU LATERAL DA NAVBAR ABRIR E FECHAR
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  const abrirMenu = () => setMenuAberto(true);
  const fecharMenu = () => setMenuAberto(false);

  return (
    <div style={{ position: 'relative' }}>
      <Header/>
      <Navbar abrirMenu={abrirMenu} />
      <MenuProfile menuAberto={menuAberto} fecharMenu={fecharMenu} />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer/>
    </div>
  );
}