import { createSlice } from '@reduxjs/toolkit';

// Helper function to safely access localStorage
const isLocalStorageAvailable = () => typeof window !== 'undefined' && window.localStorage;

// Define initial state
const initialState = isLocalStorageAvailable() && localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { items: [], total: 0 };

// Function to update localStorage safely
const updateLocalStorage = (state) => {
  if (isLocalStorageAvailable()) {
    localStorage.setItem('cart', JSON.stringify(state));
  }
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;

      updateLocalStorage(state);
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.total -= state.items[itemIndex].price * state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);

        updateLocalStorage(state);
      }
    },
    incrementItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        state.total += item.price;

        updateLocalStorage(state);
      }
    },
    decrementItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.total -= item.price;

        updateLocalStorage(state);
      }
    },
    resetCart: (state) => {
      state.items = [];
      state.total = 0;

      updateLocalStorage(state);
    },
  },
});

export const { addToCart, removeFromCart, incrementItem, decrementItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
