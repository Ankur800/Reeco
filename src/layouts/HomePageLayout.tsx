import { Navbar, OrderInfo, MixInfo, Orders } from '@/containers';

const HomePageLayout = () => {
	return (
		<main className='w-full'>
			<Navbar />
			<OrderInfo />
			<div className='bg-default mx-24'>
				<MixInfo />
				<Orders />
			</div>
		</main>
	);
};

export default HomePageLayout;
