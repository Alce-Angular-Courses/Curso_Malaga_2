function msgAfterTimeout (msg, nombre, tiempo, cb) {
	setTimeout(function () {
		cb(msg, nombre);
	}, tiempo);
};

msgAfterTimeout("", "Pepe", 100, 
function (msg, nombre) {
    let saludo = (`${msg} Hola ${nombre}!`);
    
    msgAfterTimeout(saludo, "Juan", 200,
    function (msg, nombre) {
        let saludo = (`${msg} Hola ${nombre}!`)
        
        console.log(`Saludo después de 0,3 seg: ${saludo}`);
        
        } // Fin de la función callback
    ); // Fin de la llamada a msgAfterTimeout 
} // Fin de la función callback
); // Fin de la llamada a msgAfterTimeout