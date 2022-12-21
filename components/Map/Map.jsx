import { memo, useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const center = {
  lat: 50.5213592,
  lng: 30.2191714,
};

const KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: KEY,
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '100%' }}
      center={center}
      zoom={17}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default memo(MyComponent);
