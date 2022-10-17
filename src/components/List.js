import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Alert,
  FlatList,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import TodoItem from "./TodoItem";

import axios from "axios";

const List = () => {
  const data = useSelector((state) => state.todo.list);
  const [todos, setTodos] = useState(data);

  const handleEditing = (id) => {
    if (isEditing) {
      setEditing(false);
      setText("");
    } else {
      setEditing(true);
    }
  };

  const handleEdit = (todoKey, newText) => {
    const newTodos = [...todos];
    console.log(newTodos);
    const index = newTodos.findIndex((todos) => todos.id === todoKey);
    newTodos[index] = Object.assign(newTodos[index], { title: newText });

    console.log("fgjfgfjhfgkygu:", newTodos);
  };

  return (
    <SafeAreaView>
      <Text style={styles.listText}>Todos</Text>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={data}
        renderItem={({ item }) => (
          <TodoItem
            id={item.id}
            todoKey={item.id}
            title={item.title}
            editHandler={handleEdit}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listText: {
    fontSize: 24,
    color: "gray",
    marginBottom: 10,
  },
  todo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10,
    alignItems: "center",
    backgroundColor: "#101827",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  todoText: {
    color: "#FFFFFF",
    fontSize: 17,
  },
  textInput: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#a2a8a3",
  },
});

export default List;
