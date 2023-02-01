import { useState, useEffect } from "react"
import { MdMenu, MdClose } from "react-icons/md"
import { Link, animateScroll as scroll } from "react-scroll"

const Navbar = () => {
	const [showNav, setShowNav] = useState()

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
				<span className="lg:hidden text-slate-50 text-xl" onClick={toggleNav}>
					<MdMenu className="text-3xl" />
				</span>
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
				<a
					href="#contactform"
					className="hidden sm:block px-1 py-2 bg-red-500 border-b-2 border-r-2 border-red-800 text-slate-50 text-lg"
				>
					Neem contact
				</a>
			</nav>
			{showNav && (
				<>
					<ul
						className={`text-slate-50 px-8 py-4 fixed right-0 left-0 bg-neutral-800 border-bottom z-50 shadow-lg`}
					>
						<div className="flex justify-between py-4">
						<MdClose className="text-3xl" onClick={toggleNav} />

						</div>
						{navElements.map(({ id, name }) => (
							<li className="my-2" key={id}>
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
					<div className="fixed z-10 inset-0 opacity-90 bg-neutral-900" />
				</>
			)}
			{/* Einde Navbar */}
		</>
	)
}

export default Navbar
