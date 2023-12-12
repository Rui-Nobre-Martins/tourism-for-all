
function NavegationBar() {
    return(
        <>
        <div className="navBarFixed">
            <nav className="navBar">
                <div className="navLogo">
                    <a href="/"><img src="/public/image/favicon.png" alt="logo" /></a> 
                </div>
            <ul className="navLink">
                <li><a href="/">Home</a></li>
                <li><a href="/addlocation">Add Location</a></li>
                <li><a href="/thetraveler">The Traveler</a></li>
            </ul>
            <button className="btnContact">Contacts</button>
            </nav>
        </div>
        
        </>
    )
}

export default NavegationBar