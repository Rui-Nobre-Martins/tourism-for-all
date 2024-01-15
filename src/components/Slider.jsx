import { Swiper, SwiperSlide} from "swiper/react"

function Slider({cityInfo}) {

    return(
        <>
        <div className="sliderTraveler">
            <div className="sliderContainer">
                <div>
                    <Swiper
                    effect="fade"
                    slidesPerView={1}
                    pagination={{clickable: true}}
                    autoplay={true}
                    // navigation
                    >
                    {cityInfo.slider.map( (item) => (
                        <SwiperSlide key={item.slider_img} className="sliderItem" >
                            <img src= {item.slider_img} alt="travel photos" />
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