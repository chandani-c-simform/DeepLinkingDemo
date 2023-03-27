import {Text, View, Button} from 'react-native';
import React from 'react';
import styles from './HomeStyles';
import {HomeScreenProps} from './HomeScreenTypes';

const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;
