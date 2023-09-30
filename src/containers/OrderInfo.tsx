import { MdKeyboardArrowRight } from 'react-icons/md';
import { Button } from '../components';

const OrdersBar = () => {
	return (
		<div className='w-full px-24 pb-3 shadow-lg bg-white mb-6'>
			<div>
				<div className='flex items-center py-4 gap-2 text-sm text-gray-500'>
					Order <MdKeyboardArrowRight />{' '}
					<span className='border-0 border-b-thin border-gray-300 border-solid text-sm'>
						Order 34457ABC
					</span>{' '}
				</div>
			</div>
			<div className='flex items-center justify-between text-lg font-bold'>
				<div>
					<h1>Order 34457ABC</h1>
				</div>
				<div className='flex gap-5'>
					<Button
						className='text-secondary border-primary bg-secondary w-24 h-10 border-thin border-solid'
						text='Back'
					/>
					<Button
						text='Approve Order'
						className='border-none bg-primary text-primary w-44 h-10'
					/>
				</div>
			</div>
		</div>
	);
};

export default OrdersBar;
