import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/common/SplashScreen';

import welcomeScreens from '../screens/auth/welcomeScreens';
import loginScreens from '../screens/auth/loginScreens';
import signupscreen from '../screens/auth/signupscreen';
import AdminStack from './AdminStack';
import SuperAdminStack from './SuperAdminStack';
import AdminDashboardScreen from '../screens/Admin/AdminDashboard';
import SuperAdminDashboardScreen from '../screens/SuperAdmin/SuperAdminDashboard';
import DashboardScreen from '../screens/common/DashboardScreen';
import VisitorFormScreen from '../screens/common/VisitorFormScreen';
import VisitorDetailsScreen from '../screens/common/VisitorDetailsScreen';
import ProfileScreen from '../screens/Admin/ProfileScreen';



const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Welcome" component={welcomeScreens} />
      <Stack.Screen name="Login" component={loginScreens} />
      <Stack.Screen name="SignUp" component={signupscreen} />
      <Stack.Screen name="AdminStack" component={AdminStack} />
      <Stack.Screen name="SuperAdminStack" component={SuperAdminStack} />
      <Stack.Screen name="AdminDashboard" component={AdminDashboardScreen} />
      <Stack.Screen name="SuperAdminDashboard" component={SuperAdminDashboardScreen} />
      <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
      <Stack.Screen name="VisitorForm" component={VisitorFormScreen} />
      <Stack.Screen name="VisitorDetails" component={VisitorDetailsScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
      
    </Stack.Navigator>
  );
}