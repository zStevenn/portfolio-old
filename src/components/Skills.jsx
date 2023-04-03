import {
	SiReact,
	SiTailwindcss,
	SiFigma,
	SiNetlify,
} from "react-icons/si"

function Skills() {
	return (
		<div className="my-24 bg-white" id="overmij">
			<h1 className="text-neutral-900"># Over mij</h1>
			<ul className="list-disc">
				<li>Momenteel bezig met mijn opleiding Softwaredeveloper aan MBO Utrecht waar ik mijn diploma verwacht in Juni 2023.</li>
				<li>Mijn doel is om innovatieve en effectieve oplossingen te creëren.</li>
				<li>Ik ben een nauwkeurige probleemoplosser en effectieve teamspeler.</li>
				<li>Altijd op zoek naar nieuwe manieren om mijn vaardigheden te verbeteren en kennis uit te breiden.</li>
				<li>Ervaring in HTML, CSS, JavaScript, PHP en UI/UX design.</li>
			</ul>
			<p className="text-neutral-900">Gewerkt met programma's, libraries en frameworks zoals:<p>
			<div className="grid grid-cols-2 gap-8">
				<div className="grid place-items-center bg-neutral-900 border-b-2 border-r-2 border-neutral-800 px-3 py-6 shadow shadow-neutral-800 hover:shadow-md">
					<h3 className="text-neutral-50 pb-4">Figma</h3>
					<SiFigma className="text-8xl text-slate-50" />
				</div>
				<div className="grid place-items-center bg-neutral-900 border-b-2 border-r-2 border-neutral-800 px-3 py-6 shadow shadow-neutral-800 hover:shadow-md">
					<h3 className="text-neutral-50 pb-4">Netlify</h3>
					<SiNetlify className="text-8xl text-slate-50" />
				</div>
				<div className="grid place-items-center bg-neutral-900 border-b-2 border-r-2 border-neutral-800 px-3 py-6 shadow shadow-neutral-800 hover:shadow-md">
					<h3 className="text-neutral-50 pb-4">React</h3>
					<SiReact className="text-8xl text-slate-50" />
				</div>
				<div className="grid place-items-center bg-neutral-900 border-b-2 border-r-2 border-neutral-800 px-3 py-6 shadow shadow-neutral-800 hover:shadow-md">
					<h3 className="text-neutral-50 pb-4">Tailwind</h3>
					<SiTailwindcss className="text-8xl text-slate-50" />
				</div>
			</div>
		</div>
	)
}

export default Skills
