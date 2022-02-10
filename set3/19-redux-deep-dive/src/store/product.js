import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "p1",
    title: "My First Book",
    price: 6,
    description: "The first book I ever wrote",
  },
  {
    id: "p2",
    title: "My Second Book",
    price: 5,
    description: "The second book I ever wrote",
  },
];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
