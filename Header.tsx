import React from "react";
import { StyleSheet, Text, View } from "react-native";

type HeaderProps = {
  title: string;
};

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",

    fontSize: 18,

    marginBottom: 8,
  },
});
