import { ScrollView, View, Text, FlatList, StyleSheet } from 'react-native';
import { useGlobalContext } from '../store/context';
import NotificationItem from '../components/NotificationItem';

const Notifications = () => {
  const { notifications } = useGlobalContext();

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationItem {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default Notifications;
