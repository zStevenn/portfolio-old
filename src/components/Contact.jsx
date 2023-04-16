import { MdOutlineMail } from "react-icons/md"
import { BsLinkedin, BsWhatsapp, BsGithub, BsDiscord } from "react-icons/bs"
import { useFadeIn } from "../hooks/useFadeIn"
import { useState } from "react"

// Encode data to be sent to Netlify
const encode = data => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&")
}

function Contact() {
	const titleRef = useFadeIn("top", 500, 0)
	const paragraphRef = useFadeIn("left", 1000, 0)
	const dividerRef = useFadeIn("left", 1000, 0)
	const formRef = useFadeIn("right", 1000, 0)
	const [showPopup, setShowPopup] = useState(false)
	const [popupMessage, setPopupMessage] = useState("")

	//Create an initial form state
	const initialState = {
		name: "",
		email: "",
		message: "",
	}

	// Create state for form
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	})

	// Handle form submission
	const handleSubmit = e => {
		// Destructure the formState to get the form fields
		const { name, email, message } = formState

		// Check if all fields are filled in
		if (!name || !email || !message) {
			// If any of the fields are empty, display an error message
			setShowPopup(true)
			setPopupMessage(
				"Vul a.u.b. alle velden in. Dit helpt ons met het verwerken van uw bericht. Hartelijk bedankt!"
			)
			return
		}

		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...formState }),
		})
			.then(() => {
				setShowPopup(true)
				setPopupMessage("Je bericht is successvol verstuurt. Dank je wel!")
				setFormState(initialState)
			})
			.catch(error => {
				setShowPopup(true)
				setPopupMessage(error)
			})

		e.preventDefault()
	}

	// Handle form input changes
	const handleChange = e =>
		setFormState({ ...formState, [e.target.name]: e.target.value })

	return (
		<>
			{showPopup && (
				<div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-neutral-900 bg-opacity-50 z-50">
					<div className="bg-neutral-100 p-4 rounded-md shadow-md">
						<p className="text-neutral-900">{popupMessage}</p>
						<button
							className="bg-neutral-900 text-neutral-100 p-2 rounded-md shadow-md hover:bg-neutral-800 transition-all"
							onClick={() => setShowPopup(false)}
						>
							Ok
						</button>
					</div>
				</div>
			)}

			<div className="bg-neutral-900">
				<div
					className="px-2 sm:px-4 py-10 container mx-auto max-w-screen-lg flex flex-col justify-center gap-4"
					id="contact"
				>
					<h1
						ref={titleRef}
						className="opacity-0 text-neutral-100 text-2xl font-semibold md:col-span-2"
					>
						# Contact
					</h1>
					<div className="md:grid md:grid-cols-2 md:gap-8">
						<div ref={paragraphRef} className="opacity-0 text-neutral-100 flex flex-col justify-center">
							<ul className="grid gap-1 tracking-wide mb-4">
								<li>Steven Li</li>
								<li>Driebergen-Rijsenburg</li>
								<li className="mb-4">Utrecht, Nederland</li>
								<li>
									<a
										href="mailto:stevenli.inbox@gmail.com"
										target="_blank"
										rel="noopener noreferrer"
									>
										<MdOutlineMail className="inline mr-2" />
										stevenli.inbox@gmail.com
									</a>
								</li>
								<li>
									<a
										href="callto:0640917668"
										target="_blank"
										rel="noopener noreferrer"
									>
										<BsWhatsapp className="inline mr-2" />
										(06) - 409 17 668
									</a>
								</li>
							</ul>
							<ul className="flex flex-row flex-nowrap gap-4">
								<li className="grid place-items-center hover:scale-110 transition-all">
									<a
										href="https://www.linkedin.com/in/zstevenn/"
										target="_blank"
									>
										<BsLinkedin className="inline text-neutral-100 text-2xl" />
									</a>
								</li>
								<li className="grid place-items-center hover:scale-110 transition-all">
									<a href="https://github.com/zStevenn" target="_blank">
										<BsGithub className="inline text-neutral-100 text-2xl" />
									</a>
								</li>
								{/* <li className="grid place-items-center hover:scale-110 transition-all">
								<a href="https://github.com/zStevenn" target="_blank">
									<BsGithub className="inline text-neutral-100 text-2xl" />
								</a>
							</li>
							<li className="grid place-items-center hover:scale-110 transition-all">
								<a href="https://github.com/zStevenn" target="_blank">
									<BsGithub className="inline text-neutral-100 text-2xl" />
								</a>
							</li> */}
							</ul>
						</div>

						<div
							ref={dividerRef}
							className="opacity-0 text-neutral-100 text-2xl text-center py-4 md:hidden"
						>
							Of
						</div>
						<form
							onSubmit={handleSubmit}
							ref={formRef}
							className="opacity-0 bg-neutral-100 p-6 rounded"
						>
							<h3 className="text-neutral-900 text-lg font-semibold text-center">
								Stuur een bericht
							</h3>
							<label className="block text-neutral-900 mt-2">Naam</label>
							<input
								name="name"
								value={formState.name}
								onChange={handleChange}
								type="text"
								className="p-1 bg-neutral-400 border-b-2 border-r-2 border-neutral-500 rounded text-neutral-100 mb-2 w-full"
							/>
							<label className="block text-neutral-900 mt-2">Email</label>
							<input
								name="email"
								value={formState.email}
								onChange={handleChange}
								type="text"
								className="p-1 bg-neutral-400 border-b-2 border-r-2 border-neutral-500 rounded text-neutral-100 mb-2 w-full"
							/>
							<label className="block text-neutral-900 mt-2">Bericht</label>
							<textarea
								name="message"
								value={formState.message}
								onChange={handleChange}
								className="p-1 bg-neutral-400 border-b-2 border-r-2 border-neutral-800 rounded text-neutral-100 mb-2 w-full"
							/>
							<button
								type="submit"
								className="block px-4 py-2 bg-red-500 border-b-2 border-r-2 border-red-800 rounded text-neutral-100 mx-auto"
							>
								Verstuur bericht
							</button>
							<input type="hidden" name="form-name" value="name_of_my_form" />
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Contact
