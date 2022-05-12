import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LikeBtn = ({ name, size, color, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Ionicons name={name} size={size} color={color} onPress={onPress}/>
      {/* <Ionicons name={name} size={size} color={color} onPress={onPress} /> */}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5
  },
});

export default LikeBtn;
