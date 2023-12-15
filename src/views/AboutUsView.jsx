import Footer from "../components/Footer"
import NavegationBar from "../components/NavegationBar"


function AboutUsView() {
    return(
        <>
        <NavegationBar/>
        
        <div className="aboutContainer">
            <div className="aboutTitle">
                <h1>About us</h1>
            </div>
            <div className="aboutContent">
                <img src="/image/aboutus1.jpg" alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia asperiores nobis quaerat architecto accusamus similique soluta doloribus! Quo facere suscipit ducimus doloremque nihil illum nisi impedit nemo? Consequuntur, ut inventore.</p>
            </div>
            
        </div>

        <Footer/>
        </>
    )
}

export default AboutUsView