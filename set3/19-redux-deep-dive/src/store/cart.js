import { createSlice } from "@reduxjs/toolkit";

/* Example cart item
const cartItem = {
  id: "p1",
  title: "Title",
  description: "Describes the product",
  price: 6,
  total: 12,
  quantity: 2,
};
*/

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const newItem = action.payload;
      state.totalAmount += newItem.price;
      state.totalQuantity += 1;
      const item = state.items.find((item) => item.id === newItem.id);
      if (!item) {
        state.items.push({
          ...newItem,
          quantity: 1,
          total: action.payload.price,
        });
        return;
      }
      item.quantity += 1;
      item.total += action.payload.price;
    },
    remove(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalAmount -= existingItem.price;
      state.totalQuantity -= 1;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.total -= existingItem.price;
        existingItem.quantity -= 1;
      }
    },
    clear(state) {
      state.items = [];
      state.total = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
