import { Swiper, SwiperSlide} from "swiper/react"


const data = [

  {id: "1", image: "/image/slider0.jpg"},
  {id: "2", image: "/image/slider01.jpg"},
  {id: "3", image: "/image/slider001.jpg"},
  {id: "4", image: "/image/slider00001.jpg"},
  {id: "3", image: "/image/slider10.jpg"}
  ]

function Hero() {
    return(
        <>
        <div className="hero">
          <h1 className="heroTitle">360° Travel Inspirations</h1>
          <div className="heroContainer">
            <div className="heroImage">
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
        
        </>
    )
}

export default Hero