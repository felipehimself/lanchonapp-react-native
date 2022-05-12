import { View, Text, StyleSheet, Image } from 'react-native';
import Global from './../constants/globalStyles';
import { user } from '../data/data';
const Header = () => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Olá, {user.nome.split(' ')[0]}</Text>
        <Image
          style={styles.headerImage}
          source={require('./../../assets/waving-hand-pngrepo-com.png')}
        />
      </View>
      <Text style={styles.headerMessage}>Lanches especiais para você</Text>
    </View>
  );
};

const styles = StyleSheet.create({

  outerContainer: {
    paddingHorizontal: 5,
    marginHorizontal: 20,
    marginTop: 20,
  },

  headerContainer: {
    flexDirection: 'row'
  },

  headerTitle: {
    fontSize: 18,
    color: Global.colors.colorDarkLight,
    marginRight: 8,
    marginBottom: 8,
    textTransform: 'capitalize'
  },

  headerMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Global.colors.colorDarkGreen,
  },

  headerImage: {
    height: 25,
    width: 25,
  },
});
export default Header;
