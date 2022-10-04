function initControls() {
	const controls = document.querySelector('.controls')
	const cssText = document.querySelector('.css')
	const btn = document.querySelector('.btn')

	controls.addEventListener('change', handleChange)

	const handleStyles = {
		element: btn,
		innerText(value) {
			this.element.innerText = value
		},
		color(value) {
			this.element.style.color = value
		},
		backgroundColor(value) {
			this.element.style.backgroundColor = value
		},
		height(value) {
			this.element.style.height = `${value}px`
		},
		width(value) {
			this.element.style.width = `${value}px`
		},
		border(value) {
			this.element.style.border = value
		},
		borderRadius(value) {
			this.element.style.borderRadius = `${value}px`
		},
		fontFamily(value) {
			this.element.style.fontFamily = value
		},
		fontSize(value) {
			this.element.style.fontSize = `${value}rem`
		},
	}

	function handleChange({ target }) {
		handleStyles[target.name](target.value)
		saveValues(target.name, target.value)
		showCss()
	}

	function showCss() {
		cssText.innerHTML = `<span> ${btn.style.cssText.split(';').join(';</span><span>')}`
	}

	function saveValues(name, value) {
		localStorage[name] = value
	}

	function setValues() {
		const properties = Object.keys(localStorage)
		properties.forEach((prop) => {
			console.log(controls.elements)
			controls.elements[prop].value = localStorage[prop]
			handleStyles[prop](localStorage[prop])
		})
		showCss()
	}
	setValues()
}

window.addEventListener('load', initControls)
