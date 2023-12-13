import { Link } from "wouter"

function NavegationBar() {
    return(
        <>
        <div className="navBarFixed">
            <nav className="navBar">
                <div className="navLogo">
                    <img src="/public/image/favicon.png" alt="logo" />
                </div>
            <div className="navLink">
                <Link href="/">Home</Link>
                <Link href="/thetraveler">The Traveler</Link>
                <Link href="/addlocation">Add Location</Link>
                <Link href="/aboutus">About us</Link>
            </div>
            <button className="btnContact">Contacts</button>
            </nav>
        </div>
        
        </>
    )
}

export default NavegationBar