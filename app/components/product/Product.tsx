import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './ProductStyles';
import type {ProductProps} from './ProductTypes';

const Product = ({image, name, price, navigation}: ProductProps) => {
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.5}
        onPress={() =>
          navigation.navigate('ProductDetails', {
            image: image,
            name: name,
            price: price,
          })
        }>
        <Image source={{uri: image}} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Product;
