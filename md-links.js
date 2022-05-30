/* eslint-disable no-useless-escape */
/* eslint-disable prefer-regex-literals */
import {
  existsSync, readFileSync, statSync, readdirSync,
} from 'node:fs';
import {
  isAbsolute, resolve, extname, join,
} from 'node:path';
import { fetch } from './libraries.js';

// Función si existe la ruta
export const getPathExist = (route) => existsSync(route);
// Función identifica si la ruta es absoluta
export const getPathAbsolute = (route) => isAbsolute(route);
// Función que convierte la ruta relativa a absoluta
export const convertRelativeToAbsolutePath = (route) => resolve(route);
// Función que da lectura al archivo
export const readFile = (route) => readFileSync(route, 'utf-8');
// Función que determina si es un archivo
export const getPathIsFile = (route) => statSync(route).isFile();
// Función que determina si es un directorio
export const getPathIsDirectory = (route) => statSync(route).isDirectory();
// Función que obtiene la extención .md
export const getExtensionPath = (route) => extname(route) === '.md';
// Función que lee los archivos contenidos en un directorio
export const readDirectory = (route) => readdirSync(route);

// Función que obtiene un array de archivos .md
export const getArrayMD = (route) => {
  let arrayPathsMD = [];
  const readPath = route;
  if (getPathIsFile(readPath)) {
    if (getExtensionPath(readPath)) {
      arrayPathsMD.push(readPath);
    }
  } else if (getPathIsDirectory(readPath)) {
    const arrayDirectory = readDirectory(readPath);
    arrayDirectory.forEach((elem) => {
      const pathFile = elem;
      const newPath = join(readPath, pathFile);
      const newArray = getArrayMD(newPath);
      arrayPathsMD = newArray.concat(arrayPathsMD);
    });
  }
  return arrayPathsMD;
};

// const arrayPrueba = convertRelativeToAbsolutePath('PruebaMD/Carpeta 2');
// console.log(arrayPrueba);
// const Prueba2 = getArrayMD(arrayPrueba)
// console.log(Prueba2);

// Declaraciones de las expresiones regulares
const expRegular = {
  getMDLinks: new RegExp(/\[(.*)\]\([(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)\)/mg),
  getLinks: new RegExp(/\([(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)\)/mg),
  getText: new RegExp(/\[(.*)\]/mg),
};

// Función que obtiene un array de links de los distintos archivos .md
export const obtainLinks = (arrayMDFunction) => {
  const arrayMdLinksTextFile = [];
  arrayMDFunction.forEach((element) => {
    const mdLinks = readFile(element).match(expRegular.getMDLinks);
    // console.log(mdLinks);
    if (mdLinks !== null) {
      mdLinks.forEach((links) => {
        const getMdLinks = links.match(expRegular.getLinks).join().slice(1, -1);
        const getMdText = links.match(expRegular.getText).join().slice(1, -1);
        const mdGet = {
          href: getMdLinks,
          text: getMdText,
          file: element,
        };
        arrayMdLinksTextFile.push(mdGet);
      });
    }
  });
  return arrayMdLinksTextFile;
};

// const Prueba3 = obtainLinks(Prueba2);
// console.log(Prueba3);

// Función que obtiene un array de links de los distintos archivos .md con validación HTTP
export const getHTTPRequest = (link) => {
  const arrayStatus = link.map((element) => {
    const fetchObj = fetch(element.href)
      .then((result) => {
        const arrayHTTP = {
          href: element.href.substring(0, 50),
          text: element.text,
          file: element.file,
          status: result.status,
          ok: !(result.status > 200) && (result.status < 399) ? 'OK' : 'FAIL',
        };
        return arrayHTTP;
      })
      .catch(() => {
        const arrayHTTP = {
          href: element.href.substring(0, 50),
          text: element.text,
          file: element.file,
          status: 'Error',
          ok: 'FAIL',
        };
        return arrayHTTP;
      });
    return fetchObj;
  });
  return Promise.all(arrayStatus);
};
