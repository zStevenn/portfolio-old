import HeroImage from "../assets/static/profile.png"

function Hero() {
	return (
		<div
			className="grid grid-cols-1 gap-8 md:grid-cols-2 pb-16 pt-32 sm:place-items-center"
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
				<div className="flex justify-start gap-8">
					<a
						download={"Steven Li CV"}
						href="/src/assets/static/Steven_Li_CV_NL.pdf"
						className="px-1 py-2 bg-red-500 border-b-2 border-r-2 border-red-800 text-slate-50 text-lg"
					>
						Download CV
					</a>
					<a
						href="#projecten"
						className="px-1 py-2 bg-gray-500 border-b-2 border-r-2 border-gray-800 text-slate-50 text-lg"
					>
						Projecten
					</a>
				</div>
			</div>
			<img src={HeroImage} alt="Steven Li" className="max-w-sm w-full" />
		</div>
	)
}

export default Hero
