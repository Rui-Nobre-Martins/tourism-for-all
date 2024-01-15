import * as React from 'react'
import "mapbox-gl/dist/mapbox-gl.css"
import  Map,{ NavigationControl, Marker} from 'react-map-gl'

function MapDetail ({cityInfo}) {
    
    const MapDetailTOKEN = "pk.eyJ1Ijoicm1hcnRpbnMwMSIsImEiOiJjbHFsank3dHYxNTRxMmlyeTE5aTRsdmJzIn0.ru0GQjaXB_qaVMJWez801g";

    const lat = cityInfo.lat;
    const lon = cityInfo.lon;
    
    return(
        <>
           <div className="mapDetail">
                <Map style={{width: "100%", height:"500px"}}

                mapboxAccessToken= {MapDetailTOKEN}

                initialViewState={{
                    latitude: lat,
                    longitude: lon,
                    zoom: 1,
                    interactive: false
                    }}
                    mapStyle="mapbox://styles/mapbox/streets-v9">
                    <Marker latitude={cityInfo.lat} longitude={cityInfo.lon}></Marker>
                    <NavigationControl showCompass showZoom/>
                </Map>
            </div> 
        </>
    )}

export default MapDetail