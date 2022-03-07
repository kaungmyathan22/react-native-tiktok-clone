import {Dimensions, FlatList, View} from 'react-native';
import React from 'react';
import Post from '../../components/Post';
import posts from '../../data/posts';

const Home = () => {
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height - 76}
        snapToAlignment="start"
        decelerationRate={'fast'}
        data={posts}
        renderItem={({item}) => <Post post={item} />}
      />
    </View>
  );
};

export default Home;
