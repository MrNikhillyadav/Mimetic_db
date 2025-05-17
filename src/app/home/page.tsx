import ImagePreviewer from "@/components/ui/ImagePreviewer";

export default function Home() {
	return (
		<main className=" max-w-6xl mx-auto px-8 border flex flex-col lg:flex-row rounded-t-lg justify-between items-center md:items-start gap-16 container py-16 bg-gray-50">
				<div className="lg:w-[55%] text-left leading-7 text-gray-600">
					<h1 className="text-4xl font-bold text-gray-800 mb-6">
						Welcome to database on Carbohydrate and Protein Mimetics.
					</h1>
					<p className="mb-6">
						A comprehensive resource for researchers and scientists exploring the fascinating world of molecular mimicry. Carbohydrate-mimetic peptides (CMPs) and protein mimetics represent a cutting-edge approach in drug discovery and vaccine development, offering exciting new therapeutic opportunities.
					</p>
					<p className="mb-6">
						These mimetics are designed to emulate the bioactive functions of carbohydrates and proteins while addressing the limitations of their natural counterparts, such as low activity and insufficient drug-like properties. By mimicking the three-dimensional interaction schemes of native carbohydrate and protein antigens, these compounds can interfere with sugar-protein and sugar-nucleic acid interactions, opening up new avenues for targeted therapies.
					</p>
					<p>
						Our database serves as a vital tool for those involved in the rational design of glycomimetics and protein mimetics, providing detailed information on binding characteristics and potential applications in fields ranging from cancer treatment to combating infectious diseases.
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
