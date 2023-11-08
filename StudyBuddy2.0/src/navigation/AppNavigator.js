// In src/navigation/AppNavigator.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import HomePage from '../screens/HomePage';
import BottomTabNavigator from './BottomTabNavigator';
import MessageDetailScreen from '../screens/MessageDetailScreen';
// ... other imports

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
    <Stack.Screen
  name="MessageDetail"
  component={MessageDetailScreen}
  options={({ route }) => ({ title: route.params.name })}
/>
    {/* ... other screens */}
  </Stack.Navigator>
  
);

export default AppNavigator;


