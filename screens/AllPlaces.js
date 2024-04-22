import { useEffect, useState } from 'react';
import PlacesList from '../components/Places/PlacesList';
import { useIsFocused } from '@react-navigation/native';
import { fetchPlaces } from '../util/database';

export default function AllPlaces({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  const isFocused = useIsFocused();
  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces();
      setLoadedPlaces(places)
    }

    if (isFocused) {
      loadPlaces();
      // setLoadedPlaces((prev) => [...prev, route.params.place]);
    }
  }, [isFocused]);

  return <PlacesList places={loadedPlaces} />;
}
