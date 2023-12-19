
function CardContainerTrip () {
    return(
        <>
        <h2 className="travellersTitle">Best travel of the year</h2>
        <div className="travellersContainer">
          <div className="travellersGrid">
            <div className="travellersCard">
              <a href="/">
                <img src="image/dubai.jpg" alt="traveller" />
                </a>
              <div className="travellersCardContent">
                <a href="">
                  <img src="image/ruiProfile1.png" alt="Foto de perfil do rui" />
                  <h4>Dubai</h4>
                  <p>See More...</p>
                </a>
              </div>
            </div>
            <div className="travellersCard">
              <a href="">
                <img src="image/london.jpg" alt="traveller" />
                </a>
              <div className="travellersCardContent">
                <a href="">
                  <img src="image/ruiProfile1.png" alt="client" />
                  <h4>London</h4>
                  <p>See More...</p>
                  </a>
              </div>
            </div>
            <div className="travellersCard">
              <a href="">
                <img src="image/paris.jpg" alt="traveller" />
              </a>
              <div className="travellersCardContent">
                <a href="">
                  <img src="image/ruiProfile1.png" alt="client" />
                  <h4>Paris</h4>
                  <p>See More...</p>
                </a>
              </div>
            </div>
            <div className="travellersCard">
              <a href="">
                <img src="image/singapure.jpg" alt="traveller" />
              </a>
              <div className="travellersCardContent">
                <a href="">
                  <img src="image/ruiProfile1.png" alt="client" />
                  <h4>Singapore</h4>
                  <p>See More...</p>
                </a>
              </div>
            </div>
          </div>
    </div>
        </>
    )
}

export default CardContainerTrip