import { existsSync, readFileSync } from 'node:fs';
import { isAbsolute, resolve } from 'node:path';

//Función si existe la ruta
export const getpathExist = (route) => existsSync(route);
//Función identifica si la ruta es absoluta
export const getpathAbsolute = (route) => isAbsolute(route);
//Función que convierte la ruta relativa a absoluta
export const convertrelativeToAbsolutePath = (route) => resolve(route);
//Función que da lectura al archivo
export const readFile = (route) => readFileSync(route,'utf-8');
//Función que determina si es un archivo
export const pathIsFile = (route) => statSync(route).isFile();
//Función que determina si es un directorio
export const pathIsDirectory = (route) => statSync(route).isDirectory();
