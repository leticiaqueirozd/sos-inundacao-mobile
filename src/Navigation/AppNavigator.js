import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from '../Screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import HistoryScreen from '../screens/HistoryScreen';
import AlertsScreen from '../screens/AlertsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const AppNavigator = createStackNavigator(
  {
    Splash: SplashScreen,
    Login: LoginScreen,
    Dashboard: DashboardScreen,
    History: HistoryScreen,
    Alerts: AlertsScreen,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: 'Welcome',
  }
);

export default createAppContainer(AppNavigator);