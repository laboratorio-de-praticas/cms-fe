import Header from '../../components/header.js'
import Forms from "../../components/forms.js";
import Footer from '../../components/footer.js';
import Navbar from '../../components/navbar.js';

export default function Form(){
    return(
        <>
        <Header />
        <Navbar />
        <main>
            <br/>
            <Forms />
            <br/>
        </main>
        <Footer />
        </>
    )
}