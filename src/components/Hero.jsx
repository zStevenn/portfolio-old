import HeroImage from "../assets/svg/profile.svg"

function Hero() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center py-16">
			<div className="text-slate-50 text-center" id="hero">
				<p className="text-2xl mb-2">Hey!</p>
				<h1 className="text-3xl tracking-wide mb-2">
					Ik ben <strong className="text-red-800">Steven Li,</strong>
				</h1>
				<h1 className="text-3xl tracking-wide mb-4">Software developer.</h1>
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
			<img src={HeroImage} alt="Steven Li" />
		</div>
	)
}

export default Hero
