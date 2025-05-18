import ImagePreviewer from "@/components/ui/ImagePreviewer";

export default function Home() {
	return (
		<main className=" max-w-6xl mx-auto px-8 border flex flex-col lg:flex-row rounded-t-lg justify-between items-center md:items-start gap-16 container py-16 bg-gray-50">
				<div className="lg:w-[55%] text-left leading-7 text-gray-600">
					<h1 className="text-4xl font-bold text-gray-800 mb-6">
						Welcome to Database on Carbohydrate and Protein Mimetics.
					</h1>
					<p className="mb-6">
						A comprehensive resource for researchers and scientists exploring the fascinating world of molecular mimicry. This curated database spans 25 years (1999–2023), featuring three major classes: carbohydrate mimetics, protein mimetics, and carbohydrate-mimetic peptides (CMPs). These innovative molecules represent a cutting-edge approach in drug discovery and vaccine development, unlocking new therapeutic possibilities.

					</p>
					<p className="mb-6">
						Designed to replicate the functional properties of natural carbohydrates and proteins, these mimetics help overcome challenges like low biological activity and limited drug-like behavior. Their unique ability to modulate key biological interactions makes them powerful candidates for precision medicine.

					</p>
					<p>
						Our database serves as a vital tool for those engaged in the rational design of mimetics, offering detailed insights into classification, functional activity, and therapeutic applications. These include cancer, cardiovascular diseases, infectious diseases, diabetes, inflammatory disorders, and other complex conditions where molecular mimicry holds promise.
					</p>
				</div>

				{/* Right Image Section */}
				<div className="lg:w-[50%]">
					<ImagePreviewer
						src="/Flowchart.png"
						alt="Flowchart"
						width={1300}
						height={1300}
						className="p-0"
					/>

			</div>
		</main>
	);
}
