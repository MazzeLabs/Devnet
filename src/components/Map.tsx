import React, { Children } from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker
} from 'react-simple-maps';
import mapfeatures from "../data/mapfeatures.json";
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

const citiesData = [
    { name: 'Paris', coordinates: [2.3522, 48.8566], city: 'Paris', country: 'France' },
];

const Map = () => {
    return (
        <div className='cards mt-5' style={{ pointerEvents: 'none' }}>
            <ComposableMap>
                <Geographies geography={mapfeatures}>
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography
                                fill="rgb(54, 58, 57)"
                                stroke="rgb(54, 58, 57)"
                                key={geo.rsmKey}
                                geography={geo}
                            />
                        ))
                    }
                </Geographies>
                {citiesData.map((city, index) => (
                    <Marker key={index} coordinates={city.coordinates}>
                        <Tooltip
                            title={`City: ${city.city}, Country: ${city.country}`}
                            position="top"
                            trigger="mouseenter"
                            animation="fade"
                            html={<p>This is Markeer</p>}
                            {...Children}
                        />
                        <p>This is Markeer</p>
                    </Marker>
                ))}
            </ComposableMap>
        </div>
    );
};

export default Map;