import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import logoImg from "../assets/logo/logo.png";

interface HeaderProps {
  tasksCounter: number;
}

export const Header = ({ tasksCounter }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Image source={logoImg} />

      <View style={styles.tasks}>
        <Text style={styles.tasksCounter}>Você tem </Text>
        <Text style={styles.tasksCounterBold}>{tasksCounter} tarefas</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 56,
    paddingHorizontal: 24,
    paddingBottom: 60,
    backgroundColor: "#8257E5",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  tasks: {
    alignItems: "center",
    flexDirection: "row",
  },
  tasksCounter: {
    fontSize: 15,
    color: "#fff",
    fontFamily: "Inter-Regular",
  },
  tasksCounterBold: {
    fontSize: 15,
    color: "#fff",
    fontFamily: "Inter-Bold",
  },
});
