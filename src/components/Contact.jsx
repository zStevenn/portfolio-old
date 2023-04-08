import { MdOutlineMail } from "react-icons/md"
import { BsLinkedin, BsWhatsapp, BsGithub, BsDiscord } from "react-icons/bs"

function Contact() {
	return (
		<div className="bg-neutral-900">
			<div
				className="px-8 py-20 grid gap-4 md:grid-cols-2 min-h-screen container mx-auto"
				id="contact"
			>
				<h1 className="text-neutral-100 text-2xl font-semibold md:col-span-2">
					# Contact
				</h1>
				<div className="grid grid-cols-1 gap-8">
					<div className="text-neutral-100 lg:col-span-2">
						<p className="tracking-wide mb-4">
							<ul className="grid gap-1">
								<li>Steven Li</li>
								<li>Driebergen-Rijsenburg</li>
								<li className="mb-4">Utrecht, Nederland</li>
								<li>
									<a href="mailto:stevenli.inbox@gmail.com" target="_blank">
										<MdOutlineMail className="inline mr-2" />
										stevenli.inbox@gmail.com
									</a>
								</li>
								<li>
									<BsWhatsapp className="inline mr-2" />
									(06) - 409 17 668
								</li>
							</ul>
						</p>
					</div>
					<ul className="flex flex-row flex-nowrap gap-4">
						<li className="grid place-items-center hover:scale-110 transition-all">
							<a href="https://www.linkedin.com/in/zstevenn/" target="_blank">
								<BsLinkedin className="inline text-neutral-100 text-2xl" />
							</a>
						</li>
						<li className="grid place-items-center hover:scale-110 transition-all">
							<a href="https://github.com/zStevenn" target="_blank">
								<BsGithub className="inline text-neutral-100 text-2xl" />
							</a>
						</li>
						<li className="grid place-items-center hover:scale-110 transition-all">
							<a href="https://github.com/zStevenn" target="_blank">
								<BsGithub className="inline text-neutral-100 text-2xl" />
							</a>
						</li>
						<li className="grid place-items-center hover:scale-110 transition-all">
							<a href="https://github.com/zStevenn" target="_blank">
								<BsGithub className="inline text-neutral-100 text-2xl" />
							</a>
						</li>
					</ul>
				</div>
				<div className="text-neutral-100 text-2xl text-center py-4 md:hidden">
					Of
				</div>
				<form className="bg-neutral-100 p-6 rounded">
					<h3 className="text-neutral-900 text-lg font-semibold text-center">
						Stuur een bericht
					</h3>
					<label className="block text-neutral-900 mt-2">Naam</label>
					<input
						type="text"
						className="p-1 bg-neutral-400 border-b-2 border-r-2 border-neutral-500 rounded text-neutral-100 mb-2 w-full"
					/>
					<label className="block text-neutral-900 mt-2">Email</label>
					<input
						type="text"
						className="p-1 bg-neutral-400 border-b-2 border-r-2 border-neutral-500 rounded text-neutral-100 mb-2 w-full"
					/>
					<label className="block text-neutral-900 mt-2">Bericht</label>
					<textarea className="p-1 bg-neutral-400 border-b-2 border-r-2 border-neutral-800 rounded text-neutral-100 mb-2 w-full" />
					<button
						type="button"
						value="submit"
						className="block px-4 py-2 bg-red-500 border-b-2 border-r-2 border-red-800 rounded text-neutral-100 mx-auto"
					>
						Verstuur bericht
					</button>
				</form>
			</div>
		</div>
	)
}

export default Contact
