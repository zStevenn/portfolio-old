import { SiDiscord } from "react-icons/si"
import Project1 from "../assets/static/cafetaria-de-sluis.png"

function Projects() {
	return (
		<div
			className="my-24 bg-neutral-50"
			id="projecten"
		>
			<h1 className="text-neutral-900 text-2xl"># Projecten</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-8">
				<div className="grid">
					<h3 className="text-neutral-900 my-4 text-xl">
						Cafetaria de Sluis
					</h3>
					<a href="https://cafetariadesluis.nl" target="_blank">
						<img src={Project1} title="Cafetaria de Sluis" alt="Cafetaria de Sluis" />
					</a>
				</div>
				<div className="grid">
					<h3 className="text-neutral-900 my-4 text-xl">
						Steven's To-Do
					</h3>
					<a href="https://stevens-todo-app.netlify.app" target="_blank">
						<img src={Project1} title="Steven's To-Do App" alt="Steven's To-Do App" />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Projects
