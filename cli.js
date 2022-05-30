#!/usr/bin/env node
import { mdLinks } from './index.js';

const arg = process.argv;
const argRoute = arg[2];
const argValidate = arg.includes('--validate');
const argStats = arg.includes('--stats');
console.log(argValidate);
// console.log(process.argv);
console.log(`number of arguments is ${arg.length}`);

if (arg.length === 3 && argValidate === false) {
  mdLinks(argRoute, false)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
}

if (arg.length === 4 && argValidate) {
  mdLinks(argRoute, true)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
}

if (arg.length === 4 && argStats) {
  mdLinks(argRoute, true)
    .then((response) => console.log(`Total: ${response.length}`))
    .catch((err) => console.log(err));
}
