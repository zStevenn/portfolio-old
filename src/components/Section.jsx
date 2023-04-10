import { useRef, useEffect } from "react"

export default function Section({ children, id, className }) {
	const sectionRef = useRef(null)

	useEffect(() => {
		const section = sectionRef.current
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-32")
					}
				})
			},
			{ threshold: [0.35] }
		)

		observer.observe(section)

		return () => {
			observer.unobserve(section)
		}
	}, [])

	return (
		<section
			ref={sectionRef}
			id={id}
			className={`opacity-0 translate-y-32 transition-all duration-700 ${className}`}
		>
			{children}
		</section>
	)
}
