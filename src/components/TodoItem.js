import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Alert,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { deleteFromIndividualList, editList } from "../redux/todoSlice";
import { useSelector, useDispatch } from "react-redux";

const TodoItem = (props) => {
  const [isEdit, setEdit] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editList({ text: text }));
  };
  return (
    <>
      <View style={styles.todo}>
        {isEdit ? (
          <TextInput
            placeholder="what do you have planned?"
            style={styles.textInput}
            onChangeText={(text) => setText(text)}
            value={text}
            maxLength={25}
          />
        ) : (
          <Text style={styles.todoText}>{props.title}</Text>
        )}

        <View style={styles.todo}>
          {isEdit ? (
            <TouchableOpacity style={{ marginRight: 7 }}>
              <Ionicons name="save" size={32} color="green" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => setEdit(true)}
              style={{ marginRight: 7 }}
            >
              <Ionicons name="create" size={32} color="green" />
            </TouchableOpacity>
          )}

          <TouchableOpacity
            onPress={() => dispatch(deleteFromIndividualList(props.id))}
          >
            <Ionicons name="trash" size={32} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </>
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

export default TodoItem;
