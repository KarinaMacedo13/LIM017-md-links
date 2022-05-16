// const path = require('path');
// const fs = require('fs');
import { existsSync, readFile, readFileSync, statSync, readdirSync} from 'node:fs';
import { isAbsolute, resolve, extname, join} from 'node:path';

const routeRelative = 'PruebaMD/Prueba.md';
const routeAbsolute = 'C:/Users/Laboratoria/Documents/GitHub/LIM017-md-links/PruebaMD/Prueba.md';

const pathExist = (route) => existsSync(route);
const AbsolutePath = (route) => isAbsolute(route);
const relativeToAbsolutePath = (route) => resolve(route);
const pathIsFile = (route) => statSync(route).isFile();
const pathIsDirectory = (route) => statSync(route).isDirectory();
const extensionPath = (route) => extname(route)==='.md';
const readDirectory = (route) => readdirSync(route);
const readFileMD = (route) => readFileSync(route,'utf-8');
const joinPath = () => join();

const file = 'PruebaMD/Prueba.md';
const directorio = './PruebaMD';
const routedirectorio = 'C:/Users/Laboratoria/Documents/GitHub/LIM017-md-links/PruebaMD';

// console.log(readDirectory(directorio));
// console.log(readFileMD(file));

function arrayMD(route) {
    let arrayPathsMD = [];
    console.log(arrayPathsMD);
    const readPath = route;
    if (pathIsFile(readPath)) {
        console.log('Es un archivo');
        if (extensionPath(readPath)) {
            console.log('Es un archivo MD');
            arrayPathsMD.push(readPath);
            console.log(arrayPathsMD);
        }
        else {
            console.log('No es un archivo MD');
        }
    } else {
        if(pathIsDirectory(readPath)) {
            console.log('Es un directorio');
            const arrayDirectory = readDirectory(readPath);
            console.log(arrayDirectory);
            arrayDirectory.forEach((elem) => {
                const pathFile = elem;
                const newPath = joinPath(readPath, pathFile);
                const newArray = arrayMD(newPath);
                arrayPathsMD = newArray.concat(arrayPathsMD);
            });
        }
    }
    return arrayPathsMD;
    console.log(arrayPathsMD);
}

arrayMD(routedirectorio);

// console.log(extensionPath(routeAbsolute));

// const rutaAbsoluta = relativeToAbsolutePath(routeRelative);
// console.log(rutaAbsoluta);
// console.log('Es un file: '+pathIsFile(routeAbsolute));
// //-------------------------------------------------------

// console.log('Es un file: '+pathIsFile(routeAbsolute));
// console.log('Es un directorio: '+pathIsDirectory(directorio));
// console.log(pathIsDirectory(rutaAbsoluta));

// console.log(readMd(routeAbsolute));

// const exist = pathExist(rutaAbsoluta);
// console.log(exist);

// if (exist===true) {
//     console.log('The path exists.');
// } else {
//     console.log('The path not exists.');
// }

// readFile(routeAbsolute, 'utf-8',(error, data) => {
//     if (!error) {
//     console.log(data);
//     }else{
//     console.log ('Error: ' + error);
//     }
// });

// console.log('Es absoluta '+AbsolutePath(routeAbsolute));
// console.log('Existe '+pathExist('C:\Users\Laboratoria\Documents\GitHub\LIM017-md-links\prueba.md'));
// console.log('Existe2 '+pathExist('/prueba.md'));
// console.log('Convierte '+relativeToAbsolutePath(routeAbsolute));
// console.log('Convierte2 '+relativeToAbsolutePath(routeRelative));
