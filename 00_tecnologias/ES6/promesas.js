function msgAfterTimeout (msg, nombre, tiempo) {
	return new Promise((resolve, reject) => {
		setTimeout(
			() => resolve(`${msg} Hola ${nombre}!`), 
			tiempo)
		}
	)
}

msgAfterTimeout("", "Pepe", 100)
.then((msg) =>
	msgAfterTimeout(msg, "Juan", 200))
.then((msg) => {
	console.log(`Saludo después de 0,3 seg: ${msg}`)
})