import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromIndividualList, editList } from "../redux/todoSlice";
import Ionicons from "@expo/vector-icons/Ionicons";

const List = () => {
  const [isEditing, setEditing] = useState(false);
  const [state, setState] = useState({
    id: "",
    title: "",
    titleError: null,
  });
  const data = useSelector((state) => state.todo.list);
  console.log(data);
  const dispatch = useDispatch();

  const handleEditToggle = (id, title) => {
    setEditing(true);
    setState({ ...state, id, title });
  };

  const { content, contentError, id } = state;
  const edit = () => {
    if (content === "") {
      setState({ ...state, contentError: "You must write something!" });
      return;
    }
    dispatch(editTodo({ content, id }));
    setEditing(false);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.todo}>
        <Text style={styles.todoText}>{item.title}</Text>
        <View style={styles.todo}>
          <TouchableOpacity
            onPress={() => handleEditToggle(item.id, item.title)}
            style={{ marginRight: 7 }}
          >
            <Ionicons name="create" size={32} color="green" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => dispatch(deleteFromIndividualList(item.id))}
          >
            <Ionicons name="trash" size={32} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <Text style={styles.listText}>Todos</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
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
});

export default List;
