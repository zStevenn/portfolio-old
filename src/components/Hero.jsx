import HeroImage from "../assets/static/profile.png"
import cv from "../assets/static/Steven_Li_CV_NL.pdf"
import { Link } from "react-scroll"

function Hero() {
	return (
		<div
			className="grid grid-cols-1 snap-center gap-4 py-20 my-2 shadow shadow-neutral-900 sm:grid-cols-2 px-8 sm:place-items-center min-h-screen"
			id="hero"
		>
			<div className="text-neutral-100 grid gap-1 sm:gap-2">
				<p className="text-2xl md:text-3xl xl:text-5xl">Hey!</p>
				<h1 className="text-3xl md:text-4xl xl:text-6xl tracking-wide">
					Ik ben <strong className="text-red-800">Steven Li,</strong>
				</h1>
				<h1 className="text-3xl md:text-4xl xl:text-6xl tracking-wide mb-1">
					Softwaredeveloper.
				</h1>
				<div className="flex flex-col sm:flex-row gap-4">
					<a
						download="Steven_Li_CV_NL.pdf"
						href={cv}
						className="px-3 py-2 w-fit rounded bg-red-500 border-b-2 border-r-2 border-red-900 text-neutral-100 text-base"
					>
						Download CV
					</a>
					<Link
						to={"projecten"}
						spy={true}
						smooth={true}
						offset={-55}
						duration={500}
						className="px-3 py-2 w-fit cursor-pointer rounded bg-gray-500 border-b-2 border-r-2 border-gray-900 text-neutral-100 text-base"
					>
						Projecten
					</Link>
				</div>
			</div>
			<img
				src={HeroImage}
				className="grayscale max-w-xs w-full"
				alt="Steven Li"
			/>
			{/* <div className="sm:col-span-2 text-neutral-100">
				knoppies
			</div> */}
		</div>
	)
}

export default Hero
