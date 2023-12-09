import { Swiper, SwiperSlide} from "swiper/react"

function Header() {
    return(
        <>
        {/* <header className="headerContainer">
            <h1 className="headerTitle">Dream Travel</h1>
            <img className="headerImage" src="../src/assets/header.jpg" alt="Plane lading" /> */}

        <div className="headerContainer">
          <h1 className="headerTitle">Travel for all</h1>
          <div className="headerImage">
            <Swiper>
              <SwiperSlide>
                <img src="../src/assets/header.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          
        </div>
        {/* </header> */}
        </>
    )
}

export default Header