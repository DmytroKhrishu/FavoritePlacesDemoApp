import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/colors';

export default function Button({ children, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={onPress}
        android_ripple={{ color: Colors.primary100 }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 4,
    marginTop: 8,
    borderRadius: 10,
    overflow: 'hidden',
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: Colors.primary700,
    elevation: 5
  },
  text: {
    fontSize: 20,
    color: Colors.primary50,
    textAlign: 'center',
  },
});
