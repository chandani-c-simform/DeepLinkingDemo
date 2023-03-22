import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ActivityIndicator, Linking} from 'react-native';
import {ROUTES} from '../constants';
import {DetailsScreen, HomeScreen, LinkingScreen} from '../modules';

const RootStack = createNativeStackNavigator();

const config = {
  screens: {
    Home: {
      path: 'home',
    },
    Details: {
      path: 'details',
    },
  },
};

const linking = {
  prefixes: ['rndeeplink://'],
  config,
  async getInitialURL() {
    const url = await Linking.getInitialURL();
    console.log(url, '<==url');

    return url;
  },
  // Custom function to subscribe to incoming links
  subscribe(listener: any) {
    const linkingSubscription = Linking.addEventListener('url', ({url}) => {
      console.log(url, '<==url in subscribe');

      listener(url);
    });
    return () => {
      linkingSubscription.remove();
    };
  },
};

const AppContainer = () => (
  <NavigationContainer
    linking={linking}
    fallback={<ActivityIndicator color={'red'} size={'large'} />}>
    <RootStack.Navigator>
      <RootStack.Screen name={ROUTES.Home} component={HomeScreen} />
      <RootStack.Screen name={ROUTES.Details} component={DetailsScreen} />
      <RootStack.Screen name={ROUTES.Linking} component={LinkingScreen} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default AppContainer;
