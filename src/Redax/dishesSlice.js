import { createSlice } from "@reduxjs/toolkit";

export const dishesSlice = createSlice({
  //   задаем имя
  name: "dishes",
  //   создаем первоначальное состояние
  initialState: {
    selectedCategory: "ALL",
  },
  //   меняем состояние. это стандартный синтаксис,
  // а само действие пишем в компоненте Filter
  reducers: {
    filterCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const getSelectedCategory = (state) => state.dishes.selectedCategory;

export const { filterCategory } = dishesSlice.actions;
export default dishesSlice.reducer;
