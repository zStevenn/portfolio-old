function Contact() {
	return (
		<div
			className="grid grid-cols-1 place-content-center gap-4 py-4 min-h-screen"
			id="contact"
		>
			<h1 className="text-slate-50 text-center text-2xl font-semibold py-8">
				<span className="text-slate-200 pr-2">#</span>Contact
			</h1>
			<div className="flex flex-col md:flex-row gap-4">
				<div className="text-slate-50">
					<p>
						Bedankt dat je mijn contactpagina bezoekt! Als je vragen hebt of
						interesse hebt in mijn werk, aarzel dan niet om contact met me op te
						nemen. Je kunt me bereiken via e-mail of via een van de social
						media-links hieronder. Ik kijk ernaar uit om van je te horen!
					</p>
					<ul>
						<li>(icon) stevenli.inbox@gmail.com</li>
						<li>(icon) (06) - 409 17 668 (WhatsApp)</li>
						<li>(icon) LinkedIn</li>
					</ul>
				</div>
				<form className="bg-red-500 p-6">
					<h3 className="text-white text-lg font-semibold text-center">
						Contactformulier
					</h3>
					<label className="block text-slate-50 mt-2">Naam</label>
					<input
						type="text"
						className="bg-red-300 border-b-2 border-r-2 border-red-800 text-slate-50 mb-2 w-full"
					/>
					<label className="block text-slate-50 mt-2">Emailadres</label>
					<input
						type="text"
						className="bg-red-300 border-b-2 border-r-2 border-red-800 text-slate-50 mb-2 w-full"
					/>
					<label className="block text-slate-50 mt-2">Bericht</label>
					<textarea className="bg-red-300 border-b-2 border-r-2 border-red-800 text-slate-50 mb-2 w-full" />
					<button
						type="button"
						value="submit"
						className="block px-1 py-2 bg-gray-500 border-b-2 border-r-2 border-gray-800 text-slate-50 mx-auto"
					>
						Verstuur bericht
					</button>
				</form>
			</div>
		</div>
	)
}

export default Contact
