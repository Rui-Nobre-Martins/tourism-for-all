import Footer from "../components/Footer"
import NavegationBar from "../components/NavegationBar"


function AboutUsView() {
    return(
        <>
        <NavegationBar/>
        
        <div className="aboutContainer">
            <h1 className="aboutContainer">About us</h1>
            <img src="/image/client-2.jpg" alt="" />
            <p className="aboutContent">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia asperiores nobis quaerat architecto accusamus similique soluta doloribus! Quo facere suscipit ducimus doloremque nihil illum nisi impedit nemo? Consequuntur, ut inventore.</p>
        </div>

        <Footer/>
        </>
    )
}

export default AboutUsView