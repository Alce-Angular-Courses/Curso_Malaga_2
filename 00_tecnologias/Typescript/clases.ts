// Ejemplo de código en TypeScript

interface DatosLibro {
	titulo: any;
	tematica: string;
	paginas: number;
	//autor?: string;
	isbn: string | number; 
	mostrarDatos: Function;
	calcularPrecio(iva: number): number; 
}

class Libro implements DatosLibro {
	tematica;
	paginas;
	autor: {nombre: string, apellidos: string};
	isbn: string;
	titulo;
	
    constructor(tematica, paginas) {
        this.tematica = tematica;
        this.paginas = paginas;
	}
	
	mostrarDatos () {}

	calcularPrecio (iva: number) : number {
		return 1
	}

	prueba () : void {} 
}

class LibroTecnico extends Libro {

	public precio: number;
	public capitulos: Array<string>;
	// capitulos: [string];

	constructor(tematica, paginas, precio) {
		super(tematica, paginas);
		this.capitulos = [];
		this.precio = precio;
		// ...
	}
	
	precioTotal(pValor:number = 1) {
		console.log(pValor * this.precio);
	}
}

let oLibro = new LibroTecnico("Informatica", 129, 30);

//oLibro.autor = "Pepe"
console.log(oLibro);