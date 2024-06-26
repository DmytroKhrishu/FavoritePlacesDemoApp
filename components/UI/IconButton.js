import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function IconButton({ name, color, size, onPress }) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => [styles.button, pressed && styles.pressed]}>
      <Ionicons name={name} color={color} size={size} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    // padding: 8,
    
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  pressed: {
    opacity: 0.7
  }
});
