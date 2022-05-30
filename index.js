/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-unused-vars */
import chalk from 'chalk';
import {
  getPathExist,
  getPathAbsolute,
  convertRelativeToAbsolutePath,
  getArrayMD,
  obtainLinks,
  getHTTPRequest,
} from './md-links.js';

console.log(chalk.white.bgBlue('MDLinks'));

export const mdLinks = (path, option) => new Promise((resolve, reject) => {
  if (!getPathExist(path)) {
    reject(`ERROR: Could not find ${path}`);
  } else {
    const absolutePath = !getPathAbsolute(path) ? convertRelativeToAbsolutePath(path) : path;
    const arrayFilesMD = getArrayMD(absolutePath);
    // console.log(arrayFilesMD.length);
    if (arrayFilesMD.length === 0) {
      reject('Not MD files found on this path');
    } else {
      const arrayLinks = obtainLinks(arrayFilesMD);
      // console.log(arrayLinks.length);
      if (arrayLinks.length === 0) {
        reject('No links found on this path');
      } else if (option && option === true) {
        resolve(getHTTPRequest(arrayLinks));
      } else {
        resolve(arrayLinks);
      }
    }
  }
});
