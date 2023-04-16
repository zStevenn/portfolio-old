import Project1 from "../assets/static/cafetaria-de-sluis.png"
import Project2 from "../assets/static/stevens-todo-app.png"

function Projects() {
	return (
		<div className="bg-neutral-100">
			<div
				className="px-2 sm:px-4 py-10 flex flex-col justify-center gap-4 container mx-auto"
				id="projecten"
			>
				<h1 className="text-neutral-900 text-2xl font-semibold"># Projecten</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
					<div className="p-2 bg-neutral-900 rounded flex flex-col gap-2">
						<img
							className="object-cover h-36 w-full"
							src={Project1}
							title="Cafetaria de Sluis"
							alt="Cafetaria de Sluis"
						/>
						<div className="text-neutral-100 px-2 flex-1 pb-2">
							<h3 className="text-lg">Cafetaria de Sluis</h3>
							<p className="text-sm">
								Assisteren bij het renoveren van de website van een lokale
								snackbar in mijn woonplaats. De nieuwe website is gemaakt met
								React en Tailwind CSS en is geoptimaliseerd voor mobiel gebruik.
							</p>
						</div>
						<a
							href="https://cafetariadesluis.nl"
							target="_blank"
							rel="noopener noreferrer"
							className="px-2 mx-2 py-1 w-fit bg-red-500 border-b-2 border-r-2 border-red-800 rounded text-neutral-100"
						>
							Bekijk project
						</a>
					</div>

					<div className="p-2 bg-neutral-900 rounded flex flex-col gap-2">
						<img
							className="object-cover h-36 w-full"
							src={Project2}
							title="Steven's To-Do App"
							alt="Steven's To-Do App"
						/>
						<div className="text-neutral-100 px-2 flex-1 pb-2">
							<h3 className="text-lg">Steven's To-Do App</h3>
							<p className="text-sm">
								Een side-project waar ik mijn kennis in Figma design, React en
								Tailwind CSS heb toegepast. Het project is nog niet afgerond,
								maar ik ben er wel trots op.
							</p>
						</div>
						<a
							href="https://stevens-todo-app.netlify.app"
							target="_blank"
							rel="noopener noreferrer"
							className="px-2 mx-2 py-1 w-fit bg-red-500 border-b-2 border-r-2 border-red-800 rounded text-neutral-100"
						>
							Bekijk project
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Projects
