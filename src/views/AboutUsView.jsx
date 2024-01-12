import Footer from "../components/Footer"
import MapBox from "../components/MapBox"
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
                <p className="aboutText">Hello there! I'm Rui, a passionate Full Stack Web Developer with a wanderlust for exploring the world. As I craft digital wonders on the web, I've made it a point to take my skills on a global journey. 
                <br />
                Being a Full Stack Web Developer means I navigate both the front-end and back-end realms of web development, ensuring seamless and engaging user experiences. Whether I'm coding in a cozy café overlooking the Eiffel Tower or debugging on a beach with the sound of waves, my work goes beyond geographical boundaries.
                <br />
                My adventures have taken me to captivating destinations, from the bustling streets of Paris to the historic charm of London. With my laptop as my constant companion, I've had the privilege of merging work and travel seamlessly. The ability to adapt my coding environment to different time zones and cultural landscapes adds a unique flavor to my professional journey.
                <br />
                What excites me the most is the opportunity to blend creativity with functionality, whether I'm in a vibrant co-working space in Dubai or amidst the serene landscapes of Singapore. This nomadic lifestyle fuels my inspiration, allowing me to bring a global perspective to every project I undertake.
                <br />
                As I continue this journey, I look forward to discovering new technologies, collaborating with diverse minds, and turning every destination into my workspace. Join me on this exciting ride where Full Stack Web Development meets the wonders of the world!
                </p>   
            </div>  
        </div>

        <MapBox/>
        <SubscribeFrom/>
        <Footer/>
        </>
    )
}

export default AboutUsView