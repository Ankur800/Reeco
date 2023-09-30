import { createSlice } from '@reduxjs/toolkit';

export const OrderSlice = createSlice({
	name: 'product',
	initialState: {
		data: [],
	},
	reducers: {
		getProduct: (state, action) => {
			state.data = action.payload;
		},
		updateStatus: (state, action) => {
			const { args, id } = action.payload;
			state?.data?.map((item: any) => {
				return item?.id === id ? (item.status = args) : item.status;
			});
		},
	},
});

export const { getProduct, updateStatus } = OrderSlice?.actions;
export const selectProductData = (state: any) => state?.product?.data;

export default OrderSlice.reducer;
