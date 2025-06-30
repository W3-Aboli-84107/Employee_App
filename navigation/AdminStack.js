// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AdminDashboard from '../screens/Admin/AdminDashboard';

// const Stack = createNativeStackNavigator();

// export default function AdminStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
//     </Stack.Navigator>
//   );
// }

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminDashboard from '../screens/Admin/AdminDashboard';
import VisitorFormScreen from '../screens/common/VisitorFormScreen';
import VisitorDetailsScreen from '../screens/common/VisitorFormScreen';


const Stack = createNativeStackNavigator();

export default function AdminStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
      <Stack.Screen name="VisitorForm" component={VisitorFormScreen} />
      <Stack.Screen name="VisitorDetails" component={VisitorDetailsScreen} />
      <Stack.Screen name="VisitorList" component={VisitorListScreen} />
    </Stack.Navigator>
  );
}
