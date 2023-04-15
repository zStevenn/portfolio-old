import HeroImage from "../assets/static/profile.png"
import cv from "../assets/static/Steven_Li_CV_NL.pdf"
import { Link } from "react-scroll"
import { useFadeIn } from "../hooks/useFadeIn"
import { BsCodeSlash } from "react-icons/bs"
import { FaGraduationCap } from "react-icons/fa"
import { MdWork } from "react-icons/md"

function Hero() {
	const textRef = useFadeIn("left", 500, 0)
	const imageRef = useFadeIn("right", 500, 0)
	const achievementOneRef = useFadeIn("bottom", 500, 1)
	const achievementTwoRef = useFadeIn("bottom", 500, 0.5)
	const achievementThreeRef = useFadeIn("bottom", 500, 0)

	return (
		<>
			<div
				className="bg-neutral-900 flex flex-col justify-center gap-4 p-4 mt-10"
				id="hero"
			>
				<div ref={textRef} className="text-neutral-100">
					<h1 className="text-lg md:text-3xl xl:text-5xl">Hey!</h1>
					<h2 className="text-2xl md:text-4xl xl:text-6xl tracking-wide">
						Ik ben <strong className="text-red-800">Steven Li,</strong>
					</h2>
					<h2 className="text-2xl md:text-4xl xl:text-6xl tracking-wide mb-2">
						Softwaredeveloper.
					</h2>
					<div className="flex flex-col gap-4">
						<a
							download="Steven_Li_CV_NL.pdf"
							href={cv}
							className="px-3 py-2 w-fit rounded bg-red-500 border-b-2 border-r-2 border-red-900 text-neutral-100 text-base"
						>
							Download CV
						</a>
						<Link
							to={"overmij"}
							spy={true}
							smooth={true}
							offset={-55}
							duration={500}
							className="px-3 py-2 w-fit cursor-pointer rounded bg-gray-500 border-b-2 border-r-2 border-gray-900 text-neutral-100 text-base"
						>
							Over mij
						</Link>
					</div>
				</div>
				<img
					ref={imageRef}
					src={HeroImage}
					alt="Steven Li"
					className="max-w-sm"
				/>
			</div>
			{/* Bullet points of my achievements */}
			<div className="flex flex-col gap-4 p-4 text-neutral-100 mb-10">
				<div
					ref={achievementOneRef}
					className="flex gap-4 items-center p-4 bg-gray-500 rounded-md"
				>
					<BsCodeSlash className="text-3xl" />
					<p className="text-base">Gewerkt aan 3+ projecten</p>
				</div>
				<div
					ref={achievementTwoRef}
					className="flex gap-4 items-center p-4 bg-gray-500 rounded-md"
				>
					<FaGraduationCap className="text-3xl" />
					<p className="text-base">Studie softwaredeveloper afgerond</p>
				</div>
				<div
					ref={achievementThreeRef}
					className="flex gap-4 items-center p-4 bg-gray-500 rounded-md"
				>
					<MdWork className="text-3xl" />
					<p className="text-base">
						Stagiair softwaredeveloper @ Sellvation Marketing B.V.
					</p>
				</div>
			</div>
		</>
	)
}

export default Hero
