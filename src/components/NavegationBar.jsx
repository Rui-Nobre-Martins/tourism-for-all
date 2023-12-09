
function NavegationBar() {
    return(
        <>
        <nav className="navBar">
            <div className="navLogo">
                <a href="/">Travel For All</a> 
            </div>
        <ul className="navLink">
            <li><a href="/">Home</a></li>
            <li><a href="/addlocation">Add Location</a></li>
            <li><a href="/thetraveler">The Traveler</a></li>
        </ul>
        <button className="btnContact">Contacts</button>
        </nav>
        </>
    )
}

export default NavegationBar