import { SiReact, SiTailwindcss, SiFigma, SiNetlify } from "react-icons/si"

function Aboutme() {
	return (
		<div className="bg-neutral-100 grid place-items-center">
			<div className="px-8 py-20 my-2 flex flex-col justify-center gap-4 md:gap-8 min-h-screen container mx-auto" id="overmij">
				<h1 className="text-neutral-900 text-2xl font-semibold"># Over mij</h1>
				<ul className="list-disc ml-4">
					<li>
						Momenteel bezig met mijn opleiding Softwaredeveloper aan MBO Utrecht
						waar ik mijn diploma verwacht in Juni 2023.
					</li>
					<li>
						Mijn doel is om innovatieve en effectieve oplossingen te creëren.
					</li>
					<li>
						Ik ben een nauwkeurige probleemoplosser en effectieve teamspeler.
					</li>
					<li>
						Altijd op zoek naar nieuwe manieren om mijn vaardigheden te
						verbeteren en kennis uit te breiden.
					</li>
					<li>Ervaring in HTML, CSS, JavaScript, PHP en UI/UX design.</li>
				</ul>
				<p className="text-neutral-900">
					Gewerkt met programma's, libraries en frameworks zoals:
				</p>

				<div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8">
					<div className="grid place-items-center rounded bg-neutral-900 border-b-2 border-r-2 border-neutral-900 px-3 py-6 shadow-neutral-900 shadow-md">
						<h3 className="text-neutral-100 pb-4">Figma</h3>
						<SiFigma className="text-5xl sm:text-6xl md:text-8xl text-slate-50" />
					</div>
					<div className="grid place-items-center rounded bg-neutral-900 border-b-2 border-r-2 border-neutral-900 px-3 py-6 shadow-neutral-900 shadow-md">
						<h3 className="text-neutral-100 pb-4">Netlify</h3>
						<SiNetlify className="text-5xl sm:text-6xl md:text-8xl text-slate-50" />
					</div>
					<div className="grid place-items-center rounded bg-neutral-900 border-b-2 border-r-2 border-neutral-900 px-3 py-6 shadow-neutral-900 shadow-md">
						<h3 className="text-neutral-100 pb-4">React</h3>
						<SiReact className="text-5xl sm:text-6xl md:text-8xl text-slate-50" />
					</div>
					<div className="grid place-items-center rounded bg-neutral-900 border-b-2 border-r-2 border-neutral-900 px-3 py-6 shadow-neutral-900 shadow-md">
						<h3 className="text-neutral-100 pb-4">Tailwind</h3>
						<SiTailwindcss className="text-5xl sm:text-6xl md:text-8xl text-slate-50" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Aboutme
