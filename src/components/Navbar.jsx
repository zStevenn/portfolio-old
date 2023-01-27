import { useState, useEffect } from "react"
import { MdMenu, MdClose } from "react-icons/md"

const Navbar = () => {
	const [showNav, setShowNav] = useState()
	const [isSticky, setSticky] = useState(false)

	// Array of nav items with id and name.
	const navElements = [
		{ id: "", name: "Home" },
		{ id: "overmij", name: "Over Mij" },
		{ id: "contact", name: "Contact" },
		{ id: "services", name: "Services" },
		{ id: "projecten", name: "Projecten" },
	]

	//useEffect to track user scroll
	useEffect(() => {
		function handleScroll() {
			if (window.pageYOffset > 50) {
				setSticky(true)
			} else {
				setSticky(false)
			}
		}

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	// Function to cancel default behavior and enable smooth scrolling
	function handleClick(event, id) {
		event.preventDefault()
		const element = document.getElementById(id)
		element.scrollIntoView({ behavior: "smooth" })
	}

	// Toggles Navigation based on click
	const toggleNav = () => {
		setShowNav(!showNav)
	}

	return (
		<>
			{/* Navbar */}
			<nav
				className={`flex justify-between items-center px-6 py-2 min-h-[10vh] z-50 bg-neutral-900 ${
					isSticky ? "fixed top-0 w-full" : ""
				}`}
			>
				{/* Hamburger Icon */}
				<span className="lg:hidden text-slate-50 text-xl" onClick={toggleNav}>
					{showNav ? <MdClose className="text-3xl" /> : <MdMenu  className="text-3xl"/>}
				</span>
				{/* Webpage Title */}
				<h1 className="text-slate-50 text-xl">Steven Li</h1>
				{/* Navlist */}
				<ul className="hidden lg:flex gap-8 text-slate-50 text-lg">
					{navElements.map(({ id, name }) => (
						<li key={id}>
							<a href={`#${id}`}>{name}</a>
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
						className={`text-slate-50 px-8 py-4 fixed top-[10vh] right-0 left-0 bg-neutral-900 border-bottom`}
					>
						{navElements.map(({ id, name }) => (
							<li className="my-2" key={id} onClick={toggleNav}>
								<a href={`#${id}`}>{name}</a>
							</li>
						))}
					</ul>
					{/* <div className="fixed z-10 inset-0 opacity-30"></div> */}
				</>
			)}
			{/* Einde Navbar */}
		</>
	)
}

export default Navbar
