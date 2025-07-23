import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SuperAdminProfileScreen from '../screens/SuperAdmin/SuperAdminProfileScreen';
import SuperAdminDashboardScreen from '../screens/SuperAdmin/SuperAdminDashboardScreen';
import SuperAdminHistoryScreen from '../screens/SuperAdmin/SuperAdminHistoryScreen';

import FilterScreen from '../screens/SuperAdmin/FilterScreen';
import DownloadScreen from '../screens/SuperAdmin/DownloadScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="SuperAdminDashboard">
      <Stack.Screen name="SuperAdminDashboard" component={SuperAdminDashboardScreen} />
      <Stack.Screen name="SuperAdminProfile" component={SuperAdminProfileScreen} />
      <Stack.Screen name="SuperAdminHistoryScreen" component={SuperAdminHistoryScreen} />
      <Stack.Screen name="FilterScreen" component={FilterScreen} />
      <Stack.Screen name="DownloadScreen" component={DownloadScreen}/>
      
 <Stack.Screen
    name="SuperAdminHistoryScreen"
    component={SuperAdminHistoryScreen}
    options={{ headerShown: false }}
  />
    </Stack.Navigator>
  );
}
