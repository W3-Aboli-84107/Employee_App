// // navigation/SuperAdminStack.js
// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SuperAdminDashboard from '../screens/SuperAdmin/SuperAdminDashboard';

// const Stack = createNativeStackNavigator();

// export default function SuperAdminStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="SuperAdminDashboard" component={SuperAdminDashboard} />
//     </Stack.Navigator>
//   );
// }
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SuperAdminDashboard from '../screens/SuperAdmin/SuperAdminDashboard';

const Stack = createNativeStackNavigator();

export default function SuperAdminStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SuperAdminDashboard" component={SuperAdminDashboard} />
    </Stack.Navigator>
  );
}