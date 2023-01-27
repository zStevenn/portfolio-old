function Aboutme() {
	return (
		<div
			className="grid grid-cols-1 place-content-center gap-4 py-4 min-h-screen"
			id="overmij"
		>
			<h1 className="text-slate-50 text-center text-2xl font-semibold py-6">
				<span className="text-slate-200 pr-2">#</span>Over mij
			</h1>
			<div className="md:flex md:gap-16">
				<img className="hidden md:block" src="./src/img/profile.svg" />
				<div className="text-slate-50">
					<p className="mb-4">
						Als laatstejaarsstudent software developer met een passie voor
						front-end, creëer ik gebruiksvriendelijke en mooie websites en
						webapplicaties. Met mijn vaardigheden in HTML, CSS, JavaScript en
						ervaring met React en Tailwind, ontwikkel ik interactieve en moderne
						interfaces. Bekijk mijn portfolio om te zien hoe ik mijn
						vaardigheden toepas en mijn passie voor software ontwikkeling
						uitdruk.
					</p>
					<p className="mb-4">
						Geïnteresseerd om samen te werken? Ik hoor graag van je!
					</p>
					<div className="flex gap-8 mt-4">
						<a
							href="#contact"
							className="px-1 py-2 bg-red-500 border-b-2 border-r-2 border-red-800 text-slate-50 text-lg"
						>
							Contact
						</a>
						<a
							href="#projecten"
							className="px-1 py-2 bg-gray-500 border-b-2 border-r-2 border-gray-800 text-slate-50 text-lg"
						>
							Projecten
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Aboutme
