import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './slice/cartSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      cartDetails: cartSlice.reducer, 
    },
  });
};
