function Wrapper({ children }) {
	return (
		<div className="lg:max-w-screen-lg lg:mx-auto px-8 pt-[10vh]">
			{children}
		</div>
	)
}

export default Wrapper
