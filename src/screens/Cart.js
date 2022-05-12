import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { useGlobalContext } from '../store/context';
import Global from './../constants/globalStyles';

import FinishBtn from './../components/FinishBtn';

const Cart = ({ navigation }) => {
  const { cart } = useGlobalContext();

  return (
    <View style={styles.container}>
      <ScrollView
        overScrollMode='never'
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 50 }}
      >
        {cart?.map((item, index) => {
          const { nome, preco, img, quantidade } = item;
          return (
            <View style={styles.cartItemContainer} key={index}>
              <View style={styles.imgContainer}>
                <Image style={styles.img} source={{ uri: img }} />
              </View>
              <View style={styles.details}>
                <Text style={styles.name}>{nome}</Text>
                <Text style={styles.price}>Quantidade: {quantidade}</Text>

                <Text style={styles.price}>Total: R$ {preco * quantidade}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.finalAmountContainer}>
        <View style={styles.finalAmountItem}>
          <Text style={styles.finalPriceTitle}>Valor final: </Text>
          <Text style={styles.finalPrice}>
            R${' '}
            {cart.reduce((acc, curr) => acc + curr.quantidade * curr.preco, 0)}
          </Text>
        </View>
        <View style={styles.finalAmountItem}>
          <Text style={styles.finalPriceTitle}>Quantidade de itens:</Text>
          <Text style={styles.finalPrice}>
            {cart.reduce((acc, curr) => acc + curr.quantidade, 0)}
          </Text>
        </View>
      </View>

      <FinishBtn onPress={()=> navigation.navigate('Payment')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  cartItemContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFAFA',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    borderLeftColor: Global.colors.colorPrimary,
    borderLeftWidth: 1.5,
  },

  imgContainer: {
    marginRight: 10,
  },

  img: {
    height: 80,
    width: 80,
    borderRadius: 5,
  },

  details: {
    paddingLeft: 10,
    justifyContent: 'space-between',
  },

  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Global.colors.colorDarkGreen,
  },

  price: {
    fontSize: 16,
  },

  finalAmountContainer: {
    backgroundColor: '#FFFAFA',
    padding: 10,
    borderRadius: 5,
    position: 'absolute',
    bottom: 80,
    left: 20,
    right: 20,
    borderLeftColor: Global.colors.colorPrimary,
    borderLeftWidth: 1.5,
  },

  finalAmountItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  finalPriceTitle: {
    fontSize: 16,
    color: Global.colors.colorDarkGreen,
    fontWeight: 'bold',
  },

  finalPrice: {
    fontSize: 16,
  },
});

export default Cart;
