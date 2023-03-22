import {Text, View, TouchableOpacity, Linking, Button} from 'react-native';
import React from 'react';
import styles from './DetailsStyles';

const DetailsScreen = ({navigation}) => {
  const supportUrl = 'https://www.shutterstock.com/search/image';
  const handleSupportLinkPress = async () => {
    // Check if the app can open the URL
    const supported = await Linking.canOpenURL(supportUrl);

    console.log(supported, '<==supported');
    if (supported) {
      // Open the URL in the default browser
      await Linking.openURL(supportUrl);
    } else {
      console.log(`Don't know how to open URI: ${supportUrl}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text>DetailsScreen</Text>
      {/* <View>
        <Text>Need help?</Text>
        <TouchableOpacity onPress={handleSupportLinkPress}>
          <Text>Contact support</Text>
        </TouchableOpacity>
      </View> */}
      <Button
        title="Go to Linking"
        onPress={() => navigation.navigate('Linking')}
      />
    </View>
  );
};

export default DetailsScreen;
