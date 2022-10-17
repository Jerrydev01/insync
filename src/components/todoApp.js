import React, { useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import ListApi from "./ListApi";

const TodoApp = () => {
  const data = useSelector((state) => state.todo.list);
  const [task, setTask] = useState("");
  const [toggle, setToggle] = useState([]);
  const [isShow, setIsShow] = useState(false);

  const dispatch = useDispatch();

  const handleShow = () => {
    if (isShow) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  };

  // https://jsonplaceholder.typicode.com/todos

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/todos`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setToggle(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  function handleDelete(id) {
    const newList = toggle.filter((item) => item.id !== id);
    setToggle(newList);
  }

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
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      <>
        <TextInput
          placeholder="what do you have planned?"
          style={styles.textInput}
          onChangeText={(text) => setTask(text)}
          value={task}
          maxLength={25}
        />
        <TouchableOpacity
          style={styles.btn_primary}
          onPress={handleSubmitTasks}
        >
          <Text style={styles.btn_text}>ADD TASK</Text>
        </TouchableOpacity>
      </>

      {isShow ? (
        <TouchableOpacity style={styles.btn_API} onPress={handleShow}>
          <Text style={styles.btn_text}>Switch to API</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.btn_API} onPress={handleShow}>
          <Text style={styles.btn_text}>Switch to Mock Data</Text>
        </TouchableOpacity>
      )}
      {/* todo section */}
      {isShow ? (
        <List task={task} />
      ) : (
        <>
          <List task={task} />
          <ListApi
            toggle={toggle}
            setToggle={setToggle}
            handleDelete={handleDelete}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#374151",
    paddingHorizontal: 25,
    // alignItems: "center",
    // justifyContent: "center",
  },
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
    marginBottom: 20,
  },
  btn_API: {
    backgroundColor: "#d4ab08",
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
