import React from 'react';

import {SafeAreaView} from 'react-native';
import RootNavigation from './src/navigation';
// b1afad35-ede6-4a39-bb11-14bde97121bf
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RootNavigation />
    </SafeAreaView>
  );
};

export default App;
