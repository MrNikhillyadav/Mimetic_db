import Regions from "@/components/Regions";
import ImagePreviewer from "@/components/ui/ImagePreviewer";
import Table, { type Header } from "@/components/ui/Table";
import { getCarbohydrateData, getCarbohydrateDataLength } from "@/lib/actions";
import type { FC } from "react";
import CarbohydrateData from "@/data/carbohydrate.json";

interface pageProps {}

// Functions

const page: FC<pageProps> = ({}) => {
	const headerMap: Record<string, Header> = {
		"Paper Publish Year": { displayName: "Paper Publish Year", dataType: 'number' },
		DOI: { displayName: "DOI", dataType: "string" },
		"Category (Carbohydrate Mimetic)": {
			displayName: "Category (Carbohydrate Mimetic)",
			dataType: "string",
		},
		"Mimic of which Carbohydrate": { displayName: "Mimic of which carbodydrate", dataType: "string" },
		"Name of the Carbohydrate Mimetic": {
			displayName: "Name of the carbodydrate mimetic",
			dataType: "string",
		},
		Functions: { displayName: "Functions", dataType: "string" },
		Activity: { displayName: "Activity", dataType: "string" },
	};

	return (
		<main className='max-w-6xl bg-white mx-auto py-8 rounded-t-lg container'>
			<article className='space-y-6'>
				<h1 className='scroll-m-20 text-black text-center text-4xl font-extrabold tracking-tight lg:text-5xl'>
					Carbodydrate Data
				</h1>
			</article>

			<Table
				filePath='carbodydrate.csv'
				headerMap={headerMap}
				loadData={getCarbohydrateData}
				getLength={getCarbohydrateDataLength}
			/>
		</main>
	);
};

export default page;
