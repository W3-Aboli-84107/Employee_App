import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
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
    </Stack.Navigator>
  );
}


// // AppNavigator.js
// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


// // Auth Screens
// import WelcomeScreen from '../screens/auth/welcomeScreens';
// import LoginScreen from '../screens/auth/loginScreens';
// import SignupScreen from '../screens/auth/signupscreen';

// // Stacks
// import AdminStack from './AdminStack';
// import SuperAdminStack from './SuperAdminStack';

// // Admin and SuperAdmin Dashboard Screens
// import AdminDashboardScreen from '../screens/Admin/AdminDashboard';
// import SuperAdminDashboardScreen from '../screens/SuperAdmin/SuperAdminDashboard';

// // Common Screens
// import DashboardScreen from '../screens/common/DashboardScreen';
// import VisitorFormScreen from '../screens/common/VisitorFormScreen';
// import VisitorDetailsScreen from '../screens/common/VisitorDetailsScreen';

// const Stack = createNativeStackNavigator();

// export default function AppNavigator() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
//       {/* Authentication Flow */}
//       <Stack.Screen name="Welcome" component={WelcomeScreen} />
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="SignUp" component={SignupScreen} />

//       {/* Role-based Navigation Stacks */}
//       <Stack.Screen name="AdminStack" component={AdminStack} />
//       <Stack.Screen name="SuperAdminStack" component={SuperAdminStack} />

//       {/* Dashboard Screens (can be accessed directly or via stacks) */}
//       <Stack.Screen name="AdminDashboard" component={AdminDashboardScreen} />
//       <Stack.Screen name="SuperAdminDashboard" component={SuperAdminDashboardScreen} />

//       {/* Shared Screens */}
//       <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
//       <Stack.Screen name="VisitorForm" component={VisitorFormScreen} />
//       <Stack.Screen name="VisitorDetails" component={VisitorDetailsScreen} />
//     </Stack.Navigator>
//   );
// }


// // navigation/AppNavigator.js
// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // Auth Screens
// import WelcomeScreen from '../screens/auth/welcomeScreens';
// import LoginScreen from '../screens/auth/loginScreens';
// import SignupScreen from '../screens/auth/signupscreen';

// // Admin & SuperAdmin Stacks
// import AdminStack from './AdminStack';
// import SuperAdminStack from './SuperAdminStack';

// // Admin & SuperAdmin Dashboards
// import AdminDashboardScreen from '../screens/Admin/AdminDashboard';
// import SuperAdminDashboardScreen from '../screens/SuperAdmin/SuperAdminDashboard';

// // Shared/Common Screens
// import DashboardScreen from '../screens/common/DashboardScreen';
// import VisitorFormScreen from '../screens/common/VisitorFormScreen';
// import VisitorDetailsScreen from '../screens/common/VisitorDetailsScreen';

// const Stack = createNativeStackNavigator();

// export default function AppNavigator() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
      
//       {/* Auth Screens */}
//       <Stack.Screen name="Welcome" component={WelcomeScreen} />
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="SignUp" component={SignupScreen} />

//       {/* Role-Based Navigation */}
//       <Stack.Screen name="AdminStack" component={AdminStack} />
//       <Stack.Screen name="SuperAdminStack" component={SuperAdminStack} />

//       {/* Optional: Direct Dashboard Access */}
//       <Stack.Screen name="AdminDashboard" component={AdminDashboardScreen} />
//       <Stack.Screen name="SuperAdminDashboard" component={SuperAdminDashboardScreen} />

//       {/* Common Screens */}
//       <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
//       <Stack.Screen name="VisitorForm" component={VisitorFormScreen} />
//       <Stack.Screen name="VisitorDetails" component={VisitorDetailsScreen} />
//     </Stack.Navigator>
//   );
// }


// // navigation/AppNavigator.js
// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// // Auth Screens
// import WelcomeScreen from '../screens/auth/WelcomeScreen';
// import LoginScreen from '../screens/auth/LoginScreen';
// import SignupScreen from '../screens/auth/SignupScreen';

// // Admin & SuperAdmin Stack Navigators
// import AdminStack from './AdminStack';
// import SuperAdminStack from './SuperAdminStack';

// // Dashboard Screens (Optional direct access)
// import AdminDashboardScreen from '../screens/Admin/AdminDashboard';
// import SuperAdminDashboardScreen from '../screens/SuperAdmin/SuperAdminDashboard';

// // Shared/Common Screens
// import DashboardScreen from '../screens/common/DashboardScreen';
// import VisitorFormScreen from '../screens/common/VisitorFormScreen';
// import VisitorDetailsScreen from '../screens/common/VisitorDetailsScreen';

// // Create the Stack
// const Stack = createNativeStackNavigator();

// export default function AppNavigator() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
      
//       {/* Authentication Flow */}
//       <Stack.Screen name="Welcome" component={WelcomeScreen} />
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="SignUp" component={SignupScreen} />

//       {/* Role-Based Navigation */}
//       <Stack.Screen name="AdminStack" component={AdminStack} />
//       <Stack.Screen name="SuperAdminStack" component={SuperAdminStack} />

//       {/* Optional direct dashboard access */}
//       <Stack.Screen name="AdminDashboard" component={AdminDashboardScreen} />
//       <Stack.Screen name="SuperAdminDashboard" component={SuperAdminDashboardScreen} />

//       {/* Shared Screens */}
//       <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
//       <Stack.Screen name="VisitorForm" component={VisitorFormScreen} />
//       <Stack.Screen name="VisitorDetails" component={VisitorDetailsScreen} />
//     </Stack.Navigator>
//   );
// }
