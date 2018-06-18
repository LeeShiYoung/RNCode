import { AppRegistry } from 'react-native';
import App from './App';
import Login from './Login/Login'
import Waiting from './Login/Waiting'

AppRegistry.registerComponent('FirstReactNative', () => App);
AppRegistry.registerComponent('Login', () => Login);
AppRegistry.registerComponent('Login', () => Waiting);