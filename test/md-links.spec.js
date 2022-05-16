import { getpathExist, convertrelativeToAbsolutePath, getpathAbsolute} from '../src/md-links'

const routeRelative = 'PruebaMD/prueba.md';
const routeAbsolute = 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\prueba.md';
const notroute = 'PruebaMD/Prueba.m';

describe('getpathExist', () => {
  it('deberia existir la ruta', () => {
    expect(getpathExist(routeRelative)).toBe(true);
  });
  it('no deberia existir la ruta', () => {
    expect(getpathExist(notroute)).toBe(false);
  });
});

describe('getpathAbsolute', () => {
  it('deberia ser una ruta absoluta', () => {
    expect(getpathAbsolute(routeAbsolute)).toBe(true);
  });
  it('no deberia ser una ruta absoluta', () => {
    expect(getpathAbsolute(routeRelative)).toBe(false);
  });
});

describe('convertrelativeToAbsolutePath', () => {
  it('deberia resolver una ruta en windows', () => {
    expect(convertrelativeToAbsolutePath(routeRelative)).toBe(routeAbsolute);
  });
});