import Header from '../../components/header.js'
import CreateProject from '../../components/CreateProject.js';
import Footer from '../../components/footer.js';
import Navbar from '../../components/navbar.js';

export default function FormProject(){
    return(
        <>
        <Header />
        <Navbar />
        <main>
            <br/>
            <CreateProject />
            <br/>
        </main>
        <Footer />
        </>
    )
}