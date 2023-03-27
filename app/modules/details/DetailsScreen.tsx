import React from 'react';
import {Button, Text, View} from 'react-native';
import styles from './DetailsScreenStyles';
import {DetailsProps} from './DetailsScreenTypes';

const DetailsScreen = ({navigation}: DetailsProps) => {
  return (
    <View style={styles.container}>
      <Text>DetailsScreen</Text>
      <Button
        title="Go to Linking"
        onPress={() => navigation.navigate('Linking')}
      />
    </View>
  );
};

export default DetailsScreen;
