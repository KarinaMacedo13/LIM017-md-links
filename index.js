/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-unused-vars */
import {
  getPathExist,
  getPathAbsolute,
  convertRelativeToAbsolutePath,
  getArrayMD,
  obtainLinks,
  getHTTPRequest,
} from './md-links.js';

export const mdLinks = (path, option) => new Promise((resolve, reject) => {
  if (!getPathExist(path)) {
    reject(`ERROR: Could not find this path ${path}`);
  } else {
    const absolutePath = !getPathAbsolute(path) ? convertRelativeToAbsolutePath(path) : path;
    const arrayFilesMD = getArrayMD(absolutePath);
    if (arrayFilesMD.length === 0) {
      reject('Not MD files found on this path');
    } else {
      const arrayLinks = obtainLinks(arrayFilesMD);
      if (arrayLinks.length === 0) {
        reject('Not links found on this path');
      } else if (option && option === true) {
        resolve(getHTTPRequest(arrayLinks));
      } else {
        resolve(arrayLinks);
      }
    }
  }
});
