import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "p1",
    title: "Test",
    price: 6,
    description: "This is a first product - amazing!",
  },
];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
