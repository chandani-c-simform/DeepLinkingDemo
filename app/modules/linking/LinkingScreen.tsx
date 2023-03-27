import React from 'react';
import {View} from 'react-native';
import {Product} from '../../components';
import {products} from '../../constants';
import styles from './LinkingScreenStyles';
import {LinkingScreenProps} from './LinkingScreenTypes';

const LinkingScreen = ({navigation}: LinkingScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {products.map(product => (
          <Product
            key={product.name}
            name={product.name}
            image={product.image}
            price={product.price}
            navigation={navigation}
          />
        ))}
      </View>
    </View>
  );
};
export default LinkingScreen;
