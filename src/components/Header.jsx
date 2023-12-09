import { Swiper, SwiperSlide} from "swiper/react"



const data = [
  {id: "1", image: 'https://imagesvt.abreu.pt/abreu/share/2021-07/2021-07-01161425_a000263c-69b3-42c4-84ef-a24a06e6335b$$ee3b4c99-4882-441a-a1c4-b7b8cfdc9e43$$2659f073-83a8-48a6-8053-b8308968ffef$$BlogImageHeader$$pt$$1.jpg'},
  {id: "2", image: 'https://imagesvt.abreu.pt/abreu/share/2021-07/2021-07-01161040_d6ab1b33-4d67-47c7-a753-307d74dccfba$$a81992eb-29db-4c13-9fd9-43421f4b1d19$$35600b6f-7b19-4829-9fad-6a1ef1164620$$BlogImage$$pt$$1.jpg'},
  {id: "3", image: 'https://imagesvt.abreu.pt/abreu/share/2021-07/2021-07-01161340_d6ab1b33-4d67-47c7-a753-307d74dccfba$$a81992eb-29db-4c13-9fd9-43421f4b1d19$$cb37f055-eec2-4d5c-9570-f7c510739c83$$BlogImage$$pt$$1.jpg'},
  {id: "4", image: 'https://imagesvt.abreu.pt/abreu/share/2021-07/2021-07-01161417_d6ab1b33-4d67-47c7-a753-307d74dccfba$$a81992eb-29db-4c13-9fd9-43421f4b1d19$$09b8cb76-66c5-416e-aad8-4977135e0324$$BlogImage$$pt$$1.jpg'}
  ]

function Header() {
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
        
        
        
        {/* <header className="headerContainer">
            <h1 className="headerTitle">Dream Travel</h1>
            <img className="headerImage" src="../src/assets/header.jpg" alt="Plane lading" /> */}
        {/* </header> */}
        </>
    )
}

export default Header