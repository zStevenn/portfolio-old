import Title from "./Title"
import {
	SiCss3,
	SiHtml5,
	SiJavascript,
	SiPhp,
	SiReact,
	SiTailwindcss,
} from "react-icons/si"

function Skills() {
	return (
		<div className="mb-40" id="vaardigheden">
			<Title text="Vaardigheden" />
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
				<div className="flex flex-col justify-center items-center bg-red-500 border-b-2 border-r-2 border-red-800 px-3 py-6 shadow shadow-red-800 hover:shadow-md">
					<h3 className="text-slate-50 pb-4">HTML5</h3>
					<SiHtml5 className="text-8xl text-slate-50" />
				</div>
				<div className="flex flex-col justify-center items-center bg-red-500 border-b-2 border-r-2 border-red-800 px-3 py-6 shadow shadow-red-800 hover:shadow-md">
					<h3 className="text-slate-50 pb-4">CSS</h3>
					<SiCss3 className="text-8xl text-slate-50" />
				</div>
				<div className="flex flex-col justify-center items-center bg-red-500 border-b-2 border-r-2 border-red-800 px-3 py-6 shadow shadow-red-800 hover:shadow-md">
					<h3 className="text-slate-50 pb-4">Javascript</h3>
					<SiJavascript className="text-8xl text-slate-50" />
				</div>
				<div className="flex flex-col justify-center items-center bg-red-500 border-b-2 border-r-2 border-red-800 px-3 py-6 shadow shadow-red-800 hover:shadow-md">
					<h3 className="text-slate-50 pb-4">PHP</h3>
					<SiPhp className="text-8xl text-slate-50" />
				</div>
				<div className="flex flex-col justify-center items-center bg-red-500 border-b-2 border-r-2 border-red-800 px-3 py-6 shadow shadow-red-800 hover:shadow-md">
					<h3 className="text-slate-50 pb-4">React</h3>
					<SiReact className="text-8xl text-slate-50" />
				</div>
				<div className="flex flex-col justify-center items-center bg-red-500 border-b-2 border-r-2 border-red-800 px-3 py-6 shadow shadow-red-800 hover:shadow-md">
					<h3 className="text-slate-50 pb-4">Tailwind</h3>
					<SiTailwindcss className="text-8xl text-slate-50" />
				</div>
			</div>
		</div>
	)
}

export default Skills
