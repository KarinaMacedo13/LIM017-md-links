import { getpathExist, getpathAbsolute, convertrelativeToAbsolutePath } from './md-links.js';

const routeRelative = 'PruebaMD/prueba.md';
const routeAbsolute = 'C:/Users/Laboratoria/Documents/GitHub/LIM017-md-links/PruebaMD/prueba.md';
const notroute = 'PruebaMD/Prueba.m';

const mdLinks = (path) => {
  if (!getpathExist(path)) {
    console.log('No existo');
  } else {
    if (getpathAbsolute(path)) {
      console.log('Soy absoluta: '+path);
    } else {
      const absolutePath = convertrelativeToAbsolutePath(path);
      console.log('Soy Relativa: '+path);
      console.log('La ruta convertida es: '+absolutePath);
    }
  }
};

mdLinks(routeRelative);
mdLinks(routeAbsolute);
mdLinks(notroute);