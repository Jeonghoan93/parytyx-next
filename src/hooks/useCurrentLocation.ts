import { useEffect, useState } from "react";

interface LocationData {
  city?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
  street?: string;
}

const useCurrentLocation = (shouldFetchLocation = false): LocationData => {
  const [location, setLocation] = useState<LocationData>({});

  useEffect(() => {
    if (shouldFetchLocation && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();
          const { city, country, road } = data.address;
          setLocation({ city, country, latitude, longitude, street: road });
        } catch (error) {
          console.error("Failed to fetch location details:", error);
        }
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [shouldFetchLocation]);

  return location;
};

export default useCurrentLocation;
