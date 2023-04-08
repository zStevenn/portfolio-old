import Project1 from "../assets/static/cafetaria-de-sluis.png"
import Project2 from "../assets/static/stevens-todo-app.png"

function Projects() {
	return (
		<div className="px-8 py-20 bg-neutral-100 grid gap-4 min-h-screen" id="projecten">
			<h1 className="text-neutral-900 text-2xl font-semibold"># Projecten</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-8">
				<div>
					<h3 className="text-neutral-900 text-center text-xl">
						Cafetaria de Sluis
					</h3>
					<a href="https://cafetariadesluis.nl" target="_blank">
						<img
							src={Project1}
							title="Cafetaria de Sluis"
							alt="Cafetaria de Sluis"
						/>
					</a>
				</div>
				<div>
					<h3 className="text-neutral-900 text-center text-xl">
						Steven's To-Do
					</h3>
					<a href="https://stevens-todo-app.netlify.app" target="_blank">
						<img
							src={Project2}
							title="Steven's To-Do App"
							alt="Steven's To-Do App"
						/>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Projects
