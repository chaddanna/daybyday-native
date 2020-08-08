import React, { FC } from "react";
import { View } from "react-native";
import { styles } from "./index-styles";

export const Container: FC = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};
