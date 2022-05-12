import { Text, Pressable, View, StyleSheet } from 'react-native';
import Global from '../constants/globalStyles';

const MenuListItem = ({ id, categoria, selected, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.outerContainer,
        pressed && styles.pressed,
      ]}
    >
      <View style={[styles.container]}>
        <Text style={[styles.text, selected === id && styles.textActiveItem]}>
          {categoria}
        </Text>
        <View style={styles.viewHolder}>
          <View
            style={[styles.testeView, selected === id && styles.activeitem]}
          ></View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    paddingBottom: 12,
  },

  container: {
    paddingRight: 20,
  },

  pressed: {
    opacity: 0.8,
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Global.colors.colorDarkLighter,
    textTransform: 'capitalize',
  },

  textActiveItem: {
    color: Global.colors.colorDarkGreen,
  },

  viewHolder: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  activeitem: {
    marginTop: 4,
    width: 20,
    height: 4,
    borderRadius: 2,
    backgroundColor: Global.colors.colorPrimary,
  },
});

export default MenuListItem;
