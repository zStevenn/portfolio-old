import { useState } from "react"
import { MdMenu, MdClose } from "react-icons/md"
import { Link } from "react-scroll"
import Logo from "../assets/static/logo.svg"

const Navbar = () => {
	const [showNav, setShowNav] = useState(true)

	// Array of nav items with id and name.
	const navElements = [
		{ id: "hero", name: "Home" },
		{ id: "overmij", name: "Over Mij" },
		{ id: "contact", name: "Contact" },
		{ id: "projecten", name: "Projecten" },
	]

	// Toggles Navigation based on click
	const toggleNav = () => {
		setShowNav(!showNav)
	}

	return (
		<>
			{/* Navbar */}
			<nav
				id="navbar"
				className={`flex justify-between items-center px-2 py-4 sm:px-4 mb-2 shadow shadow-neutral-900 z-50 bg-neutral-900`}
			>
				{/* Hamburger Icon */}
				<button
					onClick={toggleNav}
					alt="Menu"
					title="Menu"
					className="md:hidden text-3xl text-neutral-100"
				>
					{showNav ? <MdMenu /> : <MdClose />}
				</button>
				{/* Webpage Title */}
				<h1 className="text-neutral-100 text-xl flex flex-nowrap gap-2 items-center">
					<img src={Logo} alt="Logo" className="h-5 w-5 bg-neutral-100" />
					Steven Li
				</h1>
				{/* Navlist */}
				<ul className="hidden md:flex gap-8 text-neutral-100 text-lg">
					{navElements.map(({ id, name }) => (
						<li key={id}>
							<Link
								activeClass="active"
								to={id}
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								className="cursor-pointer"
							>
								{name}
							</Link>
						</li>
					))}
				</ul>
				{/* CTA Button - Contact Me */}
				<Link
					to={"contact"}
					spy={true}
					smooth={true}
					offset={0}
					duration={500}
					className="hidden cursor-pointer sm:block px-3 py-2 bg-red-500 border-b-2 border-r-2 border-red-800 rounded text-neutral-100 text-lg"
				>
					Neem contact
				</Link>
			</nav>
			<div
				className={`md:hidden text-neutral-100 fixed top-0 left-0 w-screen h-screen bg-neutral-900/40 shadow-inner shadow-neutral-900/40 z-50 duration-500 ${
					showNav ? "-translate-x-full opacity-25" : "translate-x-0 opacity-100"
				}  `}
			>
				<div className="px-2 py-4 sm:px-4 w-4/5 h-screen bg-neutral-900 shadow-lg shadow-neutral-700">
					{/* Webpage Title */}
					<h1
						className="text-neutral-100 text-xl flex flex-nowrap gap-2 items-center cursor-pointer"
						onClick={toggleNav}
					>
						<img src={Logo} alt="Logo" className="h-5 w-5 bg-neutral-100" />
						Steven Li
					</h1>
					<ul className="grid gap-4 my-8 text-xl text-neutral-100">
						{navElements.map(({ id, name }) => (
							<li key={id}>
								<Link
									activeClass="active"
									to={id}
									spy={true}
									smooth={true}
									offset={0}
									duration={500}
									onClick={toggleNav}
									className="cursor-pointer"
								>
									{name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			{/* Einde Navbar */}
		</>
	)
}

export default Navbar
