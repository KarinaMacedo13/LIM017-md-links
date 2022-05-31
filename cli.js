#!/usr/bin/env node
import chalk from 'chalk';
import { mdLinks } from './index.js';

const arg = process.argv;
const argRoute = arg[2];
const argValidate = arg.includes('--validate');
const argStats = arg.includes('--stats');
const cGreen = chalk.green;
const cBlue = chalk.blue;
const cMagenta = chalk.magenta;
const cYellow = chalk.yellow;
const cCyan = chalk.cyan;
const cRed = chalk.red;

console.log(chalk.white.bgMagenta('Welcome MDLinks'));
if (arg.length === 2) {
  console.log('Enter the command <mdLinks --help> for more information');
}

if (arg.length === 3 && argRoute === '--help') {
  console.log(`\nThese are the options: \n${cGreen('--validate:')} \n--stats:You can \n--stats --validate: \n--help:`);
} else {
  if (arg.length === 3 && !argValidate) {
    mdLinks(argRoute, false)
      .then((response) => response.forEach((e) => console.log(`\n${cRed('Reference: ')}${cGreen(e.href)}\n${cBlue('Text: ')}${cGreen(e.text)}\n${cMagenta('File: ')}${cGreen(e.file)}`)))
      .catch((err) => console.log(chalk.bgRed(chalk.white(err))));
  }

  if (arg.length === 4 && argValidate) {
    mdLinks(argRoute, true)
      .then((response) => response.forEach((e) => console.log(`\n${cRed('Reference: ')}${cGreen(e.href)}\n${cBlue('Text: ')}${cGreen(e.text)}\n${cMagenta('File: ')}${cGreen(e.file)}\n${cCyan('Status: ')} ${cYellow(e.status)}\n${cCyan('ok: ')}${cGreen(e.ok)}`)))
      .catch((err) => console.log(chalk.bgRed(chalk.white(err))));
  }

  if (arg.length === 4 && argStats) {
    mdLinks(argRoute, false)
      .then((response) => {
        const unique = [...new Set(response.map((element) => element.href))].length;
        console.log(`\n${cCyan('Total: ')}${cGreen(response.length)}\n${cMagenta('Unique: ')}${cGreen(unique)}`);
      })
      .catch((err) => console.log(chalk.bgRed(chalk.white(err))));
  }

  if (arg.length === 5 && argStats && argValidate) {
    mdLinks(argRoute, true)
      .then((response) => {
        const unique = [...new Set(response.map((element) => element.href))].length;
        const broken = response.filter((element) => element.ok.match('FAIL')).length;
        console.log(`\n${cCyan('Total: ')}${cGreen(response.length)}\n${cMagenta('Unique: ')}${cGreen(unique)}\n${cRed('Broken: ')}${cGreen(broken)}`);
      })
      .catch((err) => console.log(chalk.bgRed(chalk.white(err))));
  }
}
