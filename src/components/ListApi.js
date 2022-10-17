import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Alert,
  FlatList,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { useSelector, useDispatch } from "react-redux";

const ListApi = ({ toggle, setToggle, handleDelete }) => {
  const dispatch = useDispatch();

  const renderItem = ({ item }) => {
    return (
      <View style={styles.todo}>
        <Text style={styles.todoText}>{item.title.slice(0, 20)} ...</Text>
        <View style={styles.todo}>
          <TouchableOpacity
            // onPress={() => handleEdit(id)}
            style={{ marginRight: 7 }}
          >
            <Ionicons name="create" size={32} color="green" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(item.id)}>
            <Ionicons name="trash" size={32} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <FlatList
        data={toggle.slice(0, 20)}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    marginBottom: 20,
  },
  todoText: {
    color: "#FFFFFF",
    fontSize: 17,
  },
});

export default ListApi;
