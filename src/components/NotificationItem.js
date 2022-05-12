import { View, Text, StyleSheet } from 'react-native';
import Global from '../constants/globalStyles';

const NotificationItem = ({ titulo, descricao, id }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.descricao}>{descricao}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFAFA',
    marginVertical: 8,
    padding: 8,
    borderRadius: 4,
    borderLeftWidth: 3,
    borderLeftColor: Global.colors.colorPrimary,
    minHeight: 75,
  },

  titulo: {
    fontWeight: 'bold',
    fontSize: 15,
    color: Global.colors.colorDarkGreen,
    marginBottom: 4,
  },

  descricao: {
    fontSize: 14,
  },
});

export default NotificationItem;
