import { ReactNode, FC } from "react";

const Container = ({ children }: { children: ReactNode }) => {
	return (
		<div className='max-w-screen-2xl mx-auto px-5 py-10 flex'>{children}</div>
	);
};

export default Container;
