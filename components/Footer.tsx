import logo from "@/public/saeco-logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const saecoProducts = [
	"GRANAROMA SERIES",
	"GranAroma",
	"GranAroma Deluxe",
	"XELSIS SERIES",
	"Xelsis Deluxe",
	"Xelsis Suprema",
];

const supportItems = [
	"Support Videos",
	"FAQ",
	"Descale",
	"Manuals Download",
	"Warranty",
	"Contact",
];

const Footer = () => {
	return (
		<div className='w-full h-auto bg-foreground/5 px-10 py-20 lg:px-14 flex flex-col gap-10'>
			<div className='w-36 h-12  '>
				{/* Logo Image */}
				<Link href={"/"}>
					<Image
						src={logo}
						width={232}
						height={77}
						alt='Seaco Logo'
					/>
				</Link>
			</div>

			{/* Links Container */}
			<div className='flex flex-col md:flex-row gap-36 '>
				<ul className='flex flex-col gap-5 '>
					<h1 className='text-lg font-light mb-8'>ALL MODELS</h1>
					{saecoProducts.map((m, i) => (
						<li key={i}>
							<Button variant={"ghost"}>{m}</Button>
						</li>
					))}
				</ul>

				{/* LINKS TWO */}
				<ul className='flex flex-col gap-5'>
					<h1 className='text-lg font-light mb-8'>SUPPORT OVERVIEW</h1>
					{supportItems.map((m, i) => (
						<li key={i}>
							<Button variant={"ghost"}>{m}</Button>
						</li>
					))}
				</ul>
			</div>

			{/* FOOTER ICONS */}
			<div className='flex gap-5 justify-end'>
				{/* TWITTER */}
				<Button
					asChild
					variant={"outline"}
					size={"social"}>
					<a
						href={"https://twitter.com/__ibn1"}
						target='_blank'>
						<Twitter />
					</a>
				</Button>

				{/* FACEBOOK */}
				<Button
					asChild
					variant={"outline"}
					size={"social"}>
					<a
						href={"https://web.facebook.com/ibn0001"}
						target='_blank'>
						<Facebook />
					</a>
				</Button>

				{/* LINKEDIN */}
				<Button
					asChild
					variant={"outline"}
					size={"social"}>
					<a
						href={"https://www.linkedin.com/in/isah-muhammad-5046b125a/"}
						target='_blank'>
						<Linkedin />
					</a>
				</Button>

				{/* GITHUB */}
				<Button
					asChild
					variant={"outline"}
					size={"social"}>
					<a
						href={"https://github.com/Officialibn1"}
						target='_blank'>
						<Github />
					</a>
				</Button>
			</div>

			{/* COPY TEXT */}
			<p className='text-sm font-extralight text-center'>
				&copy;Design by <Button variant={"outline"}>Ibn</Button> inspired by the
				original website{" "}
				<Button
					asChild
					variant={"link"}>
					<Link href={"https://saeco.com/"}>Saeco</Link>
				</Button>
			</p>
		</div>
	);
};

export default Footer;
