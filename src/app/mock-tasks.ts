// importamos la interface para tener toda la integridad de los datos
import { task } from "./task"


// esto va a emular una base de declarations
export const TASKS:task [] = [
    {
        id: 1,
        texto:"Terminar primer módulo de angular",
        dia: "5 de agosto a las 9:00",
        recordatorio: true,
    },
    {
        id: 2,
        texto:"Hacer las compras",
        dia: "5 de agosto a las 11:00",
        recordatorio: true,
    },
    {
        id: 3,
        texto:"Entrenamiento",
        dia: "5 de agosto a las 16:00",
        recordatorio: false,
    },
    {
        id: 4,
        texto:"Investigar sobre Bootstrap",
        dia: "5 de agosto a las 18:00",
        recordatorio: true,
    },
    {
        id: 5,
        texto:"Leer",
        dia: "5 de agosto a las 20:00",
        recordatorio: true,
    }
]