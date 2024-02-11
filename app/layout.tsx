import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Themeprovider } from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Themeprovider
					attribute='class'
					defaultTheme='system'
					enableSystem>
					{children}
				</Themeprovider>
			</body>
		</html>
	);
}
