import Footer from "../components/Footer"
import NavegationBar from "../components/NavegationBar"
import SubscribeFrom from "../components/SubscribeFrom"


function AboutUsView() {
    return(
        <>
        <NavegationBar/>
        
        <div className="aboutContainer">
                <h1 className="aboutTitle">About Me</h1>
            <div className="aboutContent">
                <img className="aboutImage" src="/image/aboutus1.jpg" alt="Photo Rui Martins" />
                <p className="aboutText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia asperiores nobis quaerat architecto accusamus similique soluta doloribus! Quo facere suscipit ducimus doloremque nihil illum nisi impedit nemo? Consequuntur, ut inventore.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia asperiores nobis quaerat architecto accusamus similique soluta doloribus! Quo facere suscipit ducimus doloremque nihil illum nisi impedit nemo? Consequuntur, ut inventore.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia asperiores nobis quaerat architecto accusamus similique soluta doloribus! Quo facere suscipit ducimus doloremque nihil illum nisi impedit nemo? Consequuntur, ut inventore.
                </p>
            </div>  
        </div>

        <SubscribeFrom/>
        <Footer/>
        </>
    )
}

export default AboutUsView