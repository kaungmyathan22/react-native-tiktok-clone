import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'balck',
  },
  preview: {
    flex: 1,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  buttonRecord: {
    height: 50,
    width: 50,
    marginVertical: 10,
    backgroundColor: 'red',
    borderRadius: 25,
    alignSelf: 'center',
  },
  buttonStop: {
    height: 30,
    width: 30,
    marginVertical: 10,
    backgroundColor: 'red',
    borderRadius: 3,
    alignSelf: 'center',
  },
  buttonContainer: {
    backgroundColor: 'black',
  },
});
