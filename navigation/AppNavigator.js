import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import welcomeScreens from '../screens/auth/welcomeScreens';
import loginScreens from '../screens/auth/loginScreens';
import signupscreen from '../screens/auth/signupscreen';
import AdminStack from '../navigation/AdminStack'
import SuperAdminStack from '../navigation/SuperAdminStack';
import AdminDashboardScreen from '../screens/Admin/AdminDashboard';
import SuperAdminDashboardScreen from '../screens/SuperAdmin/SuperAdminDashboard';
import DashboardScreen from '../screens/common/DashboardScreen';
import VisitorFormScreen from '../components/VisiterCard';

const Stack = createNativeStackNavigator(); 

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={welcomeScreens} />
      <Stack.Screen name="Login" component={loginScreens} />
      <Stack.Screen name="SignUp" component={signupscreen} />
      <Stack.Screen name="AdminStack" component={AdminStack} />
      <Stack.Screen name="SuperAdminStack" component={SuperAdminStack} />
      <Stack.Screen name="AdminDashboard" component={AdminDashboardScreen} />
  <Stack.Screen name="SuperAdminDashboard" component={SuperAdminDashboardScreen} />
  <Stack.Screen name='DashboardScreen' component={DashboardScreen}/>
  <Stack.Screen name='VisitorFormScreen' component={VisitorFormScreen}/>
    </Stack.Navigator>
  );
}
