import { FlatList, View, StyleSheet } from 'react-native';
import LancheItem from './FoodItem';
import { useGlobalContext } from '../store/context';

const FoodList = () => {
  const { foods, category, termo } = useGlobalContext();

  const filterItem = (category) => {
    if (termo.length > 0) {
      return foods.filter((food) => food.nome.includes(termo));
    }

    switch (category) {
      case 'todos':
        return foods;

      case 'popular':
        return foods.filter((item) => item.popular === true);

      default:
        return foods.filter((item) => item.categoria === category);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={filterItem(category)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <LancheItem {...item} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 250,
        }}
        overScrollMode='never'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    // alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default FoodList;
