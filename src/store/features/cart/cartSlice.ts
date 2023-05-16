import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface CartState {
  products: any[];
  totalCost: number;
}
const initialState: CartState = {
  products: [],
  totalCost: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<{ id: number; name: string }>) => {
      state.products.push(payload);
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, clearCart } = cartSlice.actions;
