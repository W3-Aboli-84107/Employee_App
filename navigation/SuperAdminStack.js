import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SuperAdminProfileScreen from '../screens/SuperAdmin/SuperAdminProfileScreen';
import SuperAdminDashboardScreen from '../screens/SuperAdmin/SuperAdminDashboardScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="SuperAdminDashboard">
      <Stack.Screen name="SuperAdminDashboard" component={SuperAdminDashboardScreen} />
      <Stack.Screen name="SuperAdminProfile" component={SuperAdminProfileScreen} />
    </Stack.Navigator>
  );
}
