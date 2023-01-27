function Skills() {
	return (
		<div
			className="grid grid-cols-1 place-content-center gap-4 my-4 min-h-screen"
			id="vaardigheden"
		>
			<h1 className="text-slate-50 text-center text-2xl font-semibold py-6">
				<span className="text-slate-200 pr-2">#</span>Vaardigheden
			</h1>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
				<div className="bg-red-500 border-b-2 border-r-2 border-red-800 px-3 py-6 shadow shadow-red-800 hover:shadow-md">
					<p className="text-slate-50 text-center pb-4">HTML5</p>
					<img src="https://loremflickr.com/300/300" />
				</div>
				<div className="bg-red-500 border-b-2 border-r-2 border-red-800 px-3 py-6 shadow shadow-red-800 hover:shadow-md">
					<p className="text-slate-50 text-center pb-4">CSS</p>
					<img src="https://loremflickr.com/300/300" />
				</div>
				<div className="bg-red-500 border-b-2 border-r-2 border-red-800 px-3 py-6 shadow shadow-red-800 hover:shadow-md">
					<p className="text-slate-50 text-center pb-4">Javascript</p>
					<img src="https://loremflickr.com/300/300" />
				</div>
				<div className="bg-red-500 border-b-2 border-r-2 border-red-800 px-3 py-6 shadow shadow-red-800 hover:shadow-md">
					<p className="text-slate-50 text-center pb-4">Libraries</p>
					<img src="https://loremflickr.com/300/300" />
				</div>
			</div>
		</div>
	)
}

export default Skills
