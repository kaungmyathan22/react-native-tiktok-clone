import React from 'react';

import {SafeAreaView} from 'react-native';
import RootNavigation from './src/navigation';
import {withAuthenticator} from 'aws-amplify-react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <RootNavigation />
    </SafeAreaView>
  );
};

export default withAuthenticator(App);
