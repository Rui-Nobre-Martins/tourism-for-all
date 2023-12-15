import { Swiper, SwiperSlide} from "swiper/react"

import Footer from "../components/Footer"
import NavegationBar from "../components/NavegationBar"

const data = [

  {id: "1", image: "/image/slider0.jpg"},
  {id: "2", image: "/image/slider0.jpg"},
  {id: "3", image: "/image/slider0.jpg"},
  {id: "4", image: "/image/slider0.jpg"},
  {id: "3", image: "/image/slider0.jpg"}
  ]


function TheTravelerView() {
    return(
        <>
        <NavegationBar/>
        
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

        <Footer/>
        </>
    )
}

export default TheTravelerView