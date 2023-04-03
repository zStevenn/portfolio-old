import Navbar from "./components/Navbar"
import Wrapper from "./components/Wrapper"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Aboutme from "./components/Aboutme"
import Contact from "./components/Contact"

function App() {
	return (
		<>
			<Navbar />
			<Wrapper>
				<Hero />
				{/* Vaardigheden */}
				<Skills />
				{/* Contact */}
				<Contact />
				{/* Projecten */}
				<Projects />
				{/* Wat ik kan aanbieden */}
				<Services />
				{/* Over mij */}
				<Aboutme />
				
			</Wrapper>
			<Footer />
		</>
	)
}

export default App
