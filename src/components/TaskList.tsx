import React from "react";
import {
  FlatList,
  Image,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatListProps,
  Alert,
} from "react-native";
import { ItemWrapper } from "./ItemWrapper";
import Icon from "react-native-vector-icons/Feather";

import trashIcon from "../assets/trash/trash.png";

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface TaskListProps {
  tasks: Task[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
}

export const TaskList = ({
  tasks,
  toggleTaskDone,
  removeTask,
}: TaskListProps) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={{ paddingBottom: 24 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <ItemWrapper index={index}>
            <View style={styles.content}>
              <TouchableOpacity
                testID={`button-${index}`}
                activeOpacity={0.7}
                style={styles.taskButton}
                onPress={() => toggleTaskDone(item.id)}
              >
                <View testID={`marker-${index}`} style={styles.taskMarker}>
                  {item.done ? (
                    <Icon name="check-square" size={20} color="#1DB863" />
                  ) : (
                    <Icon name="square" size={20} color="#666" />
                  )}
                </View>

                <Text style={item.done ? styles.taskTextDone : styles.taskText}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              testID={`trash-${index}`}
              style={{ paddingHorizontal: 24 }}
              onPress={() =>
                Alert.alert(
                  "Delete task",
                  "Are you sure you want to delete this task?",
                  [
                    {
                      text: "Cancel",
                      style: "cancel",
                    },
                    {
                      text: "Delete",
                      onPress: () => removeTask(item.id),
                    },
                  ],
                  { cancelable: false }
                )
              }
            >
              <Icon
                name="trash-2"
                size={20}
                color={item.done ? "#b46c6c" : "#b2b2b2"}
              />
            </TouchableOpacity>
          </ItemWrapper>
        );
      }}
      style={{
        marginTop: 32,
      }}
    />
  );
};

const styles = StyleSheet.create({
  taskButton: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  content: {},
  taskMarker: {},
  taskText: {
    fontSize: 20,
    marginLeft: 8,
    color: "#666666",
  },
  taskTextDone: {
    fontSize: 20,
    marginLeft: 8,
    textDecorationLine: "line-through",
    color: "#1DB863",
  },
});
