import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import welcomeScreens from '../screens/auth/welcomeScreens';
import loginScreens from '../screens/auth/loginScreens';
import signupscreen from '../screens/auth/signupscreen';
import AdminStack from './AdminStack';
import SuperAdminStack from './SuperAdminStack';
import AdminDashboardScreen from '../screens/Admin/AdminDashboard';
import SuperAdminDashboardScreen from '../screens/SuperAdmin/SuperAdminDashboardScreen';
import DashboardScreen from '../screens/common/DashboardScreen';
import VisitorFormScreen from '../screens/common/VisitorFormScreen';
// import HistoryScreen from '../screens/common/HistoryScreen';
import ForgotPasswordScreen from '../screens/common/ForgotPasswordScreen';
import OTPScreen from '../screens/common/OTPScreen';
import OtpSuccessfulScreen from '../screens/common/OtpSuccessfulScreen';
import NewPasswordScreen from '../screens/common/NewPasswordScreen';
import OtpUnsuccessfulScreen from '../screens/common/OtpUnsuccessfulScreen';
import VisitorDetailsScreen from '../screens/common/VisitorDetailsScreen';
import ProfileScreen from '../screens/Admin/ProfileScreen';
import EditVisitorScreen from '../screens/common/EditVisitorDetailsScreen';
import ResetPasswordScreen from '../screens/common/ResetPasswordScreen';
import EditProfileScreen from '../screens/Admin/EditProfileScreen';
import SplashScreen from '../screens/common/SplashScreen';
import SuperAdminProfileScreen from '../screens/SuperAdmin/SuperAdminProfileScreen';
import AdminHistoryScreen from '../screens/Admin/AdminHistoryScreen';
import SuperAdminHistoryScreen from '../screens/SuperAdmin/SuperAdminHistoryScreen';
import FilterScreen from '../screens/SuperAdmin/FilterScreen';
import DownloadScreen from '../screens/SuperAdmin/DownloadScreen';


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
      <Stack.Screen name="SuperAdminProfileScreen" component={SuperAdminProfileScreen} />
      <Stack.Screen name="SuperAdminHistoryScreen" component={SuperAdminHistoryScreen}/>
      <Stack.Screen name="AdminHistoryScreen" component={AdminHistoryScreen}/>
      <Stack.Screen name="FilterScreen" component={FilterScreen} />
      <Stack.Screen name="DownloadScreen" component={DownloadScreen} />
      
      <Stack.Screen
        name="VisitorForm"
        component={VisitorFormScreen}
        options={{ title: 'Visitor Details' }}
      />

      <Stack.Screen
        name="VisitorDetails"
        component={VisitorDetailsScreen}
        options={{ title: 'Visitor Info' }}
      />
      {/* <Stack.Screen name="History" component={HistoryScreen} /> */}
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="OTPScreen" component={OTPScreen} />
      <Stack.Screen name="OtpSuccess" component={OtpSuccessfulScreen} />
      <Stack.Screen name="OtpUnsuccess" component={OtpUnsuccessfulScreen} />
      <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
      <Stack.Screen name="AdminProfile" component={ProfileScreen} />
      <Stack.Screen name="EditVisitorScreen" component={EditVisitorScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="HistoryScreen" component={SuperAdminHistoryScreen} /> 
       
        </Stack.Navigator>
  );
}
