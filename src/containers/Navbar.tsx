import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Header = () => {
	return (
		<header className='w-full flex justify-between px-24 text-primary bg-primary'>
			<div className='flex items-center py-3'>
				<h1 className='cursor-pointer text-3xl'>Reeco</h1>
				<p className='cursor-pointer ml-12'>Store</p>
				<p className='cursor-pointer ml-12'>Orders</p>
				<p className='cursor-pointer ml-12'>Analytics</p>
			</div>
			<div className='flex items-center py-3'>
				<div className='mt-1 cursor-pointer'>
					<AiOutlineShoppingCart size={30} />
				</div>
				<div className='cursor-pointer ml-12 flex'>
					<p className='mr-1'>Hello, James </p>
					<div className='pt-1'>
						<MdKeyboardArrowDown />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
