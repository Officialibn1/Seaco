"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Home() {
	const { theme, setTheme } = useTheme();
	return (
		<div className='w-full flex flex-col items-center'>
			<h1 className='text-3xl'>ShadCN is Amazing</h1>

			<div className='my-10 mx-auto'>
				<Button
					size={"lg"}
					variant={"default"}
					onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
					Toggle {theme === "light" ? "Dark" : "Light"} Theme
				</Button>
			</div>
		</div>
	);
}
