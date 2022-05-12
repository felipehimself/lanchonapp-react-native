import { FlatList, StyleSheet, View } from 'react-native';
import { foodOptions } from '../data/data';
import { useState } from 'react';
import { useGlobalContext } from '../store/context';

import MenuListItem from './MenuListItem';

const MenuList = () => {
  const [selected, setSelected] = useState(0);
  const { setCategory } = useGlobalContext();

  const onPress = (id, listItem) => {
    setSelected(id);
    setCategory(listItem.toLowerCase())
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={foodOptions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MenuListItem
            {...item}
            selected={selected}
            onPress={() => onPress(item.id, item.categoria)}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        overScrollMode='never'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    // borderWidth: 2,
    // borderColor: 'red',
    marginTop: 14,
  },
});

export default MenuList;
