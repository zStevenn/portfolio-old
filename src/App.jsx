import Navbar from "./components/Navbar"
import Wrapper from "./components/Wrapper"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Aboutme from "./components/Aboutme"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
	return (
		<>
			<Navbar />
			<Wrapper>
				<Hero />
				{/* Vaardigheden */}
				<Aboutme />
				{/* Contact */}
				<Contact />
				{/* Projecten */}
				<Projects />
			</Wrapper>
			<Footer />
		</>
	)
}

export default App
