import { useState, useEffect } from "react"
import { MdMenu, MdClose } from "react-icons/md"
import { Link, animateScroll as scroll } from "react-scroll"

const Navbar = () => {
	const [showNav, setShowNav] = useState(false)

	// Array of nav items with id and name.
	const navElements = [
		{ id: "hero", name: "Home" },
		{ id: "vaardigheden", name: "Vaardigheden" },
		{ id: "projecten", name: "Projecten" },
		{ id: "services", name: "Services" },
		{ id: "overmij", name: "Over Mij" },
		{ id: "contact", name: "Contact" },
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
				className={`flex justify-between lg:justify-center lg:gap-20 items-center px-8 py-4 z-50 bg-neutral-800 fixed top-0 w-full`}
			>
				{/* Hamburger Icon */}
				<MdMenu
					className="text-3xl lg:hidden text-slate-50"
					onClick={toggleNav}
				/>
				{/* Webpage Title */}
				<h1 className="text-slate-50 text-xl">Steven Li</h1>
				{/* Navlist */}
				<ul className="hidden lg:flex gap-8 text-slate-50 text-lg">
					{navElements.map(({ id, name }) => (
						<li key={id}>
							<Link
								activeClass="active"
								to={id}
								spy={true}
								smooth={true}
								offset={-100}
								duration={500}
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
					offset={-100}
					duration={500}
					className="hidden sm:block px-1 py-2 bg-red-500 border-b-2 border-r-2 border-red-800 text-slate-50 text-lg"
				>
					Neem contact
				</Link>
			</nav>
			<ul
				className={`text-slate-50 px-8 py-4 fixed w-1/2 h-screen bg-neutral-800 z-50 shadow-lg transition-all duration-500 ${
					showNav ? "-translate-x-full" : ""
				}  `}
			>
				<div className="flex justify-between">
					<MdClose className="text-3xl" onClick={toggleNav} />
				</div>
				{navElements.map(({ id, name }) => (
					<li className="my-4" key={id}>
						<Link
							activeClass="active"
							to={id}
							spy={true}
							smooth={true}
							offset={-100}
							duration={500}
							onClick={toggleNav}
						>
							{name}
						</Link>
					</li>
				))}
			</ul>
			{/* Einde Navbar */}
		</>
	)
}

export default Navbar
