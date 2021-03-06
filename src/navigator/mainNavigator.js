import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile43195Navigator from '../features/UserProfile43195/navigator';
import Tutorial43194Navigator from '../features/Tutorial43194/navigator';
import NotificationList43166Navigator from '../features/NotificationList43166/navigator';
import Settings43165Navigator from '../features/Settings43165/navigator';
import Settings43157Navigator from '../features/Settings43157/navigator';
import UserProfile43155Navigator from '../features/UserProfile43155/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile43195: { screen: UserProfile43195Navigator },
Tutorial43194: { screen: Tutorial43194Navigator },
NotificationList43166: { screen: NotificationList43166Navigator },
Settings43165: { screen: Settings43165Navigator },
Settings43157: { screen: Settings43157Navigator },
UserProfile43155: { screen: UserProfile43155Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
