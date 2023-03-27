import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ActivityIndicator, Linking} from 'react-native';
import {ROUTES} from '../constants';
import {
  DetailsScreen,
  HomeScreen,
  LinkingScreen,
  ProductDetailScreen,
} from '../modules';

const RootStack = createNativeStackNavigator();

const config = {
  screens: {
    [ROUTES.Home]: {
      path: 'home',
      initialRouteName: ROUTES.Home,
    },
    [ROUTES.Details]: {
      path: 'details',
    },
    [ROUTES.Linking]: {
      path: 'linking',
    },
    [ROUTES.ProductDetails]: {
      path: 'productdetails/:name',
    },
  },
};

const urlConvertor = (url: string | null) => {
  const path = url?.includes('?')
    ? url?.split('?')[0]?.split('/')?.[3]?.replace(/_/g, '')?.toLowerCase()
    : url?.split('/')?.[3]?.replace(/_/g, '')?.toLowerCase() ?? '';

  if (url?.includes('?')) {
    const data = url?.split('?')[1].split('=')[1];
    return url?.replace(url?.split('/')?.[3], path + '/' + data);
  } else {
    return url?.replace(url?.split('/')?.[3], path);
  }
};

const linking = {
  prefixes: ['http://example.com/', 'rndeeplink://', 'https://example.com/'],
  config,
  async getInitialURL() {
    const url = await Linking.getInitialURL();
    const supportedUrl = urlConvertor(url);
    return supportedUrl;
  },

  // // Custom function to subscribe to incoming links
  subscribe(listener: any) {
    const linkingSubscription = Linking.addEventListener('url', ({url}) => {
      const supportedUrl = urlConvertor(url);
      listener(supportedUrl);
    });
    return () => {
      linkingSubscription.remove();
    };
  },
};

const AppContainer = () => (
  <NavigationContainer
    linking={linking}
    fallback={<ActivityIndicator color={'green'} size={'large'} />}>
    <RootStack.Navigator>
      <RootStack.Screen name={ROUTES.Home} component={HomeScreen} />
      <RootStack.Screen name={ROUTES.Details} component={DetailsScreen} />
      <RootStack.Screen name={ROUTES.Linking} component={LinkingScreen} />
      <RootStack.Screen
        name={ROUTES.ProductDetails}
        component={ProductDetailScreen}
      />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default AppContainer;
