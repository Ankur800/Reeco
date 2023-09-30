import React from 'react';

type ButtonProps = {
	text: string;
	className?: string;
};

const Button = ({ text, className = '' }: ButtonProps) => {
	return (
		<>
			<button
				className={`rounded-3xl font-semibold cursor-pointer ${className}`}
			>
				{text}
			</button>
		</>
	);
};

export default Button;
