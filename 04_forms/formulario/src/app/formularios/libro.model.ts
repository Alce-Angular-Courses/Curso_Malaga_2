export interface Pais {
    codigo: string;
    nombre: string;
}

export interface Libro {
    autor: string;
    titulo: string;
    editorial: string;
    numpag: number;
    exlibris: boolean;
    genero: string;
    pais: Pais
}

