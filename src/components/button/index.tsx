import React, { FC } from "react";
import { TouchableOpacity, GestureResponderEvent, Text } from "react-native";
import { styles } from "./index-styles";

type ButtonProps = {
  children: string;
  onPress: (event: GestureResponderEvent) => void;
};

export const Button: FC<ButtonProps> = ({ children, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};
