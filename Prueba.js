/* eslint-disable prefer-regex-literals */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
// const path = require('path');
// const fs = require('fs');
import {
  existsSync, readFile, readFileSync, readdirSync, statSync,
} from 'node:fs';
import {
  isAbsolute, resolve, extname, join,
} from 'node:path';

/* HTTP REQUEST -------------------------------------------------------------*/
import fetch from 'node-fetch';

import from from './src/cli.js';

// const response = await fetch('https://github.com/');

// console.log(response.ok);
// console.log(response.status);
// console.log(response.statusText);

// const Linksldkasd = (link) => fetch(link)
//   .then((res) => {
//     const statusText = res.status === 200 ? 'Ok' : 'Fail';
//     return {
//       ...link,
//       status: res.status,
//       ok: statusText,
//     };
//   })
//   .catch(() => ({
//     ...link,
//     status: 'Error',
//     ok: 'Fail',
//   }));
// Linksldkasd('https://github.com/')
//   .then((response) => console.log(response));

export const getHTTPRequest = (link) => fetch(link)
  .then((result) => {
    const arrayHTTP = {
      status: result.status,
      ok: result.statusText,
    };
    return arrayHTTP;
  })
  .catch((err) => {
    const arrayHTTP = {
      status: 'Error',
      ok: 'FAIL',
    };
    return arrayHTTP;
  });

getHTTPRequest('https://otra-cosa.net/algun-doc')
  .then((response) => console.log(response));

// import cliSpinners from 'cli-spinners';

// console.log(cliSpinners.dots('Comida'));

const routeRelative = 'PruebaMD/Prueba.md';
const routeAbsolute = 'C:/Users/Laboratoria/Documents/GitHub/LIM017-md-links/PruebaMD/Prueba.md';

const pathExist = (route) => existsSync(route);
const AbsolutePath = (route) => isAbsolute(route);
const relativeToAbsolutePath = (route) => resolve(route);
const pathIsFile = (route) => statSync(route).isFile();
const pathIsDirectory = (route) => statSync(route).isDirectory();
const extensionPath = (route) => extname(route) === '.md';
const readDirectory = (route) => readdirSync(route);
const readFileMD = (route) => readFileSync(route, 'utf-8');

const file = 'PruebaMD/Prueba.md';
const directorio = './PruebaMD';
const routedirectorio = 'C:/Users/Laboratoria/Documents/GitHub/LIM017-md-links/PruebaMD';

// console.log(readDirectory(directorio));
// console.log(readFileMD(file));

// function arrayMD(route) {
//   let arrayPathsMD = [];
//   const readPath = route;
//   if (pathIsFile(readPath)) {
//     console.log('Es un archivo');
//     if (extensionPath(readPath)) {
//       console.log('Es un archivo MD');
//       arrayPathsMD.push(readPath);
//     } else {
//       console.log('No es un archivo MD');
//     }
//   } else if (pathIsDirectory(readPath)) {
//     console.log('Es un directorio');
//     const arrayDirectory = readDirectory(readPath);
//     arrayDirectory.forEach((elem) => {
//       const pathFile = elem;
//       const newPath = join(readPath, pathFile);
//       const newArray = arrayMD(newPath);
//       arrayPathsMD = newArray.concat(arrayPathsMD);
//     });
//   }
//   return arrayPathsMD;
// }
// const arrayMDFunction = arrayMD(routedirectorio);
// console.log(arrayMDFunction);

// const frutas = ['Manzana', 'Banana'];

// function readFruta(frutas) {
//   frutas.forEach((elemento, indice, array) => {
//     console.log(elemento, indice);
//   });
// }

// console.log(readFruta(frutas));
// console.log(arrayTest);

/* Get array Function -------------------------------------------------------------*/
// const arrayMDFunction = [
//   'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\prueba.md',
//   'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\Carpeta 2\\1link.md',
// ];

// const expRegular = {
//   getMDLinks: new RegExp(/[[?a-zA-Z0-9@:%.´,_/\+~#=$-]*][(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=-]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=)]*)/mg),
//   getLinks: new RegExp(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=-]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=)]*)/mg),
//   getText: new RegExp(/[[?a-zA-Z0-9@:%.´,_/\+~#=$-]*]/mg),
// };

// function obtainLinks(arrayMDFunction) {
//   const arrayMdLinksTextFile = [];
//   arrayMDFunction.forEach((element) => {
//     const mdLinks = readFileMD(element).match(expRegular.getMDLinks);
//     mdLinks.forEach((links) => {
//       const getMdLinks = links.match(expRegular.getLinks).join().slice(1, -1);
//       const getMdText = links.match(expRegular.getText).join().slice(1, -1);
//       const mdGet = {
//         href: getMdLinks.substring(0, 50),
//         text: getMdText,
//         file: element,
//       };
//       arrayMdLinksTextFile.push(mdGet);
//     });
//   });
//   return arrayMdLinksTextFile;
// }

// console.log(obtainLinks(arrayMDFunction));

/* Get array Function -------------------------------------------------------------*/

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

// getarray
// getArray
// node index.js Prueba/prueba.md
// // esto es un comentario
// /*
// */
