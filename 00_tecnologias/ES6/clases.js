// Ejemplo de código en ES6

class Libro {

    constructor(tematica, paginas) {
        this.tematica = tematica;
        this.paginas = paginas;
    }
}

class LibroTecnico extends Libro {

	constructor(tematica, paginas, precio) {
		super(tematica, paginas);
		this.capitulos = [];
		this.precio = precio;
		// ...
	}
	
	precioTotal(pValor = "foo") {
		console.log(pvalor * precio);
	}
}

oLibro = new LibroTecnico("Informatica", 129, 30);

oLibro.Autor = "Pepe"
console.log(oLibro);