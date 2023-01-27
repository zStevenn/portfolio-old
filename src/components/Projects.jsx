function Projects() {
	return (
		<div
			className="grid grid-cols-1 place-content-center gap-4 py-4 min-h-screen"
			id="projecten"
		>
			<h1 className="text-slate-50 text-center text-2xl font-semibold py-8">
				<span className="text-slate-200 pr-2">#</span>Projecten
			</h1>
			<div className="grid grid-cols-2 lg:grid-cols-4 place-content-center gap-8">
				<div>
					<h2 className="text-slate-50 text-center my-4 text-xl">
						Project titel 1
					</h2>
					<img src="https://via.placeholder.com/600x600" />
				</div>
				<div>
					<h2 className="text-slate-50 text-center my-4 text-xl">
						Project titel 1
					</h2>
					<img src="https://via.placeholder.com/600x600" />
				</div>
			</div>
		</div>
	)
}

export default Projects
