import Navbar from "@/components/Navbar";
import { DriverProvider } from "@/contexts/DriverContext";
import { Bricolage_Grotesque } from "next/font/google";
import "driver.js/dist/driver.css";
import { cn } from '@/lib/utils';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-photo-view/dist/react-photo-view.css";
import "./globals.css";
import Script from "next/script";
import Footer from "@/components/Footer";

const bricolage = Bricolage_Grotesque({
	variable: "--bricolage-font",
	subsets: ["latin"],
	display: "swap",
  });

declare global {
	interface Window {
		google: any;
	}
}

export const metadata: Metadata = {
	title: "Database on Protein and Carbohydrate Mimetics",
	description:
		"The proteomic sequences of Alphapapillomavirus 9 were extracted from the NCBI Virus and GenBank databases for analysis. A total number of 9140 protein sequences were obtained till October 2021, which were segregated according to their continents. Protein sequences were clustered in order to reduce the number of protein sequences to be analyzed, the clustering was done with the help of tool named CD-Hlt Suite. Clustering was based on identity percentage greater than or equal to 99%, which resulted in 583 unique clusters of protein sequences. The division of unique protein clusters according to the type of protein is depicted in the image below.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='dark'>
			<body 
				suppressHydrationWarning={true}
				className={cn(
					'font-bricolage antialiased',
					bricolage.variable,
				  )}>
				<Navbar />
				<DriverProvider>
					<div className="max-w-6xl  mx-auto px-8 "> 
					{children}
					<Footer/>
					</div>
				</DriverProvider>
				<Script
					src='https://www.gstatic.com/charts/loader.js'
					strategy='beforeInteractive'
				/>
			</body>
		</html>
	);
}
