import { AppRegistry } from 'react-native';
import App from './App';
import Login from './Login/Login'
import Waiting from './Login/Waiting'
import ViewCompent from './Login/ViewCompent'
import AndroidButton from './Login/AndroidButton'
import ListCompent from './Login/ListCompent'

AppRegistry.registerComponent('FirstReactNative', () => App);
AppRegistry.registerComponent('Login', () => Login);
AppRegistry.registerComponent('Login', () => Waiting);
AppRegistry.registerComponent('Login', () => ViewCompent);
AppRegistry.registerComponent('Login', () => AndroidButton);
AppRegistry.registerComponent('Login', () => ListCompent);