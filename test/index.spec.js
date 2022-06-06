import { mdLinks } from '../index';

jest.mock('../libraries.js');

const routeRelative = 'PruebaMD/Carpeta2/1Links.md';
const notroute = 'PruebaMD/Prueba.m';
const routenotMD = 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\Carpeta1';
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

describe('mdLinks', () => {
  it('debería resolver un array con {href, text, file} al ingresar solo la ruta', (done) => {
    mdLinks(routeRelative, false).then((response) => {
      expect(response).toEqual(arrayResult);
      done();
    });
  });
  it('debería resolver un array con {href, text, file, status, ok} al ingresar solo la ruta y validate', (done) => {
    mdLinks(routeRelative, true).then((response) => {
      expect(response).toEqual(arrayResultHTTP);
      done();
    });
  });
  it('debería resolver un error el cual no existe la ruta', (done) => {
    mdLinks(notroute, false).catch((err) => {
      expect(err).toEqual(`ERROR: Could not find this path ${notroute}`);
      done();
    });
  });
  it('debería resolver un error el cual no existen archivos MD', (done) => {
    mdLinks(routenotMD, false).catch((err) => {
      expect(err).toEqual('Not MD files found on this path');
      done();
    });
  });
  it('debería resolver un error el cual no existen links', (done) => {
    mdLinks('PruebaMD/Carpeta2/0links.md', false).catch((err) => {
      expect(err).toBe('Not links found on this path');
      done();
    });
  });
});
