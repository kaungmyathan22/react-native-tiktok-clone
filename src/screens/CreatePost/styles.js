import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textInput: {
    margin: 10,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#ff4747',
    alignItems: 'center',
    margin: 10,
    padding: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
