import Title from "./Title"
import { MdOutlineMail } from "react-icons/md"
import { BsLinkedin, BsWhatsapp } from "react-icons/bs"

function Contact() {
	return (
		<div className="pb-40" id="contact">
			<Title text="Contact" />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-center gap-8">
				<div className="text-slate-50 lg:col-span-2">
					<p className="tracking-wide mb-4">
						Bedankt dat je mijn contactpagina bezoekt! Als je vragen hebt of
						interesse hebt in mijn werk, aarzel dan niet om contact met me op te
						nemen. Je kunt me bereiken via e-mail of via een van de social
						media-links hieronder. Ik kijk ernaar uit om van je te horen!
					</p>
					<ul>
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
						<li>
							<a href="https://www.linkedin.com/in/zstevenn/" target="_blank">
								<BsLinkedin className="inline mr-2" /> LinkedIn
							</a>
						</li>
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
