import {Dimensions, FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Post from '../../components/Post';
import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../../graphql/queries';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await API.graphql(graphqlOperation(listPosts));
        setPosts(response.data.listPosts.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, []);

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
