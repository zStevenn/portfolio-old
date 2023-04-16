import { SiReact, SiTailwindcss, SiFigma, SiVite } from "react-icons/si"
import { useFadeIn } from "../hooks/useFadeIn"

function Aboutme() {
	const titleRef = useFadeIn("top", 500, 1)
	const paragraphRef = useFadeIn("left", 1000, 0)
	const iconRef = useFadeIn("right", 1000, 0)

	return (
		<div className="bg-neutral-100 ">
			<div
				className="container mx-auto max-w-screen-lg px-2 py-10 sm:px-4 text-neutral-900"
				id="overmij"
			>
				<h1
					ref={titleRef}
					className="opacity-0 text-neutral-900 text-2xl font-semibold pb-10"
				>
					# Over mij
				</h1>
				<div ref={paragraphRef} className="opacity-0 grid gap-4 pb-4 sm:pb-8">
					<p>
						Hallo, en welkom op mijn webportfolio! Ik ben{" "}
						<span className="font-semibold">Steven</span>, een gepassioneerde
						junior developer die in{" "}
						<span className="underline font-bold">juli 2023</span> zijn diploma
						Software developer mag ophalen!
					</p>
					<p>
						In de afgelopen 3 jaar heb ik veel ervaring opgedaan tijdens mijn
						studie en stage. Naast alle technische kennis die ik heb opgedaan
						zoals o.a.:
					</p>
					<ul className="list-disc ml-4">
						<li className="mb-4">HTML, CSS, JavaScript</li>
						<li className="mb-4">React & Vue</li>
						<li className="mb-4">Component based coderen</li>
						<li className="mb-4">TailwindCSS & BEM Methodology</li>
						<li className="mb-4">PHP (OOP) en MySQL</li>
						<li className="mb-4">UI Design</li>
						<li className="mb-4">Mobile first & responsive</li>
					</ul>
					<p>
						Heb ik ook veel ervaring opgedaan in het werken in teamverband in
						SCRUM / Agile werkmethoden en communiceren met klanten. Tot op heden
						ben ik bezig met het maken van meerdere persoonlijke applicaties om
						mijn front-end skills te verbeteren en vaardiger te worden met de
						meest gebruikte frameworks en libraries.
					</p>
					<p>
						In mijn vrije tijd ben ik vaak fanatiek aan het fitnessen,
						voornamelijk gewichtstraining, waarbij ik ook een voedingsschema en
						supplementen gebruik om mijn doelen te bereiken.
					</p>
					<p>
						Recent ben ik ook steeds meer geïnteresseerd geraakt in reizen en
						het ontdekken van nieuwe culturen. Deze interesse is begonnen na
						mijn recente bezoek aan mijn familie in China. Ik ben van plan om in
						de toekomst veel meer te gaan reizen en nieuwe plekken te ontdekken.
					</p>
					<p>Gewerkt met libraries en frameworks zoals:</p>
				</div>

				<div
					className="opacity-0 flex flex-col flex-wrap md:flex-row gap-4"
					ref={iconRef}
				>
					<div className="grid place-items-center rounded bg-neutral-900 border-b-2 border-r-2 border-neutral-900 px-3 py-6 shadow-neutral-900 shadow-md">
						<h3 className="text-neutral-100 pb-4">Figma</h3>
						<SiFigma className="text-5xl sm:text-6xl md:text-8xl text-slate-50" />
					</div>
					<div className="grid place-items-center rounded bg-neutral-900 border-b-2 border-r-2 border-neutral-900 px-3 py-6 shadow-neutral-900 shadow-md">
						<h3 className="text-neutral-100 pb-4">Vite</h3>
						<SiVite className="text-5xl sm:text-6xl md:text-8xl text-slate-50" />
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
