import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import {store} from "./src/redux/store"
import TodoApp from "./src/components/todoApp";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TodoApp />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#374151",
    paddingHorizontal: 25,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
