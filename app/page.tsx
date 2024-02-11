import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import SeacoSeries from "@/components/SeacoSeries";

export default function Home() {
	return (
		<div className=' w-full flex flex-col items-center'>
			{/* Hero */}
			<Hero />

			{/* Series Section */}
			<SeacoSeries />

			{/* ABOUT SECTION */}
			<AboutUs />
		</div>
	);
}
