import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";

const initialState = {
  list: [
    {
      id: uuid.v4(),
      title: "insync Interview",
    },
    {
      id: uuid.v4(),
      title: "insync Assessment",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToList: (state, action) => {
      state.list = [
        ...state.list,
        { id: uuid.v4(), title: action.payload.task },
      ];
    },
    deleteFromIndividualList: (state, action) => {
      state.list = [...state.list.filter((list) => list.id !== action.payload)];
    },
    editList: (state, action) => {
      state.list = list.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
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
