import Regions from "@/components/Regions";
import ImagePreviewer from "@/components/ui/ImagePreviewer";
import Table, { type Header } from "@/components/ui/Table";
import { getCancerData, getCancerDataLength } from "@/lib/actions";
import type { FC } from "react";
import CancerData from "@/data/cancer.json";

interface pageProps {}

// Functions

const page: FC<pageProps> = ({}) => {
	const headerMap: Record<string, Header> = {
		"Paper Publish Year": { displayName: "Paper Publish Year", dataType: 'number' },
		DOI: { displayName: "DOI", dataType: "string" },
		"Carbohydrate/Protein Mimetic": {displayName : " Carbohydrate/Protein Mimetic", dataType : "string"},
		"Category": {
			displayName: "Category",
			dataType: "string",
		},
		"Mimic of which Protein/Carbohydrate": { displayName: "Mimic of which protein/carbodydrate", dataType: "string" },
		Functions: { displayName: "Functions", dataType: "string" },
		Activity: { displayName: "Activity", dataType: "string" },
	};

	return (
		<main className='max-w-6xl bg-white mx-auto py-8 rounded-t-lg container'>
			<article className='space-y-6'>
				<h1 className='scroll-m-20 text-black text-center text-4xl font-extrabold tracking-tight lg:text-5xl'>
					Cancer Data
				</h1>
			</article>

			<Table
				filePath='cancer.csv'
				headerMap={headerMap}
				loadData={getCancerData}
				getLength={getCancerDataLength}
			/>
		</main>
	);
};

export default page;
