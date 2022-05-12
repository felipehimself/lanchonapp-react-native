import { View, Pressable, Text, StyleSheet } from 'react-native';
import Global from '../constants/globalStyles';

const FinishBtn = ({ onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.outerContainer,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Text style={styles.cartText}>Confirmar Pedido</Text>
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
export default FinishBtn;
