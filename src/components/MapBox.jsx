import * as React from 'react';
import "mapbox-gl/dist/mapbox-gl.css"
import  Map,{ GeolocateControl, Marker, NavigationControl} from 'react-map-gl'
import { useState, useEffect } from "react"
import MapboxApiSevice from '../services/MapboxApiSevice';

function MapBox() {

    const [locationForMapbox, setLocationForMapbox] = useState ([]);

    useEffect(function(){
        (async function(){

            const resultMapbox = await MapboxApiSevice.getMapboxData();

            setLocationForMapbox(resultMapbox)
        })();
    },[]);

    function handleclick(info) {
        window.location.href = "/details/" + info.id; 
    }

    const Token = "pk.eyJ1Ijoicm1hcnRpbnMwMSIsImEiOiJjbHFsank3dHYxNTRxMmlyeTE5aTRsdmJzIn0.ru0GQjaXB_qaVMJWez801g";

    const [centerMapbox, setCenterMapbox] = useState({

        latitude: 46,
        longitude: 25,
        zoom: 1,
        interactive: true
    })

    return(
        <>
        <div className="mapBoxContainer">
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
                    <Marker 
                        onClick={() => {
                            handleclick(info)
                        }}
                        latitude={info.lat} 
                        longitude={info.lon}>
                    </Marker>
                </div>
                </>
                )
            })};

        <NavigationControl position='bottom-right' showCompass showZoom/>
        <GeolocateControl/>
        </Map>
        </div>
        
        </>
    )
}

export default MapBox;