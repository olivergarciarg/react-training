import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { 
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItem(state) {
      state.cartIsVisible = !state.cartIsVisible;
    }
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice;