import inquirer from "inquirer";



const addGasto =[
    
    {
        type: 'input',
        name:'name',
        message: "Nombre del gasto"
    },
    {
        type: 'input',
        name:'description',
        message: "Descripcion del gasto"
    },
    {
        type: 'input',
        name:'price',
        message: "Valor del producto"
    }
];

export const prompGastos = async()=>{
    return await inquirer.prompt(addGasto)
}

