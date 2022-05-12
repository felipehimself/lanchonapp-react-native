import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from '../components/DrawerContent';

import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

import Home from './../screens/Home';
import Favorites from '../screens/Favorites';
import FoodDetails from '../screens/FoodDetails';
import Notifications from '../screens/Notifications';
import Cart from '../screens/Cart';

import CartIcon from '../components/CartIcon';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

import Global from '../constants/globalStyles';

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={() => ({
        drawerStyle: { backgroundColor: '#fff' },
        headerShadowVisible: false,
        drawerActiveBackgroundColor: '#fff',
        drawerActiveTintColor: Global.colors.colorDarkGreen,
        drawerLabelStyle: { fontSize: 16, marginLeft: -14 },
        headerStyle: {
          shadowColor: 'transparent',
        },
      })}
    >
      <Drawer.Screen
        name='home'
        component={Home}
        options={({ navigation }) => ({
          drawerIcon: () => (
            <Ionicons
              name='home'
              size={20}
              color={Global.colors.colorDarkGreen}
            />
          ),
          drawerLabel: 'Início',
          headerLeft: () => (
            <Fontisto
              name='nav-icon-grid-a'
              size={24}
              color='gray'
              style={{ marginHorizontal: 10, padding: 10 }}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
          headerRight: ({ size, color, tintColor }) => (
            <Ionicons
              name='notifications'
              size={26}
              color={Global.colors.colorPrimary}
              style={{ marginHorizontal: 10, padding: 10 }}
              onPress={() => navigation.navigate('Notificacoes')}
            />
          ),
          headerTitle: '',
        })}
      />
      <Drawer.Screen
        name='Favoritos'
        component={Favorites}
        options={({ navigation }) => ({
          drawerIcon: ({ focused }) => (
            <Ionicons
              name='heart'
              size={24}
              color={Global.colors.colorDarkGreen}
            />
          ),
          drawerLabel: 'Favoritos',
          headerTitle: 'Favoritos',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Ionicons
              name='arrow-back'
              size={24}
              color='gray'
              style={{ marginHorizontal: 10, padding: 10 }}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
      <Drawer.Screen
        name='Notificacoes'
        component={Notifications}
        options={({ navigation }) => ({
          drawerIcon: () => (
            <Ionicons
              name='notifications'
              size={22}
              color={Global.colors.colorDarkGreen}
            />
          ),
          drawerLabel: 'Notificações',
          headerTitle: 'Notificações',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Ionicons
              name='arrow-back'
              size={24}
              color='gray'
              style={{ marginHorizontal: 10, padding: 10 }}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </Drawer.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          shadowColor: 'transparent',
        },
        headerTintColor: Global.colors.colorDarkGreen,
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        headerTitleStyle: { color: Global.colors.colorDarkGreen },
      }}
    >
      <Stack.Screen
        name='AppHome'
        component={DrawerStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='FoodDetail'
        component={FoodDetails}
        options={{
          headerTitle: '',
          headerRight: () => <CartIcon />,
        }}
      />

      <Stack.Screen
        name='Cart'
        component={Cart}
        options={{
          headerTitle: 'Carrinho',
        }}
      />
    </Stack.Navigator>
  );
};

const Navigators = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <AppStack />
    </NavigationContainer>
  );
};

export default Navigators;
