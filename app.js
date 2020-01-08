//
// ─── REQUIREDS ──────────────────────────────────────────────────────────────────
//
const { argv } = require('./config/yargs'); 
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then( res => console.log((res.data).yellow) )
            .catch( err => console.log(err) );
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then( res => console.log(`Archivo ${ colors.red(res) } creado con éxito`) )
            .catch( err => console.log( err ) );
        break;

    default:
        console.log(`${ colors.red('Comando no reconocido') }`);
        break;
}

//crearArchivo(base)
    //.then( res => console.log(`Archivo ${res}`) )
    //.catch( err => console.log(err) );

//console.log(process.argv);

/*let argv2 = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1]; */
