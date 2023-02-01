import Title from "./Title"

function Services() {
	return (
		<div className="pb-40" id="services">
			<Title text="Services" />
			<div className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-8">
				<div className="grid grid-cols-5 text-slate-50 gap-2">
					<div className="col-start-3 col-span-1">Tekst blok 1</div>
					<div className="col-start-2 col-span-1">Pijl 1</div>
					<div className="col-end-5 col-span-1">Pijl 2</div>
					<div className="col-start-1 col-span-1">Tekst blok 2</div>
					<div className="col-start-3 col-span-1">Pijl 3</div>
					<div className="col-end-6 col-span-1">Tekst blok 2</div>
				</div>
				<div className="text-slate-50">
					<p className="mb-4">
						Als software developer bied ik een breed scala aan diensten aan,
						waaronder ontwikkeling van websites en webapplicaties, front-end
						development, technische ondersteuning, en problemen oplossen. Ik ben
						gespecialiseerd in HTML, CSS, JavaScript, React en Tailwind. Mijn
						doel is om kwalitatief hoogstaande en gebruiksvriendelijke
						oplossingen te bieden die aan uw specifieke wensen voldoen. Neem
						gerust contact met mij op voor meer informatie over hoe ik u kan
						helpen.
					</p>
					<a
						href="#contact"
						className="px-1 py-2 bg-red-500 border-b-2 border-r-2 border-red-800 text-slate-50 text-lg"
					>
						Stuur een verzoek
					</a>
				</div>
			</div>
		</div>
	)
}

export default Services
