import { Link } from "wouter"

function NavegationBar() {
    return(
        <>
        <div className="navBarFixed">
            <nav className="navBar">
                <div className="navLogo">
                    <Link href="/"><img src="/image/favicon.png" alt="logo"/></Link>
                </div>

            <div className="navLink">
                
                <Link href="/">
                    <img src="/image/house-solid.svg" alt="Home Button" /> 
                    <span className="hideLetter">Home</span> 
                </Link>
                
                <Link href="/addlocation"> 
                    <img src="/image/map-pin-solid.svg" alt="Add location" /> 
                    <span className="hideLetter">Add Location</span> 
                </Link>

                <Link href="/aboutus"> 
                    <img src="/image/user-solid.svg" alt="" />  
                    <span className="hideLetter">About Me</span> 
                </Link>
            </div>
            </nav>
        </div>

        {/* <div className="mobileIcon">
            <img src="/image/house-solid.svg" alt="Home Button" /> 
            <img src="/image/map-pin-solid.svg" alt="Add location" /> 
            <img src="/image/user-solid.svg" alt="" />  
        </div> */}

        </>
    )
}

export default NavegationBar