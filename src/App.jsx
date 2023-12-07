

function App() {
  
  return (
    <>
    {/* Start Navegation Bar */}

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

    {/* Finish Favegation Bar */}

    
     {/* Start Header */}

    <header className="headerContainer">
        <h1 className="headerTitle">Dream Travel</h1>
        <img className="headerImage" src="../src/assets/header.jpg" alt="Plane lading" />
    </header>

    {/* Finish Header */}

    {/* Start Container with latest trips */}
    <section>
      <h2>Latest</h2>
      <div className="travelContainer">
        <div className="travelCard">
          <div className="travelCardContent"></div>
        </div>
        
      </div>
    </section>
    {/* Finish Container with latest trips */}




    <footer>
      <div className="footer">
      <p>Copyright</p>
      <p>Contacts</p>
      <p>Social Media</p>
      </div>
    </footer>
      
    </>
  )
}

export default App
