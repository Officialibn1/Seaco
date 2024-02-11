"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import logo from "@/public/saeco-logo.png";
import Link from "next/link";
import { AlignJustify, Moon, Sun } from "lucide-react";

import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navbar = () => {
	const { theme, setTheme } = useTheme();
	return (
		<div className='z-10 bg-background absolute top-0 left-0 w-full flex items-center gap-10 px-5 py-10'>
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
			<div className='hidden ml-auto md:flex '>
				<ul className='flex gap-5 items-center'>
					<li>
						<Button
							asChild
							variant={"ghost"}
							size={"default"}>
							<Link
								className='text-xl font-extralight'
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
								className='text-xl font-extralight'
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
								className='text-xl font-extralight'
								href={"/"}>
								About Us
							</Link>
						</Button>
					</li>
				</ul>
			</div>

			{/* Theme Toggler */}
			<Button
				className='ml-auto'
				variant={"ghost"}
				size={"icon"}
				onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
				<Moon className='w-8 h-8 absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100 transition-all' />

				<Sun className='w-8 h-8 absolute rotate-0 scale-100 dark:rotate-90 dark:scale-0 transition-all' />
			</Button>

			{/* Mobile Nav */}
			<Sheet>
				{/* Sheet Open button */}
				<SheetTrigger>
					{/* Open Icon */}
					<AlignJustify
						size={36}
						className='md:hidden'
					/>
				</SheetTrigger>

				<SheetContent>
					<ul className='flex mt-20 flex-col gap-5'>
						<li>
							<Button
								asChild
								variant={"outline"}
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
								variant={"outline"}
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
								variant={"outline"}
								size={"default"}>
								<Link
									className='text-lg font-light'
									href={"/"}>
									About Us
								</Link>
							</Button>
						</li>
					</ul>
				</SheetContent>
			</Sheet>
		</div>
	);
};

export default Navbar;
