'iuse strict';

const fs = require('fs');
const colors = require('colors');

let multiplicar = ( base, limite = 12 ) => {

    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${ base } x ${ i } = ${ base * i }\n`;
    }

    return data;

}

let listarTabla = async (base, limite = 12) => {

    if(!Number(base) || !Number(limite)) {

        throw new Error('Ingrese una base o un límite de tipo numérico');

    } else {

        let data = multiplicar(base, limite);

        return {
            data
        }

    }

}

let crearArchivo = async ( base, limite = 12 ) => {

    if( !Number(base) ) {

        throw new Error(`El valor '${ base }' no es un número`);

    }

    let data = multiplicar(base, limite);
    
    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        
        if (err) throw new Error(err);
        
    }); 

    return `tabla-${base}.txt`;

}

module.exports = {
    crearArchivo,
    listarTabla
};
