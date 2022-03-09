import {
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Video from 'react-native-video';
import styles from './styles';
import {Storage} from 'aws-amplify';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Post = props => {
  const [post, setPost] = useState(props.post);
  const [pause, setPause] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [videoUri, setVideoUri] = useState('');

  const onPlayPausePress = () => {
    setPause(!pause);
  };

  const onLikePress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setPost({
      ...post,
      likes: post.likes + likesToAdd,
    });
    setIsLiked(!isLiked);
  };

  const getVideoUri = async () => {
    if (post.videoUri.startsWith('http')) {
      setVideoUri(post.videoUri);
      return;
    }
    setVideoUri(await Storage.get(post.videoUri));
  };

  useEffect(() => {
    getVideoUri();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <Video
          style={styles.video}
          resizeMode="cover"
          onError={error => console.log(error)}
          source={{
            uri: videoUri,
          }}
          repeat={true}
          paused={pause}
        />
      </TouchableWithoutFeedback>
      <View style={styles.uiContainer}>
        <View style={styles.rightContainer}>
          <Image
            style={styles.profilePicture}
            source={{
              uri: post.user.imageUri,
            }}
          />
          <TouchableOpacity style={styles.iconContainer} onPress={onLikePress}>
            <AntDesign
              name="heart"
              size={30}
              color={isLiked ? 'white' : 'red'}
            />
            <Text style={styles.statusLabel}>{post.likes}</Text>
          </TouchableOpacity>
          <View style={styles.iconContainer}>
            <FontAwesome name="commenting" size={30} color="white" />
            <Text style={styles.statusLabel}>{post.comments}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Fontisto name="share-a" size={30} color="white" />
            <Text style={styles.statusLabel}>{post.shares}</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View>
            <Text style={styles.handle}>@{post.user.username}</Text>
            <Text style={styles.description}>{post.description}</Text>
            <View style={styles.songRow}>
              <Entypo name="beamed-note" size={24} color="white" />
              <Text style={styles.songName}>{post.song.name}</Text>
            </View>
          </View>
          <Image
            style={styles.songImage}
            source={{
              uri: post.songImage,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Post;
