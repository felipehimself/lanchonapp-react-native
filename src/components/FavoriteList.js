import { View, FlatList, StyleSheet } from 'react-native';
import { useGlobalContext } from '../store/context';
import LancheItem from './FoodItem';

const FavoritosLista = () => {
  const { foods } = useGlobalContext();

  return (
    <View style={styles.container}>
      <FlatList
        data={foods.filter((food) => food.favoritado === true)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <LancheItem {...item} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 250,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

export default FavoritosLista;
