const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); 

//Para mandar por un comando la base node app --base=5 o node app -b=5
//let argv = process.argv;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then( (result) => console.log(result) )
            .catch( (err) => console.log(err) );
        break;
    
    case 'crear': //node app crear --b 5 --l 5
        crearArchivo(argv.base, argv.limite)
            .then((result) => console.log(`Archivo creado:`.yellow +`${result.bgCyan}`))
            .catch((err) => console.log(err));
        break;

    default:
        console.log('Comando no valido');
        break;
}



