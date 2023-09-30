'use client';
import { useState, useEffect } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { BsCheck2 } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal } from 'antd';
import { ORDER_STATUS } from '@/shared/constant';
import {
	getProduct,
	selectProductData,
	updateStatus,
} from '../redux/orderSlice';
import data from '../data/data';

const OrderTable = () => {
	const dispatch = useDispatch();
	const productData = useSelector(selectProductData);
	const [modalData, setModalData] = useState({
		isOpen: false,
		productId: null,
	});

	useEffect(() => {
		dispatch(getProduct(data));
	}, []);

	const handleStatusCheck = (args: any, id: any) => {
		dispatch(updateStatus({ args, id }));
	};

	const showModal = (args: any, id: any) => {
		setModalData({ isOpen: true, productId: id });
	};

	const handleOk = (args: any, id: any) => {
		dispatch(updateStatus({ args, id }));
		setModalData({ isOpen: false, productId: null });
	};

	const handleCancel = () => {
		setModalData({ isOpen: false, productId: null });
	};

	const getTotal = (price: number, quantity: number) => {
		return price * quantity;
	};

	return (
		<table className='mt-12'>
			<thead className='h-12 border-thin border-default rounded-tl-xl'>
				<tr className='p-3'>
					<th>Icon</th>
					<th>Product Name</th>
					<th>Brand</th>
					<th>Price</th>
					<th>Quantity</th>
					<th>Total</th>
					<th>Status</th>
				</tr>
			</thead>
			<tbody>
				{productData?.length > 0 &&
					productData?.map((product: any) => {
						return (
							<>
								<tr key={product?.id}>
									<td>
										<img
											src={product?.icon}
											alt='prod-icon'
											className='w-10'
										/>
									</td>
									<td>{product?.name}</td>
									<td>{product?.brand}</td>
									<td>{product?.price}</td>
									<td>{product?.quantity}</td>
									<td>
										{getTotal(
											product?.price,
											product?.quantity
										)}
									</td>
									<td className='bg-default'>
										<div className='flex col gap-5'>
											<p
												className={`text-primary py-2 rounded-2xl text-sm w-24 text-center ${
													product.status ===
													ORDER_STATUS.NONE
														? 'invisible'
														: ''
												} ${
													product.status ===
													ORDER_STATUS.APPROVED
														? 'bg-primary'
														: ''
												} ${
													product.status ===
													ORDER_STATUS.MISSING
														? 'bg-alert opacity-75'
														: ''
												} ${
													product.status ===
													ORDER_STATUS.URGENT
														? 'bg-alert'
														: ''
												}`}
											>
												{product.status}
											</p>
											<BsCheck2
												size={25}
												onClick={() =>
													handleStatusCheck(
														ORDER_STATUS.APPROVED,
														product.id
													)
												}
												className={`cursor-pointer font-bold ${
													product.status ===
													ORDER_STATUS.APPROVED
														? 'text-green-600'
														: ''
												}`}
											/>
											<div>
												<RxCross2
													onClick={() =>
														showModal(
															ORDER_STATUS.MISSING,
															product.id
														)
													}
													size={25}
													className={`cursor-pointer font-bold ${
														product.status ===
														ORDER_STATUS.MISSING
															? 'text-red-400'
															: product.status ===
															  ORDER_STATUS.URGENT
															? 'text-red-700'
															: ''
													}`}
												/>
												<Modal
													title='Missing Product'
													visible={
														modalData.isOpen &&
														modalData.productId ===
															product.id
													}
													onOk={() =>
														handleOk(
															ORDER_STATUS.MISSING,
															product?.id
														)
													}
													onCancel={handleCancel}
													footer={[
														<Button
															key='submit'
															className='border-none'
															onClick={() =>
																handleOk(
																	ORDER_STATUS.URGENT,
																	product.id
																)
															}
														>
															Yes
														</Button>,
														<Button
															key='Submit'
															className='border-none'
															onClick={() =>
																handleOk(
																	ORDER_STATUS.MISSING,
																	product.id
																)
															}
														>
															No
														</Button>,
													]}
												>
													<p>
														{product?.name?.slice(
															0,
															30
														)}
														...urgent
													</p>
												</Modal>
											</div>
											<span className='cursor-pointer'>
												Edit
											</span>
										</div>
									</td>
								</tr>
							</>
						);
					})}
			</tbody>
		</table>
	);
};

export default OrderTable;
