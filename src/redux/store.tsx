import { configureStore } from '@reduxjs/toolkit';
import orderSlice from './orderSlice';

const store = configureStore({
	reducer: {
		product: orderSlice,
	},
});

export default store;
