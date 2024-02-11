import React from "react";

const AboutUs = () => {
	return (
		<div className='w-full  my-20 px-5 lg:px-0'>
			<h1 className='text-3xl lg:text-4xl font-normal text-center'>
				About Seaco
			</h1>

			{/* ABOUT TITLE */}
			<h1 className='text-2xl lg:text-3xl mt-14 font-normal text-center'>
				A Tale of Two Entrepreneurs
			</h1>

			{/* FIRST PARAGRAPH */}
			<p className='text-lg lg:text-xl font-extralight mt-10 lg:w-[750px] mx-auto'>
				The Saeco story began in 1981, when two Italian entrepreneurs, Sergio
				Zappella and Arturo Pasquinelli, shared a vision of bringing the
				authentic Italian coffee experience to homes around the world. They
				believed that everyone should be able to enjoy a delicious cup of
				espresso, regardless of their barista skills
			</p>

			{/* SECOND PARAGRAPH */}
			<p className='text-lg lg:text-xl font-extralight mt-10 lg:w-[750px] mx-auto'>
				Their first creation, the Superautomatica, was released in 1985 and
				revolutionized the home espresso machine market. It was the world&apos;s
				first fully automatic espresso machine, and it quickly gained popularity
				for its ease of use and ability to brew delicious coffee.
			</p>

			{/* THIRD PARAGRAPH */}
			<p className='text-lg lg:text-xl font-extralight mt-10 lg:w-[750px] mx-auto'>
				Over the next few decades, Saeco continued to innovate, releasing a
				series of new and improved espresso machines. Some of their most notable
				milestones include:
			</p>

			{/* LISTS */}
			<ul className='list-disc list-outside  lg:w-[750px] mx-auto'>
				<li>
					<p className='pl-5 text-lg lg:text-xl font-extralight mt-10 lg:w-[750px] mx-auto'>
						The Saeco Electronic Twin Superautomatica in 1989, which featured
						two independent brewing units for making different coffee drinks
						simultaneously.
					</p>
				</li>
				<li>
					<p className='pl-5 text-lg lg:text-xl font-extralight mt-10 lg:w-[750px] mx-auto'>
						The Saeco Magic line in 1994, which introduced a new level of
						convenience with its one-touch brewing capabilities.
					</p>
				</li>
				<li>
					<p className='pl-5 text-lg lg:text-xl font-extralight mt-10 lg:w-[750px] mx-auto'>
						The Saeco Cappucinatore in 1996, which made it easy to create frothy
						cappuccinos and lattes at home.
					</p>
				</li>
				<li>
					<p className='pl-5 text-lg lg:text-xl font-extralight mt-10 lg:w-[750px] mx-auto'>
						The Saeco Xelsis in 2009, which allowed users to personalize their
						coffee drinks and store their preferences.
					</p>
				</li>
				<li>
					<p className='pl-5 text-lg lg:text-xl font-extralight mt-10 lg:w-[750px] mx-auto'>
						The Saeco Xelsis Digital ID in 2011, which was the first automatic
						coffee machine to offer fingerprint technology for added security.
					</p>
				</li>
				<li>
					<p className='pl-5 text-lg lg:text-xl font-extralight mt-10 lg:w-[750px] mx-auto'>
						The Saeco GranBaristo Avanti in 2013, which was the first coffee
						machine to feature Bluetooth technology, allowing users to control
						their machine from their smartphones.
					</p>
				</li>
				<li>
					<p className='pl-5 text-lg lg:text-xl font-extralight mt-10 lg:w-[750px] mx-auto'>
						The Saeco GranLatte in 2021, which was the first automatic espresso
						machine with a built-in WiFi modem, allowing users to connect their
						machine to the internet and control it remotely.
					</p>
				</li>
			</ul>

			{/* FORTH PARAGRAPH */}
			<p className='text-lg lg:text-xl font-extralight mt-10 lg:w-[750px] mx-auto'>
				Today, Saeco is a world leader in espresso machines, offering a wide
				range of products to suit every need and budget. Their machines are
				known for their quality, design, and innovation, and they continue to be
				a popular choice for coffee lovers around the world.
			</p>
		</div>
	);
};

export default AboutUs;
