import Project1 from "../assets/static/cafetaria-de-sluis.png"
import Project2 from "../assets/static/stevens-todo-app.png"

function Projects() {
	return (
		<div className="bg-neutral-100">
			<div
				className="px-8 py-20 grid gap-4 min-h-screen container mx-auto"
				id="projecten"
			>
				<h1 className="text-neutral-900 text-2xl font-semibold"># Projecten</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-8">
					<div className="bg-neutral-900 rounded shadow shadow-neutral-900 py-6 px-3 grid gap-4 place-items-center">
						<a href="https://cafetariadesluis.nl" target="_blank">
							<h3 className="text-neutral-100 text-center text-xl">
								Cafetaria de Sluis
							</h3>
							<img
								className="h-48 w-48 object-cover p-2 rounded bg-neutral-300"
								src={Project1}
								title="Cafetaria de Sluis"
								alt="Cafetaria de Sluis"
							/>
						</a>
					</div>
					<div className="bg-neutral-900 rounded shadow shadow-neutral-900 py-6 px-3 grid gap-4 place-items-center">
						<a href="https://stevens-todo-app.netlify.app" target="_blank">
							<h3 className="text-neutral-100 text-center text-xl">
								Steven's To-Do
							</h3>
							<img
								className="h-48 w-48 object-cover p-2 rounded bg-neutral-300"
								src={Project2}
								title="Steven's To-Do App"
								alt="Steven's To-Do App"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Projects
