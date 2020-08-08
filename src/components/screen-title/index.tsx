import React, { FC } from "react";
import { Text } from "react-native";
import { styles } from "./index-styles";

export const ScreenTitle: FC = ({ children }) => (
  <Text style={styles.title}>{children}</Text>
);
