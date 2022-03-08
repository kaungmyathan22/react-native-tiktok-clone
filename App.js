import React, {useEffect} from 'react';

import {SafeAreaView} from 'react-native';
import RootNavigation from './src/navigation';
import {withAuthenticator} from 'aws-amplify-react-native';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import {getUser} from './src/graphql/queries';
import {createUser} from './src/graphql/mutations';

const randomImages = [
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-3.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-6.jpg',
  'https://hieumobile.com/wp-content/uploads/avatar-among-us-9.jpg',
];

const getRandomImage = () => {
  return randomImages[Math.floor(Math.random() * randomImages.length)];
};
const App = () => {
  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});
      if (!userInfo) {
        return;
      }
      const getUserData = await API.graphql(
        graphqlOperation(getUser, {id: userInfo.attributes.sub}),
      );
      if (getUserData.data.getUser) {
        console.log('user already exists');
        return;
      }
      const newUser = {
        id: userInfo.attributes.sub,
        username: userInfo.username,
        email: userInfo.attributes.email,
        imageUri: getRandomImage(),
      };
      await API.graphql(graphqlOperation(createUser, {input: newUser}));
    };
    fetchUser();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <RootNavigation />
    </SafeAreaView>
  );
};

export default withAuthenticator(App);
