import { createSlice } from "@reduxjs/toolkit";

import { uiActions } from "./ui";

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

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-3d4aa-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      console.error(error);
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: error.message,
        })
      );
    }

  }
};

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
