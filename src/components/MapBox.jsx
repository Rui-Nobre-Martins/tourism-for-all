import * as React from 'react';
import "mapbox-gl/dist/mapbox-gl.css"
import  Map,{ Marker, NavigationControl} from 'react-map-gl'
import { useState, useEffect } from "react"

function MapBox() {

    const [locationForMapbox, setLocationForMapbox] = useState ([]);

    useEffect(function(){
        (async function(){

            const responseMapbox = await fetch("/api/citiesInfo.json");
            const resultMapbox = await responseMapbox.json();

            console.log(resultMapbox)
            setLocationForMapbox(resultMapbox)
        })();
    },[]);


  console.log(locationForMapbox)

    const Token = "pk.eyJ1Ijoicm1hcnRpbnMwMSIsImEiOiJjbHFsank3dHYxNTRxMmlyeTE5aTRsdmJzIn0.ru0GQjaXB_qaVMJWez801g";

    const [centerMapbox, setCenterMapbox] = useState({

        latitude: 48,
        longitude: 2,
        zoom: 1
    })

    return(
        <>
        <div className='mainContainer'>
        <Map 

            {...centerMapbox}
            mapboxAccessToken={Token}

            onMove={function (state) {
                return (
                    setCenterMapbox(state.centerMapbox)
                )
                
            }}

            mapStyle="mapbox://styles/mapbox/streets-v9">
            
            {locationForMapbox.map(function (info) {
                return ( 
                <>
                <div className='location-pin'>
                    <Marker latitude={info.lat} longitude={info.lon}></Marker>
                </div> 
              
                </>
                )
            })};

        <NavigationControl position='top-right' showCompass showZoom/>

        </Map>
        </div>
        
        </>
    )
}

export default MapBox;