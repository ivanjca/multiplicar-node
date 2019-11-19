const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base) || !Number(limite)) {
            reject(`La base ${base}, o el limite ${limite} no es un número`);
            return;
        }

        for (let i = 0; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`);
        }
    })
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base) || !Number(limite)) {
            reject(`La base ${base}, o el limite ${limite} no es un número`);
            return;
        }
        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al${limite}.txt`)
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}