

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
    
    <div className="cardContainer">
      <div className="card">
        <img src="../src/assets/traveller-1.jpg" alt="" />
        <div className="cardInfo">
          <p>data</p>
          <p>local</p>
        </div>
      </div>

      <div className="card">
        <img src="../src/assets/traveller-1.jpg" alt="" />
        <div className="cardInfo">
          <p>data</p>
          <p>local</p>
        </div>
      </div>

      <div className="card">
        <img src="../src/assets/traveller-1.jpg" alt="" />
        <div className="cardInfo">
          <p>data</p>
          <p>local</p>
        </div>
      </div>

      <div className="card">
        <img src="../src/assets/traveller-1.jpg" alt="" />
        <div className="cardInfo">
          <p>data</p>
          <p>local</p>
        </div>
      </div>

    </div>
      

        
          
      

      
    
      
        
       
    
    {/* Finish Container with latest trips */}



    {/* Start footer */}
    <footer>
      <div className="footer">
      <p>Copyright</p>
      <p>Social Media ICON</p>
      </div>
    </footer>
    {/* Finish footer */}
      
    </>
  )
}

export default App
