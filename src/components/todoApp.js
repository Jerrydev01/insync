import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
} from "react-native";
import List from "./List";
import { addToList } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const handleSubmitTasks = () => {
    if (task.trim().length === 0) {
      Alert.alert("You need to enter a task");
      setTask("");
      return;
    }
    dispatch(
      addToList({
        task,
      })
    );
    setTask("");
  };

  return (
    <View>
      <Text style={styles.header}>Todo List</Text>
      <TextInput
        placeholder="what do you have planned?"
        style={styles.textInput}
        onChangeText={setTask}
        value={task}
        maxLength={30}
      />
      <TouchableOpacity style={styles.btn_primary} onPress={handleSubmitTasks}>
        <Text style={styles.btn_text}>ADD TASK</Text>
      </TouchableOpacity>

      {/* todo section */}
      <List todo={task} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    color: "gray",
    marginTop: 45,
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    width: "100%",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#a2a8a3",
    marginBottom: 15,
  },
  btn_primary: {
    backgroundColor: "#b32f0e",
    padding: 10,
    marginBottom: 50,
  },
  btn_text: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default TodoApp;
