import { Swiper, SwiperSlide} from "swiper/react"


const data = [
  {id: "1", image: "/image/travel.jpg"},
  {id: "2", image: "/image/venice.jpg"},
  {id: "3", image: "/image/desert.jpg"},
  {id: "4", image: 'https://imagesvt.abreu.pt/abreu/share/2021-07/2021-07-01161417_d6ab1b33-4d67-47c7-a753-307d74dccfba$$a81992eb-29db-4c13-9fd9-43421f4b1d19$$09b8cb76-66c5-416e-aad8-4977135e0324$$BlogImage$$pt$$1.jpg'}
  ]

function Hero() {
    return(
        <>
        <h1 className="headerTitle">Travel for all</h1>
        <div className="headerContainer">
          <div className="headerImage">
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
        </>
    )
}

export default Hero