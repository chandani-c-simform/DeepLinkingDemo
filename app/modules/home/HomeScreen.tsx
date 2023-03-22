import {Text, View, Button} from 'react-native';
import React from 'react';
import styles from './HomeStyles';

const HomeScreen = ({navigation}: any) => {
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
