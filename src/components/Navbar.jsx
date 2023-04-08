import { useState } from "react"
import { MdMenu, MdClose } from "react-icons/md"
import { Link } from "react-scroll"

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
				className={`flex justify-between items-center px-8 py-3 mb-2 shadow shadow-neutral-900 z-50 bg-neutral-900 fixed top-0 w-full`}
			>
				{/* Hamburger Icon */}
				<MdMenu
					className="text-3xl md:hidden text-neutral-100"
					onClick={toggleNav}
				/>
				{/* Webpage Title */}
				<h1 className="text-neutral-100 text-xl">Steven Li</h1>
				{/* Navlist */}
				<ul className="hidden md:flex gap-8 text-neutral-100 text-lg">
					{navElements.map(({ id, name }) => (
						<li key={id}>
							<Link
								activeClass="active"
								to={id}
								spy={true}
								smooth={true}
								offset={-55}
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
					offset={-55}
					duration={500}
					className="hidden cursor-pointer sm:block px-3 py-2 bg-red-500 border-b-2 border-r-2 border-red-800 rounded text-neutral-100 text-lg"
				>
					Neem contact
				</Link>
			</nav>
			<div
				className={`md:hidden text-neutral-100 px-8 py-3 fixed w-screen h-screen bg-neutral-900 z-50 shadow-lg transition-all duration-500 ${
					showNav ? "-translate-x-full" : ""
				}  `}
			>
				<div className="flex justify-between">
					<MdClose className="text-3xl mt-2" onClick={toggleNav} />
				</div>
				<ul className="grid gap-4 my-8 text-xl text-neutral-100">
					{navElements.map(({ id, name }) => (
						<li key={id}>
							<Link
								activeClass="active"
								to={id}
								spy={true}
								smooth={true}
								offset={-55}
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
			{/* Einde Navbar */}
		</>
	)
}

export default Navbar
