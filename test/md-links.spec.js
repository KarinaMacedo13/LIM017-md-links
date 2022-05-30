import {
  getPathExist,
  convertRelativeToAbsolutePath,
  getPathAbsolute,
  getArrayMD,
  obtainLinks,
} from '../md-links.js';

jest.mock('../libraries.js');

const routeRelative = 'PruebaMD/prueba.md';
const routeAbsolute = 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\prueba.md';
const notroute = 'PruebaMD/Prueba.m';
const routeDirectory = 'C:/Users/Laboratoria/Documents/GitHub/LIM017-md-links/PruebaMD';
const routenotMD = 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\Carpeta1';
const arrayTest = [
  'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\prueba.md',
  'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\Carpeta2\\1Links.md',
  'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\Carpeta2\\0links.md',
];

describe('getpathExist', () => {
  it('deberia existir la ruta', () => {
    expect(getPathExist(routeRelative)).toBe(true);
  });
  it('no deberia existir la ruta', () => {
    expect(getPathExist(notroute)).toBe(false);
  });
});

describe('getpathAbsolute', () => {
  it('deberia ser una ruta absoluta', () => {
    expect(getPathAbsolute(routeAbsolute)).toBe(true);
  });
  it('no deberia ser una ruta absoluta', () => {
    expect(getPathAbsolute(routeRelative)).toBe(false);
  });
});

describe('convertrelativeToAbsolutePath', () => {
  it('deberia resolver una ruta en windows', () => {
    expect(convertRelativeToAbsolutePath(routeRelative)).toBe(routeAbsolute);
  });
});

describe('getarrayMD', () => {
  it('deberia resolver un array con archivos .md desde un directorio', () => {
    expect(getArrayMD(routeDirectory)).toStrictEqual(arrayTest);
  });
  it('deberia resolver que no hay archivos MD', () => {
    expect(getArrayMD(routenotMD)).toStrictEqual([]);
  });
});

describe('obtainLinks', () => {
  const arrayMD = [
    'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\Carpeta2\\1Links.md',
  ];
  const arrayResult = [
    {
      href: 'https://www.manualweb.net/java/tipos-datos-primitivos/',
      text: 'error404',
      file: 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\Carpeta2\\1Links.md',
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/',
      text: 'Array - MDN',
      file: 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\Carpeta2\\1Links.md',
    },
  ];
  it('deberia resolver un array con links de los distintos archivos con sus caracteristicas {href, text, file}', () => {
    expect(obtainLinks(arrayMD)).toStrictEqual(arrayResult);
  });
  const notLinks = [
    'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\Carpeta2\\0links.md',
  ];
  it('deberia resolver que no hay links', () => {
    expect(obtainLinks(notLinks)).toStrictEqual([]);
  });
});
