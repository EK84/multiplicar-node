//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = async (base, limite) => {

    if (!Number(base))
        throw new Error(`El valor introducido ${base} no es un número`);

    let data = `
        ===============================
                tabla del ${base}       
        ===============================`.green

    for (let i = 1; i <= limite; i++) {
        data += (`
                ${i} * ${base} = ${base * i}`.blue);
    }

    return data;
}

let crearArchivo = async (base, limite) => {

    if ( !Number(base) || !Number(limite) )
        throw new Error(`Se ha producido un error, asegurese de que ha introducido números como base y límite`);

    let data = ''
    
    for (let i = 1; i <= limite; i++) {
        data += (`${i} * ${base} = ${base * i}\n`);
    }
    
    fs.writeFile(`tablas/tabla-del-${base}.txt`, data, (err) => {
        if (err) throw new Error('Se ha producido un error');
    });
    return `tabla-del-${base}.txt`;
    
}

module.exports = {
    crearArchivo,
    listarTabla
}