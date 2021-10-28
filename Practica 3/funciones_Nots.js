const chalk = require('chalk');
const fs = require('fs'); 


const AddNotes =  (title,body) =>{
    console.log("nota")
    const notas = CargarNotas();
    const NotasDuplicadas = notas.find((nota) => nota.title === title);

    if (!NotasDuplicadas){
        notas.push({
            title: title,
            body: body
        });
    }
    GuardarNotas(notas);
    console.log(chalk.green.inverse('Nueva Nota Añadida'));
}

const DelNotes = (title) =>{
  
    const notas = CargarNotas();
    const NotaMantener  = notas.filter((nota) => nota.title !== title);
    if(notas.length > NotaMantener.length){
        
        console.log(chalk.green.inverse('Nota Eliminada'));
        GuardarNotas(NotaMantener);
    }else{
        console.log(chalk.red.inverse('No se encontró la nota'))
        
    }
}

const ListNotas =() =>{

    const notas = CargarNotas();
    console.log(chalk.inverse('Tus notas'))

    notas.forEach(note => {
        console.log(note.title);
        
    });
}

// funciones a editar
const GuardarNotas = (notas) => {

    const dataJSON = JSON.stringify(notas)
    fs.writeFileSync('notas.json', dataJSON)
}

const CargarNotas = () =>{
    try {
        const dataBuffer = fs.readFileSync('notas.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        console.log("Archivo  no encontrado")
    }
}

module.exports ={
    AgregarNota: AddNotes,
    EliminarNota: DelNotes,
    ListarNotas: ListNotas,
    GuardarNotas: GuardarNotas,
    CargarNotas: CargarNotas
}