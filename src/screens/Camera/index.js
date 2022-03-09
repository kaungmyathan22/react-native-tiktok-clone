import {TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {RNCamera} from 'react-native-camera';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';

const Camera = () => {
  const [isRecording, setIsRecording] = useState(false);
  const camera = useRef();
  const navigation = useNavigation();
  const onRecord = async () => {
    if (isRecording) {
      camera.current.stopRecording();
    } else {
      const data = await camera.current.recordAsync();
      console.log(data);
      navigation.navigate('CreatePost', {videoUri: data.uri});
    }
  };
  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        ref={camera}
        onRecordingStart={() => setIsRecording(true)}
        onRecordingEnd={() => setIsRecording(false)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={isRecording ? styles.buttonStop : styles.buttonRecord}
          onPress={onRecord}
        />
      </View>
    </View>
  );
};

export default Camera;
