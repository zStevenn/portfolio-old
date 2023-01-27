function Hero() {
	return (
		<div
			className="md:flex md:justify-center md:items-center md:gap-16 px-6 py-4"
			id="hero"
		>
			<div className="flex flex-col justify-center align-center text-slate-50 py-8">
				<p className="text-2xl">Hey!</p>
				<h1 className="text-3xl tracking-wide">
					Ik ben <strong className="text-red-800">Steven Li,</strong>
				</h1>
				<h1 className="text-3xl tracking-wide">Softwaredeveloper</h1>
				<div className="flex gap-8">
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
		</div>
	)
}

export default Hero
