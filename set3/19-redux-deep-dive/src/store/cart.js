import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.total += action.payload.price;
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) {
        state.items.push({
          ...action.payload,
          quantity: 1,
          total: action.payload.price,
        });
        return;
      }
      state.items[index].quantity += 1;
      state.items[index].total += action.payload.price;
    },
    remove(state, action) {
      // TODO:
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
