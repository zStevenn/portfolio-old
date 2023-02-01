import { BsInstagram, BsLinkedin, BsTwitter, BsDiscord } from "react-icons/bs"
import { FaTiktok } from "react-icons/fa"

function Footer() {
	return (
		<footer className="bg-neutral-900">
			<div className="bg-red-500 flex flex-col gap-4 sm:flex-row justify-center items-center px-6 py-4 text-slate-50 mb-10">
				<p className="">Je kunt mij vinden op: </p>
				<div className="flex gap-4">
					<a href="https://www.instagram.com/izstevenn/" target="_blank" rel="noreferrer">
						<BsInstagram className="text-xl" />
					</a>
					<a href="https://www.linkedin.com/in/zstevenn/" target="_blank" rel="noreferrer">
						<BsLinkedin className="text-xl" />
					</a>
					<a href="https://twitter.com/izStevenn" target="_blank" rel="noreferrer">
						<BsTwitter className="text-xl" />
					</a>
					<a href="https://www.tiktok.com/@zstevenn" target="_blank" rel="noreferrer">
						<FaTiktok className="text-xl" />
					</a>
					{/* <a href="https://discord.gg/stevenli" target="_blank" rel="noreferrer">
						<BsDiscord className="text-xl" />
					</a> */}
				</div>
			</div>
			<h3 className="text-xl text-slate-50 text-center mb-6">Steven Li</h3>
			<p className="text-gray-600 text-center text-sm italic">&copy; Copyright 2023.</p>
			<p className="text-gray-600 text-center text-sm italic">All rights reserved. Powered by <span className="font-semibold">Steven Li</span>.</p>
		</footer>
	)
}

export default Footer
