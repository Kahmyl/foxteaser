import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/HomeScreen";
import Option from "../screens/OptionsScreen";
import Quiz from "../screens/QuizScreen";
import { RootStackParamList } from "../types";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();
function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Option"
        component={Option}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}