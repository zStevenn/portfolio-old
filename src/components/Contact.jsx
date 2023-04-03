import { MdOutlineMail } from "react-icons/md"
import { BsLinkedin, BsWhatsapp, BsGithub, BsDiscord } from "react-icons/bs"

function Contact() {
	return (
		<div className="my-24 bg-neutral-900" id="contact">
			<h1 className="text-slate-50 text-2xl font-semibold py-4"># Contact</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-center gap-8">
				<div className="text-slate-50 lg:col-span-2">
					<p className="tracking-wide mb-4">
						Steven Li Driebergen-Rijsenburg Utrecht, Nederland
						<a href="mailto:stevenli.inbox@gmail.com" target="_blank">
							<MdOutlineMail className="inline mr-2" />
							stevenli.inbox@gmail.com
						</a>
						<BsWhatsapp className="inline mr-2" /> (06) - 409 17 668
					</p>
				</div>
				<ul className="flex flex-row justify-between flex-nowrap gap-8">
					<li className="rounded p-4 hover:scale-110">
						<a href="https://www.linkedin.com/in/zstevenn/" target="_blank">
							<BsLinkedin className="inline mr-2" />
						</a>
					</li>
					<li className="rounded p-4 hover:scale-110">
						<a href="https://github.com/zStevenn" target="_blank">
							<BsGithub className="inline mr-2" />
						</a>
					</li>
					<li className="rounded p-4 hover:scale-110">
						<a href="https://github.com/zStevenn" target="_blank">
							<BsGithub className="inline mr-2" />
						</a>
					</li>
					<li className="rounded p-4 hover:scale-110">
						<a href="https://github.com/zStevenn" target="_blank">
							<BsGithub className="inline mr-2" />
						</a>
					</li>
				</ul>
			</div>
			<div className="text-slate-50 text-2xl text-center">Of</div>

			<form className="bg-neutral-50 p-6 rounded">
				<h3 className="text-neutral-900 text-lg font-semibold text-center">
					Stuur een bericht
				</h3>
				<label className="block text-neutral-900 mt-2">Naam</label>
				<input
					type="text"
					className="bg-neutral-400 border-b-2 border-r-2 border-neutral-800 rounded text-slate-50 mb-2 w-full"
				/>
				<label className="block text-neutral-900 mt-2">Email</label>
				<input
					type="text"
					className="bg-neutral-400 border-b-2 border-r-2 border-neutral-800 rounded text-slate-50 mb-2 w-full"
				/>
				<label className="block text-neutral-900 mt-2">Bericht</label>
				<textarea className="bg-neutral-400 border-b-2 border-r-2 border-neutral-800 rounded text-slate-50 mb-2 w-full" />
				<button
					type="button"
					value="submit"
					className="block px-4 py-2 bg-red-500 border-b-2 border-r-2 border-red-800 rounded text-slate-50 mx-auto"
				>
					Verstuur bericht
				</button>
			</form>
		</div>
	)
}

export default Contact
