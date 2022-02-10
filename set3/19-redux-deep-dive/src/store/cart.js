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
      state.total -= action.payload.price;
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) {
        console.error("This item is not in the cart, why is it being removed?");
      }
      state.items[index].quantity -= 1;
      state.items[index].total -= action.payload.price;
      state.items = state.items.filter((item) => item.quantity > 0);
    },
    clear(state) {
      state.items = [];
      state.total = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
