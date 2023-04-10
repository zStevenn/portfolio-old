import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Aboutme from "./components/Aboutme"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Section from "./components/Section"

function App() {

	return (
		<>
			<Navbar />
			<Hero />
			<Section id="about" className="bg-neutral-100 ">
				<Aboutme />
			</Section>
			<Section id="contact">
				<Contact />
			</Section>
			<Section id="projects">
				<Projects />
			</Section>
			<Footer />
		</>
	)
}

export default App
