import { View, Pressable, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Global from '../constants/globalStyles';
import { useGlobalContext } from '../store/context';

import { useNavigation } from '@react-navigation/native';

const CartIcon = () => {
  const { cart } = useGlobalContext();

  const { navigate } = useNavigation();

  return (
    <Pressable onPress={()=> navigate('Cart')}>
      <View style={styles.container}>
        {Object.keys(cart).length > 0 && <View style={styles.cartBadge}></View>}
        <Ionicons name="cart" size={26}  color={Global.colors.colorDarkGreen}/>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    margin: 4,
  },

  cartBadge: {
    backgroundColor: Global.colors.colorPrimary,
    height: 12,
    width: 12,
    borderRadius: 100,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CartIcon;
