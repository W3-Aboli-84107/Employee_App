import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import DashboardScreen from '../screens/DashboardScreen';
// import VisitorFormScreen from '../screens/VisitorFormScreen';

// const Stack = createStackNavigator();

// export default function AppNavigator() {
//   return (
//     <Stack.Navigator initialRouteName="Dashboard">
//       <Stack.Screen
//         name="Dashboard"
//         component={DashboardScreen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="VisitorForm"
//         component={VisitorFormScreen}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// }


// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import DashboardScreen from '../screens/DashboardScreen';
// import VisitorFormScreen from '../screens/VisitorFormScreen';

// const Stack = createNativeStackNavigator();

// export default function AppNavigator() {
//   return (
//     <Stack.Navigator initialRouteName="Dashboard">
//       <Stack.Screen
//         name="Dashboard"
//         component={DashboardScreen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="VisitorForm"
//         component={VisitorFormScreen}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// }
