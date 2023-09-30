import React from 'react';

type InfoBoxProps = {
	title: string;
	info: string;
	border?: boolean;
};

const InfoBox = ({ title, info, border = true }: InfoBoxProps) => {
	return (
		<div
			className={`w-1/6 flex flex-col gap-3 border-0 ${
				border ? 'border-r-[1px]' : ''
			} border-solid border-default`}
		>
			<p className='font-bold text-fade'>{title}</p>
			<p className='font-bold text-lg'>{info}</p>
		</div>
	);
};

export default InfoBox;
