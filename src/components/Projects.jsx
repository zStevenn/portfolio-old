import { SiDiscord } from "react-icons/si"
import Title from "./Title"
import Project1 from "../assets/static/cafetaria-de-sluis.png"

function Projects() {
	return (
		<div
			className="mb-40"
			id="projecten"
		>
			<Title text="Projecten" />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-center gap-8">
				<div className="flex flex-col">
					<h3 className="text-slate-50 text-center my-4 text-xl">
						Cafetaria de Sluis
					</h3>
					<a href="https://cafetariadesluis.nl" target="_blank">
						<img src={Project1} />
					</a>
				</div>
				<div className="flex flex-col items-center">
					<h3 className="text-slate-50 text-center my-4 text-xl">
						Discord Bot
					</h3>
					<SiDiscord className="text-8xl text-slate-50" />
				</div>
			</div>
		</div>
	)
}

export default Projects
