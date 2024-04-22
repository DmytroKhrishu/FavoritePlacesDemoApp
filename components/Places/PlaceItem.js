import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/colors';

export default function PlaceItem({ place, onSelect }) {
  return (
    <View style={styles.itemContainer}>
      <Pressable
        style={styles.item}
        onPress={onSelect}
        android_ripple={{ color: Colors.primary100 }}
      >
        <Image style={styles.image} source={{ uri: place.imageUri }} />
        <View style={styles.info}>
          <Text style={styles.title}>{place.title}</Text>
          <Text style={styles.address}>{place.address}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 10,
    marginHorizontal: 6,
    borderRadius: 10,
    overflow: 'hidden',
  },
  item: {
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'flex-start',
    backgroundColor: Colors.primary500,
    elevation: 5,
  },
  image: {
    flex: 2,
    height: 100,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  info: {
    flex: 3,
    padding: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.gray700,
  },
  address: {
    fontSize: 12,
    color: Colors.gray700,
  },
});
