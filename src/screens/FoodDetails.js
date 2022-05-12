import { useLayoutEffect, useState } from 'react';

import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useGlobalContext } from '../store/context';

import { Ionicons } from '@expo/vector-icons';

import LikeBtn from '../components/LikeBtn';
import AddCartBtn from '../components/AddCartBtn';

import Global from '../constants/globalStyles';

const FoodDetails = ({ navigation, route }) => {
  const { foods, dispatch, cart } = useGlobalContext();
  const [foodItem, setFoodItem] = useState({});
  const [count, setCount] = useState(1);

  const {
    params: { id },
  } = route;

  useLayoutEffect(() => {
    const item = foods.find((food) => food.id === id);
    setFoodItem(item);
  }, [id, foods, foodItem, setFoodItem]);

  const favoritar = () => {
    dispatch({ type: 'FAVORITAR', payload: { id: id } });
  };

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...foodItem, quantidade: count },
    });
    setCount(1)

  };

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => {
      return prev - 1 < 0 ? 0 : prev - 1;
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.img} source={{ uri: foodItem?.img }} />
      </View>

      <View style={styles.countContainer}>
        <View style={styles.iconsContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.iconContainer,
              pressed && styles.pressed,
            ]}
            onPress={decrement}
          >
            <Ionicons name='remove' size={24} color='black' />
          </Pressable>

          <View style={styles.count}>
            <Text style={styles.countText}>{count}</Text>
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.iconContainer,
              pressed && styles.pressed,
            ]}
            onPress={increment}
          >
            <Ionicons name='ios-add-outline' size={24} color='black' />
          </Pressable>
        </View>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{foodItem?.nome}</Text>
        <View style={styles.outerRatingContainer}>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={18} color={Global.colors.colorPrimary} />
            <Text style={styles.avaliacoes}>{foodItem?.avaliacoes}</Text>
          </View>
          <View style={styles.likeContainer}>
            <LikeBtn
              name={foodItem.favoritado ? 'heart' : 'heart-outline'}
              size={24}
              color={Global.colors.colorLightRed}
              onPress={favoritar}
            />
          </View>
        </View>
      </View>

      <View style={styles.descricaoContainer}>
        <Text style={styles.subTitle}>Descrição</Text>
        <Text style={styles.descricao}>{foodItem?.detalhes?.descricao}</Text>
      </View>

      <View style={styles.descricaoContainer}>
        <Text style={styles.subTitle}>Acompanhamentos</Text>
        <Text style={styles.descricao}>
          {foodItem?.detalhes?.acompanhamentos.join(', ')}.
        </Text>
      </View>

      <View style={styles.descricaoContainer}>
        <Text style={styles.subTitle}>Valor</Text>
        <Text style={styles.descricao}>R$ {foodItem?.preco}</Text>
      </View>

      <AddCartBtn onPress={addToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  img: {
    width: '100%',
    height: 260,
    borderRadius: 18,
  },

  pressed: {
    opacity: 0.6,
  },

  outercountContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  countContainer: {
    marginTop: -25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  count: {
    marginHorizontal: 15,
    minWidth: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
  },

  iconContainer: {
    backgroundColor: Global.colors.colorPrimary,
    opacity: 0.8,
    borderRadius: 5,
    padding: 4,
  },

  countText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 20,
    color: Global.colors.colorDarkGreen,
    fontWeight: 'bold',
    marginVertical: 6,
  },

  outerRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 4,
    paddingHorizontal: 6,
    backgroundColor: '#f8f9fa',
    borderRadius: 5,
  },

  likeContainer: {
    marginLeft: 6,
  },

  avaliacoes: {
    fontSize: 14,
    color: Global.colors.colorDarkGreen,
    marginLeft: 6,
  },

  descricaoContainer: {
    marginVertical: 4,
  },

  subTitle: {
    fontSize: 16,
    color: Global.colors.colorDarkGreen,
    fontWeight: 'bold',
  },

  descricao: {
    fontSize: 14,
    lineHeight: 22,
    marginTop: 2,
    textTransform: 'capitalize',

    // fontWeight: 'bold'
  },
});
export default FoodDetails;
