import React from "react";
import Image from "next/image";
import hero from "@/public/hero.webp";

const Hero = () => {
	return (
		<div className='relative w-full flex items-end h-screen aspect-square'>
			{/* background image */}
			<Image
				src={hero}
				placeholder='blur'
				alt='Mountains'
				quality={100}
				fill
				sizes='100vw'
				style={{
					objectFit: "cover",
				}}
			/>

			{/* hero content */}
			<div className='z-10 p-10 md:p-20 lg:w-2/3 text-slate-300'>
				<p className='text-lg font-light'>Models</p>

				<p className='text-2xl mt-10'>
					Explore the Saeco range to find the perfect automatic coffee machine
					for you.
				</p>
			</div>
		</div>
	);
};

export default Hero;
