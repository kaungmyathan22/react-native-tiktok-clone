import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {Storage, API, graphqlOperation, Auth} from 'aws-amplify';
import {useRoute, useNavigation} from '@react-navigation/native';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {createPost} from '../../graphql/mutations';

const CreatePost = () => {
  const [description, setDescription] = useState('');
  const [videoKey, setVideoKey] = useState(null);
  const route = useRoute();
  const navigation = useNavigation();

  const uploadToStorage = async imagePath => {
    try {
      console.log(imagePath);
      const response = await fetch(imagePath);
      const blob = await response.blob();

      const filename = `${uuidv4()}.mp4`;
      const s3Response = await Storage.put(filename, blob);
      setVideoKey(s3Response.key);
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  useEffect(() => {
    uploadToStorage(route.params.videoUri);
  }, [route]);

  const onPublish = async () => {
    if (!videoKey) {
      console.warn('Video is not yet uploaded.');
      return;
    }
    try {
      const userInfo = await Auth.currentAuthenticatedUser();
      const newPost = {
        videoUri: videoKey,
        description,
        userPostsId: userInfo.attributes.sub,
        songPostsId: 'de26f8fd-c288-4d19-a46b-dc5f61577b72',
      };
      const response = await API.graphql(
        graphqlOperation(createPost, {input: newPost}),
      );
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={description}
        onChangeText={setDescription}
        numberOfLines={5}
        placeholder="Description"
        style={styles.textInput}
      />
      <TouchableOpacity style={styles.button} onPress={onPublish}>
        <Text style={styles.buttonText}>Publish</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreatePost;
