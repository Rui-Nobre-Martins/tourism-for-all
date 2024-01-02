import { Swiper, SwiperSlide} from "swiper/react";

const data = [
    {id: "1", image: "https://www.travelnews.ch/assets/images/0/Singapore%20Skyline%2C%20MBS%20and%20Esplanade%20%40Singapore%20Tourism%20Board-88b35a45.jpg"},
    {id: "2", image: "https://www.signaturetownhousehydepark.co.uk/blog/wp-content/uploads/2022/03/Exciting-Secrets-To-Explore-In-And-Around-Hyde-Park.jpg"},
    {id: "3", image: "https://i.insider.com/5b4c6a8520e3a820008b4576?width=1000&format=jpeg&auto=webp"},
    {id: "4", image: "https://www.douglasandgordon.com/media/1903330/aerial-view-ancient-architecture-672532.jpg?crop=0,0.0963568052496329,0,0.15584583792217319&cropmode=percentage&width=1024&height=512&rnd=132506791710000000"}
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