import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";

const initialState = {
  list: [
    {
      id: uuid.v4(),
      title: "insync Interview",
      isComplete: true,
    },
    {
      id: uuid.v4(),
      title: "insync Assessment",
      isComplete: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToList: (state, action) => {
      state.list.unshift({ id: uuid.v4(), title: action.payload.task });
    },
    deleteFromIndividualList: (state, action) => {
      state.list = [...state.list.filter((list) => list.id !== action.payload)];
    },
    editList: (state, action) => {
      // state.list.map((item) => {
      //   if (item.id === action.payload) {
      //     const updateItem = { ...item, isComplete: !item.isComplete };
      //     // return updateItem;
      //     state.list = updateItem;
      //   }
      //   return state;
      // });
      state.list.concat({ id: uuid.v4(), title: action.payload.task });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToList,
  deleteFromIndividualList,
  incrementByAmount,
  editList,
} = todoSlice.actions;

export default todoSlice.reducer;
