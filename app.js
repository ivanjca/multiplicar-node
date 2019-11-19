//requieres
//const multiplicar = require('./multiplicar/multiplicar.js'); //Importar paquete
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js'); //Importar paquete destructurado
const argv = require('./config/yargs').argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .catch(err => console.log(err));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo} `))
            .catch(err => console.log(err));
        break;
    default:
        console.log('No se reconoce el comando');
        break;

}

//Llamamos al paquete instalado Yargs
//const fs = require('fs'); //Librería ya existente en node
//filesystem

// const fs = require('express'); // Librería creada por usuarios
// const fs = require('./C'); // Archivos necesarios 

//let argv = process.argv;
//console.log(`La base es ${argv.base} y el limite ${argv.limite}`);
//let parametro = argv[2];
/*
multiplicar.crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo} `));
paquete completo sin destructurar
    */

//Descructurado
/*crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo} `))
    .catch(err => console.log(err));*/