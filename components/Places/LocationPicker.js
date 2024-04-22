import { Image, StyleSheet, View } from 'react-native';
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from 'expo-location';
import { useNavigation, useRoute } from '@react-navigation/native';

import OutlinedButton from '../UI/OutlinedButton';
import { Colors } from '../../constants/colors';
import { useState, useEffect } from 'react';
import { getMapPreview } from '../../util/location';

export default function LocationPicker() {
  const [pickedLocation, setPickedLocation] = useState();

  const navigation = useNavigation();
  const route = useRoute();

  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  useEffect(() => {
    const mapPickedLocation = route.params && {
      lat: route.params.pickedLat,
      lng: route.params.pickedLng,
    };
    if (mapPickedLocation) {
      setPickedLocation(mapPickedLocation);
    }
  }, [route]);

  async function verifyPermissions() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Permission not granted',
        'You need to allow location usage to proceed'
      );
      return false;
    }

    return true;
  }

  async function getLocationHandler() {
    const hasPersmission = await verifyPermissions();

    if (!hasPersmission) {
      return;
    }

    const location = await getCurrentPositionAsync({ accuracy: 6 });
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
    console.log(location);
  }

  function pickOnMapHandler() {
    navigation.navigate('Map');
  }

  return (
    <View>
      <View style={styles.mapPreview}>
        {pickedLocation && (
          <Image
            style={styles.image}
            source={{
              uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
            }}
          />
        )}
      </View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
