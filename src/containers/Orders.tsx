import Search from 'antd/es/input/Search';
import { AiOutlinePrinter } from 'react-icons/ai';
import OrderTable from './OrderTable';
import Button from '../components/Button';

const ProductTable = () => {
	return (
		<>
			<div className='bg-secondary border-[1px] border-solid rounded-lg mt-12 p-8 border-default shadow-sm '>
				<div className='flex justify-between'>
					<div>
						<Search
							placeholder='Search...'
							style={{ width: 400 }}
						/>
					</div>
					<div className='flex items-center gap-8'>
						<Button
							text='Add Item'
							className='text-secondary border-primary bg-secondary w-36 h-10 border-thin border-solid'
						/>
						<div>
							<AiOutlinePrinter size={30} color='green' />
						</div>
					</div>
				</div>
				<div>
					<OrderTable />
				</div>
			</div>
		</>
	);
};

export default ProductTable;
