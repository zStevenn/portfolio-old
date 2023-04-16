import { useRef, useEffect } from "react"

// Hook to fade in elements on scroll
export function useFadeIn(direction = "left", delay = 500, threshold = 0.5) {
	const ref = useRef(null)

	useEffect(() => {
		const fadeRef = ref.current

		if (!fadeRef) return

		// Add initial class
		fadeRef.classList.add(`transition`, `duration-1000`, `ease-in-out`)

		if (direction === "left") {
			fadeRef.classList.add(`-translate-x-full`)
		}

		if (direction === "right") {
			fadeRef.classList.add(`translate-x-full`)
		}

		if (direction === "top") {
			fadeRef.classList.add(`-translate-y-full`)
		}

		if (direction === "bottom") {
			fadeRef.classList.add(`translate-y-full`)
		}

		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					setTimeout(() => {
						if (entry.isIntersecting) {
							if (direction === "left") {
								entry.target.classList.add("opacity-100", `translate-x-0`)
								entry.target.classList.remove("opacity-0", `-translate-x-full`)
							}
							if (direction === "right") {
								entry.target.classList.add("opacity-100", `-translate-x-0`)
								entry.target.classList.remove("opacity-0", `translate-x-full`)
							}
							if (direction === "top") {
								entry.target.classList.add("opacity-100", `translate-y-0`)
								entry.target.classList.remove("opacity-0", `-translate-y-full`)
							}
							if (direction === "bottom") {
								entry.target.classList.add("opacity-100", `-translate-y-0`)
								entry.target.classList.remove("opacity-0", `translate-y-full`)
							}
						}
					}, delay)
				})
			},
			{ threshold: [threshold] }
		)
		observer.observe(fadeRef)

		return () => observer.unobserve(fadeRef)
	}, [ref])

	return ref
}
