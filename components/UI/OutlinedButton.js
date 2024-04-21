import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/colors';

export default function OutlinedButton({ onPress, icon, children }) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={styles.button}
        android_ripple={{ color: Colors.primary500 }}
      >
        <Ionicons name={icon} size={18} color={Colors.primary500} style={styles.icon} />
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 4,
    borderRadius: 10,
    overflow: 'hidden',
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.primary500,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: Colors.primary500,
  },
});
