import { Swiper, SwiperSlide} from "swiper/react"

const data = [
    {id: "1", image: "https://www.arabnews.pk/sites/default/files/styles/n_670_395/public/2022/07/18/3340941-1104752121.jpg?itok=oYeCHR5W"},
    {id: "2", image: "/image/london.jpg"},
    {id: "3", image: "/image/paris.jpg"},
    {id: "4", image: "/image/singapure.jpg"}
    ]

function Slider() {
    return(
        <>
        <div className="sliderTraveler">
                <div className="sliderContainer">
                    <div>
                        <Swiper
                        slidesPerView={1}
                        pagination={{clickable: true}}
                        navigation>
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

export default Slider