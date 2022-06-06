import {
  getPathExist,
  convertRelativeToAbsolutePath,
  getPathAbsolute,
  getArrayMD,
  obtainLinks,
  getHTTPRequest,
} from '../md-links.js';

jest.mock('../libraries.js');

const routeRelative = 'PruebaMD/prueba.md';
const routeAbsolute = 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\prueba.md';
const notroute = 'PruebaMD/Prueba.m';
const routeDirectory = 'C:/Users/Laboratoria/Documents/GitHub/LIM017-md-links/PruebaMD';
const routenotMD = 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\Carpeta1';
const arrayTest = [
  'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\prueba.md',
  'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\Carpeta2\\roto.md',
  'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\Carpeta2\\1Links.md',
  'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\Carpeta2\\0links.md',
];
const arrayResult = [
  {
    file: 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\Carpeta2\\1Links.md',
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
    text: 'Array.prototype.sort() - MDN',
  },
  {
    file: 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\Carpeta2\\1Links.md',
    href: 'https://curriculum.laboratoria.la/es/topics/javascript/03-functions/01-classic',
    text: 'Funciones clásicas',
  },
  {
    file: 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\Carpeta2\\1Links.md',
    href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/',
    text: 'Array - MDN',
  },
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

describe('getHTTPRequest', () => {
  const arrayResultHTTP = [
    {
      file: 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\Carpeta2\\1Links.md',
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScri',
      ok: 'OK',
      status: 200,
      text: 'Array.prototype.sort() - MDN',
    },
    {
      file: 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\Carpeta2\\1Links.md',
      href: 'https://curriculum.laboratoria.la/es/topics/javasc',
      ok: 'OK',
      status: 200,
      text: 'Funciones clásicas',
    },
    {
      file: 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\Carpeta2\\1Links.md',
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScri',
      ok: 'OK',
      status: 200,
      text: 'Array - MDN',
    },
  ];

  it('deberia resolver un array con links de los distintos archivos con sus caracteristicas {href, text, file, status, ok}', (done) => {
    getHTTPRequest(arrayResult).then((response) => {
      expect(response).toEqual(arrayResultHTTP);
      done();
    });
  });
});
