import { Swiper, SwiperSlide} from "swiper/react"

import Footer from "../components/Footer"
import NavegationBar from "../components/NavegationBar"

const data = [
  {id: "1", image: "http://localhost:5173/image/london.jpg"},
  {id: "2", image: "http://localhost:5173/image/dubai.jpg"},
  {id: "3", image: "http://localhost:5173/image/paris.jpg"},
  {id: "4", image: "http://localhost:5173/image/singapure.jpg"}
  ]


function TheTravelerView() {
    return(
        <>
        <NavegationBar/>
          <div className="sliderTraveler">
            <h1 className="silderTitle">The Traveler</h1>
            <div className="sliderContainer">
              <div>
                <Swiper
                  slidesPerView={1}
                  pagination={{clickable: true}}
                  navigation
                >
                  {data.map( (item) => (
                    <SwiperSlide className="sliderItem" >
                      <img src= {item.image} alt="travel photos" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        <Footer/>
        </>
    )
}

export default TheTravelerView