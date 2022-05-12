import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import {
  Avatar,
  Text,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

import { Ionicons } from '@expo/vector-icons';
import Global from '../constants/globalStyles';

const DrawerContent = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userSection}>
            <Avatar.Image
              source={{
                uri: 'https://this-person-does-not-exist.com/img/avatar-76c9a805c9b07eec7b61f6f27602ec7d.jpg',
              }}
              size={60}
            />
            <View style={styles.userInfo}>
              <Title style={styles.userName}>Pedro Nogueira</Title>
              <Caption style={styles.userNameInfo}>@pedro_nogueira</Caption>
            </View>
          </View>

              <DrawerItemList {...props} />
          {/* <Drawer.Section>
            <DrawerItem
              label='Início'
              labelStyle={{
                fontSize: 16,
                marginLeft: -14,
              }}
              icon={(color, size) => (
                <Ionicons
                  name='home'
                  size={20}
                  color={Global.colors.colorDarkGreen}
                />
              )}
              onPress={() => {
                props.navigation.navigate('home');
              }}
            />

            <DrawerItem
              label='Carrinho'
              labelStyle={{
                fontSize: 16,
                marginLeft: -14,
              }}
              icon={() => (
                <Ionicons
                  name='cart'
                  size={24}
                  color={Global.colors.colorDarkGreen}
                  style={{ marginLeft: -2 }}
                />
              )}
              onPress={() => {
                props.navigation.navigate('Cart');
                props.navigation.closeDrawer();
              }}
            />

            <DrawerItem
              label='Notificações'
              labelStyle={{
                fontSize: 16,
                marginLeft: -14,
              }}
              icon={(color, size) => (
                <Ionicons
                  name='notifications'
                  size={22}
                  color={Global.colors.colorPrimary}
                  onPress={() => navigation.navigate('Notificacoes')}
                />
              )}
              onPress={() => {
                props.navigation.navigate('Notificacoes');
                props.navigation.closeDrawer();
              }}
            />

            <DrawerItem
              label='Favoritos'
              labelStyle={{
                fontSize: 16,
                marginLeft: -14,
              }}
              icon={(color, size) => (
                <Ionicons
                  name='heart'
                  size={22}
                  color={Global.colors.colorLightRed}
                />
              )}
              onPress={() => {
                props.navigation.navigate('Favoritos');
                props.navigation.closeDrawer();
              }}
            />
          </Drawer.Section> */}
        </View>
      </DrawerContentScrollView>
      <Drawer.Section>
        <DrawerItem
          label='Sair'
          labelStyle={{
            fontSize: 16,
            marginLeft: -14,
          }}
          icon={(color, size) => (
            <Ionicons
              name='log-out'
              size={22}
              color={Global.colors.colorDarkGreen}
            />
          )}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  drawerContent: {
    paddingVertical: 22,
  },

  userSection: {
    flexDirection: 'row',
    marginBottom: 22,
    paddingHorizontal: 15,
  },

  userInfo: {
    marginLeft: 16,
  },

  userName: {
    fontSize: 16,
    color: Global.colors.colorDarkGreen,
  },

  userNameInfo: {
    marginTop: -6,
  },
});
export default DrawerContent;
