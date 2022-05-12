import { View, Pressable, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Global from '../constants/globalStyles';

const AddCartBtn = ({ onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.outerContainer,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Ionicons name='cart' size={24} color={Global.colors.colorDarkGreen} />
        <Text style={styles.cartText}>Adicionar</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Global.colors.colorPrimary,
    paddingVertical: 14,
    borderRadius: 8,
    width: '100%',
  },

  cartText: {
    paddingHorizontal: 4,
    fontSize: 14,
    color: Global.colors.colorDarkGreen,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },

  pressed: {
    opacity: 0.8,
  },
});
export default AddCartBtn;
