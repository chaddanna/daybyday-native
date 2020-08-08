import "react-native-gesture-handler";
import React, { FC } from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "./styles";
import { Todos } from "./modules/todos";
import { StandUp } from "./modules/stand-up";
import { Logs } from "./modules/logs";

const Tab = createBottomTabNavigator();

enum Routes {
  StandUp = "StandUp",
  Todos = "Todos",
  Logs = "Logs",
}

type Route = {
  name: Routes;
  component: FC;
  options?: {};
};

type Icons = {
  [key: string]: string;
};

const icons: Icons = {
  [Routes.Todos]: "ios-checkbox-outline",
  [Routes.Logs]: "ios-list",
  [Routes.StandUp]: "ios-people",
};

const routes: Route[] = [
  { name: Routes.StandUp, component: StandUp, options: { tabBarBadge: 3 } },
  { name: Routes.Todos, component: Todos },
  { name: Routes.Logs, component: Logs },
];

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={Routes.Todos}
        tabBarOptions={{
          activeTintColor: colors.primary,
          inactiveTintColor: colors.white,
          style: {
            backgroundColor: colors.base,
            paddingVertical: 10,
          },
        }}
        screenOptions={({ route: { name } }) => ({
          tabBarIcon: (styles) => <Ionicons name={icons[name]} {...styles} />,
        })}
      >
        {routes.map((r) => (
          <Tab.Screen key={r.name} {...r} />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
