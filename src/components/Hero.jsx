import HeroImage from "../assets/static/profile.png"
import cv from "../assets/static/Steven_Li_CV_NL.pdf"
import { Link } from "react-scroll"

function Hero() {
	return (
		<div
			className="grid grid-cols-1 gap-8 md:grid-cols-2 px-8 pb-16 pt-32 sm:place-items-center"
			id="hero"
		>
			<div className="text-slate-50 w-full grid sm:place-items-center">
				<p className="text-2xl md:text-3xl xl:text-5xl mb-2">Hey!</p>
				<h1 className="text-3xl md:text-4xl xl:text-6xl tracking-wide mb-2">
					Ik ben <strong className="text-red-800">Steven Li,</strong>
				</h1>
				<h1 className="text-3xl md:text-4xl xl:text-6xl tracking-wide mb-4">
					Softwaredeveloper.
				</h1>
				<div className="flex gap-4">
					<a
						download="Steven_Li_CV_NL.pdf"
						href={cv}
						className="px-3 py-2 rounded bg-red-500 border-b-2 border-r-2 border-red-900 text-slate-50 text-lg"
					>
						Download CV
					</a>
					<Link
					to={"projecten"}
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}
					className="px-3 py-2 cursor-pointer rounded bg-gray-500 border-b-2 border-r-2 border-gray-900 text-slate-50 text-lg"
				>
					Projecten
				</Link>
				</div>
			</div>
			<img src={HeroImage} className="grayscale max-w-xs" alt="Steven Li" />
		</div>
	)
}

export default Hero
