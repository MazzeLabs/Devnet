import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps';
import mapfeatures from "../data/mapfeatures.json";

const citiesData = [
  { name: 'Paris', coordinates: [2.3522, 48.8566], city: 'Paris', country: 'France' },
];

const Map = () => {
  return (
    <div className='cards mt-5' style={{ pointerEvents: 'none' }}>
      <div className='px-3 hidden md:block' style={{ width: '150px' }}>
        <h3>1 Nodes</h3>
        <p>1 Countries</p>
        <p>1 Cities</p>
      </div>
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
            <circle id='valid-country' className='tooltip' r={4} fill="#F00" />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default Map;