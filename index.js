import inquirer from "inquirer";
import {save, get} from './readWritePromises.js'
import { prompGastos } from "./prompGastos.js";


const main =async ()=>{
    let promptRun= true;

    while (promptRun){
      const options= await inquirer.prompt([
        {
            type: 'list',
            name: "choices",
            message: 'Selecciona la opcion deseada',
            choices:[
                {value: 1, name:'Agregar un gasto'},
                {value:2, name:'Obtener los gastos'},
                {value:99, name:'Exit'}
            ]
        }
        ])
        switch(options.choices){
            case 1:
                await createNewGasto();
                break
            case 2: 
                await getTodosLosGastos();
                break
            case 99: 
                promptRun= false
                break
            default:
                promptRun= false
                break
        }  
    }
    
}
main()
const createNewGasto = async ()=>{
    const gasto= await prompGastos()
    const gastoJson = await get ("./gastos.json")
    const newGastoData = [...gastoJson, gasto]
    save("./gastos.json", newGastoData)
}

const getTodosLosGastos= async()=>{
    const Gastos= await get('./gastos.json')
    console.log(Gastos);
}
