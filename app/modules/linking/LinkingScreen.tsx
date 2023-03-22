import {Button, StyleSheet, Text, View, Linking} from 'react-native';
import React from 'react';

const LinkingScreen = () => {
  const URL_Home = 'RNDeepLink://home';
  const URL_Deatil = 'RNDeepLink://details';

  return (
    <View style={styles.container}>
      <Text>LinkingScreen</Text>
      <Button
        title="go to homescreen"
        onPress={() => Linking.openURL(URL_Home)}
      />
      <Button
        title="go to detailsScreen"
        onPress={() => Linking.openURL(URL_Deatil)}
      />
    </View>
  );
};

export default LinkingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lilac',
  },
});
