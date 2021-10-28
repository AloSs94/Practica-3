const yargs = require('yargs');
const chalk = require('chalk');
const notas = require('./funciones_Nots.js');


yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder:{
        title:{
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption:true,
            type: 'string'
        }
    },
    handler(argv){
       notas.AgregarNota(argv.title,argv.body);
    }
})

//Creamos el comando  Eliminar/Remove
yargs.command({
    command:'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notas.EliminarNota(argv.title);
    }

})

yargs.command({
    command:'list',
    describe: 'List the notes',
     handler(){
      notas.ListarNotas();
    }
})
yargs.parse();


/* require('yargs')
  .scriptName("pirate-parser")
  .usage('$0 <cmd> [args]')
  .command('hello [name]', 'welcome ter yargs!', (yargs) => {
    yargs.positional('name', {
      type: 'string',
      default: 'Cambi',
      describe: 'the name to say hello to'
    })
  }, function (argv) {
    console.log('hello', argv.name, 'welcome to yargs!')
  })
  .help()
  .argv
 */