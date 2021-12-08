import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

interface TodoInputProps {
  addTask: (task: string) => void;
}

export const TodoInput = ({ addTask }: TodoInputProps) => {
  const [text, setText] = React.useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="What needs to be done?"
        placeholderTextColor="#B2B2B2"
        value={text}
        returnKeyType="send"
        onChangeText={(text) => setText(text)}
        selectionColor="#666666"
        onSubmitEditing={() => {
          addTask(text);
          setText("");
        }}
      />

      <TouchableOpacity
        style={styles.addButton}
        activeOpacity={0.75}
        testID="add-button"
        onPress={() => {
          addTask(text);
          setText("");
        }}
      >
        <Icon name="chevron-right" size={24} color="#b2b2b2" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 5,
    marginTop: -28,
    marginHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 56,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderRightWidth: 1,
    borderRightColor: "#ebebeb",
    color: "#666666",
  },
  addButton: {
    backgroundColor: "#FFF",
    height: 56,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
