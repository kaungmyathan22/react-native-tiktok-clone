import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Post = ({post}) => {
  const [pause, setPause] = useState(false);

  const onPlayPausePress = () => {
    setPause(!pause);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <Video
          style={styles.video}
          resizeMode="cover"
          onError={error => console.log(error)}
          source={{
            uri: post.videoUri,
          }}
          repeat={true}
          paused={pause}
        />
      </TouchableWithoutFeedback>
      <View style={styles.uiContainer}>
        <View style={styles.rightContainer}>
          <View style={styles.profilePictureContainer}>
            <Image
              style={styles.profilePicture}
              source={{
                uri: post.user.imageUri,
              }}
            />
          </View>
          <View style={styles.iconContainer}>
            <AntDesign name="heart" size={30} color="white" />
            <Text style={styles.statusLabel}>{post.likes}</Text>
          </View>
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
              <Text style={styles.songName}>{post.songName}</Text>
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
