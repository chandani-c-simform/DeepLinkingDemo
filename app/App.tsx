import React from 'react';
import {SafeAreaView} from 'react-native';
import {AppContainer} from './navigation';

const App = (): React.ReactElement => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppContainer />
    </SafeAreaView>
  );
};

export default App;
