import { Link } from "wouter"

function CardContainerTrip () {
    return(
        <>
        <h2 className="travellersTitle">Best travel of the year</h2>
        <div className="travellersContainer">
          <div className="travellersGrid">
            <div className="travellersCard">
              <Link href="/details/1">
                <img src="image/dubai.jpg" alt="traveller" />
                </Link>
              <div className="travellersCardContent">
                <Link href="/details/1">
                  <img src="image/ruiProfile1.png" alt="Foto de perfil do rui" />
                  <h4>Rui</h4>
                  <p>Dubai</p>
                </Link>
              </div>
            </div>


            <div className="travellersCard">
              <Link href="/details/2">
                <img src="image/london.jpg" alt="traveller" />
                </Link>
              <div className="travellersCardContent">
                <Link href="/details/2">
                  <img src="image/ruiProfile1.png" alt="client" />
                  <h4>Rui</h4>
                  <p>London</p>
                  </Link>
              </div>
            </div>


            <div className="travellersCard">
              <Link href="/details/3">
                <img src="image/paris.jpg" alt="traveller" />
              </Link>
              <div className="travellersCardContent">
                <Link href="/details/3">
                  <img src="image/ruiProfile1.png" alt="client" />
                  <h4>Rui</h4>
                  <p>Paris</p>
                </Link>
              </div>
            </div>


            <div className="travellersCard">
              <Link href="/details/4">
                <img src="image/singapure.jpg" alt="traveller" />
              </Link>
              <div className="travellersCardContent">
                <Link href="/details/4">
                  <img src="image/ruiProfile1.png" alt="client" />
                  <h4>Rui</h4>
                  <p>Singapore</p>
                </Link>
              </div>
            </div>
          </div>
    </div>
        </>
    )
}

export default CardContainerTrip