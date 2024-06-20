import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from '../Screens/SplashScreen';
import LoginScreen from '../Screens/LoginScreen';
import DashboardScreen from '../Screens/DashboardScreen';
import HistoryScreen from '../Screens/HistoryScreen';
import AlertsScreen from '../Screens/AlertsScreen';
import SettingsScreen from '../Screens/SettingsScreen';

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