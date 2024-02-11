import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Coffee, Tv2, User } from "lucide-react";
import { Button } from "./ui/button";

const ProductCard = ({
	image,
	title,
}: {
	image: StaticImageData;
	title: string;
}) => {
	return (
		<Link
			href={"/"}
			className='w-[360px] mx-auto md:mx-0'>
			{/* CARD COMPONENT */}
			<Card>
				{/* CARD IMAGE */}
				<CardHeader className='relative card'>
					<div className=' dark:bg-background p-2 rounded-md aspect-square bg-foreground/5 transition-all duration-300 hover:scale-105 flex items-center'>
						<Image
							src={image}
							placeholder='blur'
							alt='Mountains'
							quality={100}
						/>
					</div>
				</CardHeader>

				{/* CARD CONTENT */}
				<CardContent>
					<CardTitle>{title}</CardTitle>

					{/* CARD DESCRIPTION */}
					<CardDescription className='flex flex-col gap-3 mt-5'>
						<div className='flex items-center gap-3'>
							<Tv2 />
							7.85&apos; color screentouch display
						</div>
						<div className='flex items-center gap-3'>
							<Coffee /> 22 beverages
						</div>
						<div className='flex items-center gap-3'>
							<User /> Up to 8 User profile
						</div>
					</CardDescription>
				</CardContent>

				{/* CARD BUTTONS */}
				<CardFooter className=' flex'>
					<Button
						size={"full"}
						variant={"default"}>
						Learn More
					</Button>
				</CardFooter>
			</Card>
		</Link>
	);
};

export default ProductCard;
