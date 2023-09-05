import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    // removeTodo: (state, action) => {
    //   state.todos = state.todos.filter((item) => item.id !== action.payload);
    // },

    addCard: (state, action) => {
      state.todos.forEach((item) => {
        if (item.id === action.payload.parentId) {
          if (Object.hasOwn(item, "children")) {
            item.children.push(action.payload);
          } else {
            item.children = [];
            item.children.push(action.payload);
          }
        }
      });
      console.log(action);
    },
  },
});

export const { addTodo, removeTodo, addCard } = todoSlice.actions;

export default todoSlice.reducer;
