import {AppRegistry, LogBox} from 'react-native';
import App from './application/App';
import {name as appName} from './app.json';

LogBox.ignoreLogs([
  "EventEmitter.removeListener('change', ...): Method has been deprecated. Please instead use `remove()` on the subscription returned by `EventEmitter.addListener`.",
]);

AppRegistry.registerComponent(appName, () => App);
