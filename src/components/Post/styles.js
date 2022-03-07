import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height - 24,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  uiContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  bottomContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  handle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  description: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '100',
    marginBottom: 10,
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '300',
    marginLeft: 5,
  },
  // side container
  rightContainer: {
    alignSelf: 'flex-end',
    height: 250,
    justifyContent: 'space-between',
    marginRight: 5,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  iconContainer: {
    alignItems: 'center',
  },
  statusLabel: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 14,
    marginTop: 5,
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#4c4c4c',
  },
});

export default styles;
