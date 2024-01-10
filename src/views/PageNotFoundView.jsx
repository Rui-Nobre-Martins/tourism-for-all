import Footer from "../components/Footer";
import NavegationBar from "../components/NavegationBar";

function PageNotFoundView () {
    
    return (
        <>
        <NavegationBar/>
        <div className="page404Container">
            <img src="/image/404error.jpeg" alt="" />
        </div>
        <Footer/>
        </>
    )
}

export default PageNotFoundView;