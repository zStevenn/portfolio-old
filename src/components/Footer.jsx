function Footer() {
	return (
		<footer className="bg-neutral-900">
			<div className="bg-red-500 flex flex-col sm:flex-row justify-center items-center px-6 py-2 text-slate-50">
				<p>Je kunt mij ook vinden op -&gt; </p>
				<div>
					<span>Icon 1</span>
					<span>Icon 2</span>
					<span>Icon 3</span>
				</div>
			</div>
			<h3 className="text-lg text-gray-300 text-center">Steven Li</h3>
			<p className="text-gray-300 text-center">&copy; Copyright 2023</p>
			<p className="text-gray-300 text-center">All rights reserved.</p>
			<p className="text-gray-300 text-center">
				Designed, published and created by Steven Li.
			</p>
		</footer>
	)
}

export default Footer
