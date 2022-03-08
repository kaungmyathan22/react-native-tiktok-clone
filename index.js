/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import awsconfig from './src/aws-exports';
import Amplify from 'aws-amplify';
Amplify.configure(awsconfig);

AppRegistry.registerComponent(appName, () => App);
