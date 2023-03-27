import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import styles from './ProductDetailScreenStyles';
import {ProductDetailsParamList} from './ProductDetailScreenTypes';

const ProductDetailScreen = () => {
  const route =
    useRoute<RouteProp<ProductDetailsParamList, 'ProductDetails'>>();
  const params = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{params.name}</Text>
      <Text style={styles.priceText}>{params.price}</Text>
    </View>
  );
};

export default ProductDetailScreen;
