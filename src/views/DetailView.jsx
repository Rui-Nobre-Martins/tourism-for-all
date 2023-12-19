import { useEffect, useState } from "react"

import NavegationBar from "../components/NavegationBar"
import Slider from "../components/Slider"
import Footer from "../components/Footer"




function DetailView() {
  return(
        <>
        <NavegationBar/>
        <Slider/>
        <h1>Trip Detail</h1>

        <Footer/>
        </>
    )
}

export default DetailView