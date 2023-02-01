import HeroImage from "../assets/svg/profile.svg"

function Hero() {
	return (
		<div className="grid grid-cols-1 gap-8 md:grid-cols-2 place-items-center py-16 h-screen" id="hero">
			<div className="text-slate-50 text-center">
				<p className="text-2xl md:text-3xl xl:text-5xl mb-2">Hey!</p>
				<h1 className="text-3xl md:text-4xl xl:text-6xl tracking-wide mb-2">
					Ik ben <strong className="text-red-800">Steven Li,</strong>
				</h1>
				<h1 className="text-3xl md:text-4xl xl:text-6xl tracking-wide mb-4">Softwaredeveloper.</h1>
				<div className="flex justify-center gap-8">
					<a
						href="#contact"
						className="px-1 py-2 bg-red-500 border-b-2 border-r-2 border-red-800 text-slate-50 text-lg"
					>
						Contact
					</a>
					<a
						href="#projecten"
						className="px-1 py-2 bg-gray-500 border-b-2 border-r-2 border-gray-800 text-slate-50 text-lg"
					>
						Projecten
					</a>
				</div>
			</div>
			<img src={HeroImage} className="grayscale" alt="Steven Li" />
		</div>
	)
}

export default Hero
