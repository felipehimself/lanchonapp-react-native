import { View, Pressable, Image, StyleSheet, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Global from '../constants/globalStyles';

const FoodItem = ({ nome, preco, id, img }) => {
  const navigation = useNavigation();

  const moveToFoodDetail = () => {
    navigation.navigate('FoodDetail', { id });
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={moveToFoodDetail}
        style={({ pressed }) => pressed && { opacity: 0.8 }}
      >
        <Image style={styles.image} source={{ uri: img }} />
      </Pressable>
      <View style={styles.nameContainer}>
        <Text style={styles.nameText}>{nome}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 200,

    borderRadius: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',

  },

  image: {
    width: 150,
    height: 200,
    margin: 10,
    borderRadius: 10,
  },

  nameContainer: {
    position: 'absolute',
    backgroundColor: '#FFFAFA',
    paddingHorizontal: 5,
    paddingVertical: 5,
    bottom: 10,
    right: 0,
  },

  nameText: {
    fontWeight: 'bold',
    color: Global.colors.colorDarkGreen,
  },
});

export default FoodItem;
