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
                <a href="/"></a>
                <Link href="/">
                    Home</Link>
                {/* <Link href="/thetraveler">The Traveler</Link> */}
                <Link href="/addlocation">Add Location</Link>
                <Link href="/aboutus">About us</Link>
            </div>
            </nav>
        </div>

        </>
    )
}

export default NavegationBar