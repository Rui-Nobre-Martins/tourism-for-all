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
                    <img className="hideIcon" src="/image/house-solid.svg" alt="Home Button" /> 
                    <span className="hideLetter">Home</span> 
                </Link>
                
                <Link href="/addlocation"> 
                    <img className="hideIcon" src="/image/map-pin-solid.svg" alt="Add location" /> 
                    <span className="hideLetter">Add Location</span>
                </Link>

                <Link href="/aboutus"> 
                    <img className="hideIcon" src="/image/user-solid.svg" alt="" />  
                    <span className="hideLetter">About Me</span> 
                </Link>
                </div>

            <div className="mobileIcon">
                <Link href="/">
                <img className="navMobileIcon" src="/image/house-solid.svg" alt="Home Button" /> 
                </Link>
                <Link href="/addlocation">
                <img className="navMobileIcon" src="/image/map-pin-solid.svg" alt="Add location" />
                </Link> 
                <Link href="/aboutus">
                <img className="navMobileIcon" src="/image/user-solid.svg" alt="" />
                </Link>
            </div>

            </nav>

            
        </div>

        
        
        </>
    )
}

export default NavegationBar