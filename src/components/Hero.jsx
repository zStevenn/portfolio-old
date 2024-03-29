import HeroImage from "../assets/static/profile.png"
import cv from "../assets/static/Steven_Li_CV_NL.pdf"
import { Link } from "react-scroll"
import { useFadeIn } from "../hooks/useFadeIn"
import { BsCodeSlash } from "react-icons/bs"
import { FaGraduationCap } from "react-icons/fa"
import { MdWork } from "react-icons/md"

function Hero() {
	const textRef = useFadeIn("left", 500, 1)
	const imageRef = useFadeIn("right", 500, 1)
	const achievementOneRef = useFadeIn("bottom", 1000, 1)
	const achievementTwoRef = useFadeIn("bottom", 1000, 1)
	const achievementThreeRef = useFadeIn("bottom", 1000, 1)

	return (
		<div className="container mx-auto max-w-screen-lg">
			<div
				className="flex flex-col sm:flex-row justify-between gap-4 px-2 py-4 sm:px-4 pt-10"
				id="hero"
			>
				<div ref={textRef} className="text-neutral-100 opacity-0 grid gap-4">
					<div className="relative">
						<div className="absolute top-1/2 left-0 w-14 h-0.5 bg-neutral-100 rounded-full"></div>
						<h1 className="text-lg md:text-3xl xl:text-4xl ml-16">Hey!</h1>
					</div>
					<h2 className="text-2xl md:text-4xl xl:text-5xl tracking-wide">
						Ik ben <strong className="text-red-800">Steven Li,</strong>
					</h2>
					<h2 className="text-2xl md:text-4xl xl:text-5xl tracking-wide mb-2">
						Softwaredeveloper.
					</h2>
					<div>
						<a
							download="Steven_Li_CV_NL.pdf"
							href={cv}
							className="block mb-4 px-3 py-2 w-fit rounded bg-red-500 border-b-2 border-r-2 border-red-700 text-neutral-100 md:text-lg"
						>
							Download CV
						</a>
						<Link
							to={"overmij"}
							spy={true}
							smooth={true}
							offset={-55}
							duration={500}
							className="px-3 py-2 w-fit cursor-pointer rounded bg-gray-500 border-b-2 border-r-2 border-gray-700 text-neutral-100 md:text-lg"
						>
							Over mij
						</Link>
					</div>
				</div>
				<img
					ref={imageRef}
					src={HeroImage}
					alt="Steven Li"
					className="max-w-xs opacity-0"
				/>
			</div>
			{/* Bullet points of my achievements */}
			<div className="flex flex-col md:grid md:grid-cols-3 gap-4 px-2 py-4 sm:px-4 text-neutral-100 mb-10">
				<div
					ref={achievementOneRef}
					className="opacity-0 flex md:flex-col md:justify-center md:text-center gap-4 items-center p-4 bg-gray-500 rounded-md"
				>
					<BsCodeSlash className="text-3xl" />
					<p className="text-base">Gewerkt aan 3+ projecten</p>
				</div>
				<div
					ref={achievementTwoRef}
					className="opacity-0 flex md:flex-col md:justify-center md:text-center gap-4 items-center p-4 bg-gray-500 rounded-md"
				>
					<FaGraduationCap className="text-3xl" />
					<p className="text-base">Studie softwaredeveloper afgerond</p>
				</div>
				<div
					ref={achievementThreeRef}
					className="opacity-0 flex md:flex-col md:justify-center md:text-center gap-4 items-center p-4 bg-gray-500 rounded-md"
				>
					<MdWork className="text-3xl" />
					<p className="text-base">
						Stagiair softwaredeveloper @ Sellvation Marketing B.V.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Hero
