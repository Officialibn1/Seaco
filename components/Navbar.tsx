import React from "react";
import Container from "./Container";
import { Button } from "./ui/button";
import Image from "next/image";
import logo from "@/public/saeco-logo.png";
import Link from "next/link";

const Navbar = () => {
	return (
		<div className='flex justify-between items-center  px-5 py-10'>
			{/* Logo container */}
			<div className='w-36 h-12  '>
				<Link href={"/"}>
					<Image
						src={logo}
						width={232}
						height={77}
						alt='Seaco Logo'
					/>
				</Link>
			</div>

			{/* Desktop Nav Links */}
			<div>
				<ul className='flex gap-5 items-center'>
					<li>
						<Button
							asChild
							variant={"ghost"}
							size={"default"}>
							<Link
								className='text-lg font-light'
								href={"/"}>
								Models
							</Link>
						</Button>
					</li>
					<li>
						<Button
							asChild
							variant={"ghost"}
							size={"default"}>
							<Link
								className='text-lg font-light'
								href={"/"}>
								Accesories
							</Link>
						</Button>
					</li>
					<li>
						<Button
							asChild
							variant={"ghost"}
							size={"default"}>
							<Link
								className='text-lg font-light'
								href={"/"}>
								About Us
							</Link>
						</Button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
