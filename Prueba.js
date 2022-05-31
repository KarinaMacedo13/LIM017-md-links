// // const personas = [
// //   { nombre: 'Edu', edad: 35 },
// //   { nombre: 'Manuel', edad: 37 },
// //   { nombre: 'Marta', edad: 42 },
// //   { nombre: 'Edu', edad: 25 },
// // ];

// // const busqueda = personas.reduce((acc, persona) => {
// //   acc[persona.nombre] = ++acc[persona.nombre] || 0;
// //   return acc;
// // }, {});

// // console.log(busqueda);
// // const duplicados = personas.filter((persona) => busqueda[persona.nombre]);

// // console.log(duplicados);

// /*
//   [
//     { edad: 35, nombre: "Edu" },
//     { edad: 25, nombre: "Edu" }
//   ]
//   */

// // const x = [1, 1, 2, 3, 4, 5, 6, 6, 6, 7];
// // const uniqs = x.filter((item, index, array) => array.indexOf(item) === index);
// // console.log(uniqs); // [ 1, 2, 5, 6 ]

// const array = [
//   {
//     href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
//     text: 'Arreglos',
//     file: 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\prueba.md',
//   },
//   {
//     href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/',
//     text: 'Array - MDN',
//     file: 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\prueba.md',
//   },
//   {
//     href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
//     text: 'Arreglos',
//     file: 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\prueba.md',
//   },
//   {
//     href: 'https://www.manualweb.net/java/tipos-datos-primitivos/',
//     text: 'error404',
//     file: 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\prueba.md',
//   },
// ];

// const unique = [...new Set(array.map((element) => element.href))].length;
// console.log(unique);

// const broken = [
//   {
//     href: 'https://curriculum.laboratoria.la/es/topics/javasc',
//     text: 'Arreglos',
//     file: 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\prueba.md',
//     status: 200,
//     ok: 'OK',
//   },
//   {
//     href: 'https://developer.mozilla.org/es/docs/Web/JavaScri',
//     text: 'Array - MDN',
//     file: 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\prueba.md',
//     status: 200,
//     ok: 'OK',
//   },
//   {
//     href: 'https://developer.mozilla.org/es/docs/Web/JavaScri',
//     text: 'Array.prototype.sort() - MDN',
//     file: 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\prueba.md',
//     status: 200,
//     ok: 'OK',
//   },
//   {
//     href: 'https://curriculum.laboratoria.la/es/topics/javasc',
//     text: 'Funciones clásicas',
//     file: 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\prueba.md',
//     status: 200,
//     ok: 'OK',
//   },
//   {
//     href: 'https://curriculum.laboratoria.la/es/topics/javasc',
//     text: 'Arreglos',
//     file: 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\prueba.md',
//     status: 200,
//     ok: 'OK',
//   },
//   {
//     href: 'https://www.manualweb.net/java/tipos-datos-primiti',
//     text: 'error404',
//     file: 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\prueba.md',
//     status: 404,
//     ok: 'FAIL',
//   },
//   {
//     href: 'htps://www.manualweb.net/java/tipos-datos-primitiv',
//     text: 'roto',
//     file: 'C:\\Users\\Laboratoria\\Documents\\GitHub\\LIM017-md-links\\PruebaMD\\prueba.md',
//     status: 'Error',
//     ok: 'FAIL',
//   },
// ];

// const arrayStatus = broken.filter((element) => element.ok.match('FAIL'));
// console.log(arrayStatus.length);
