import React from "react";
import ProductCard from "./ProductCard";
import product1 from "@/public/engine1.webp";
import product2 from "@/public/engine2.webp";
import product3 from "@/public/engine3.webp";

const SeacoSeries = () => {
	return (
		<div
			className=' w-full py-40  px-5 lg:px-0'
			id='models'>
			<h1 className='text-2xl'>Xelsis Series</h1>

			<p className='mt-5 text-lg font-light lg:w-2/4 '>
				Explore our Xelsis range to find the perfect automatic coffee machine
				for you.
			</p>

			{/* Product Container */}
			<div className='my-14  flex flex-col md:flex-row gap-10'>
				<ProductCard
					image={product1}
					title={"XELSES SUPREMA "}
				/>
				<ProductCard
					image={product2}
					title={"XELSES ULTRA "}
				/>
			</div>

			<h1 className='text-2xl mt-32'>Gran Aroma Series</h1>

			<p className='mt-5 text-lg font-light lg:w-2/4 '>
				Explore our Gran Aroma range to find the perfect automatic coffee
				machine for you.
			</p>

			{/* Product Container */}
			<div className='my-14  flex flex-col md:flex-row gap-10'>
				<ProductCard
					image={product3}
					title={"GRAN AROMA MINI "}
				/>
				<ProductCard
					image={product2}
					title={"GRAN AROMA ULTRA "}
				/>
			</div>
		</div>
	);
};

export default SeacoSeries;
