import type { Metadata } from "next";
import "./globals.css";
import { Themeprovider } from "@/providers/ThemeProvider";
import Navbar from "@/components/Navbar";

import { Montserrat } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500"],
});

export const metadata: Metadata = {
	title: "Seaco",
	description: "A copy of Seaco website, just for practice purpose",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={`${montserrat.className} bg-background max-w-screen-xl mx-auto `}>
				<Themeprovider
					attribute='class'
					defaultTheme='dark'
					enableSystem>
					<Navbar />
					{children}
				</Themeprovider>
			</body>
		</html>
	);
}
