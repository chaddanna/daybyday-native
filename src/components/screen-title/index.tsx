import React, { FC } from "react";
import { Text } from "react-native";
import { styles } from "./index-styles";

type ScreenTitleProps = {
  children: string;
};

export const ScreenTitle: FC<ScreenTitleProps> = ({ children }) => (
  <Text style={styles.title}>{children}</Text>
);
