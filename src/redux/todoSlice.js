import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  list: [
    {
      id: uuidv4(),
      title: "insync Interview",
    },
    {
      id: uuidv4(),
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
        { id: uuidv4(), title: action.payload.task },
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
