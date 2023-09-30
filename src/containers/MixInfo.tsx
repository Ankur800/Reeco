import InfoBox from '../components/InfoBox';

const MixInfo = () => {
	return (
		<div className='flex gap-4 bg-white border-thin border-solid rounded-lg p-8 border-default shadow-sm'>
			<InfoBox title='Supplier' info='East coast fruits & vegetables' />
			<InfoBox title='Shipping Date' info='Thu, Feb 10' />
			<InfoBox title='Total' info='15,028.3' />
			<InfoBox title='Category' info='East coast fruits & vegetables' />
			<InfoBox title='Department' info='300-444-678' />
			<InfoBox
				title='Status'
				info='Awaiting your approvel'
				border={false}
			/>
		</div>
	);
};

export default MixInfo;
