/*
 * Author  rhys.zhao
 * Date  2023-02-10 11:43:37
 * LastEditors  rhys.zhao
 * LastEditTime  2023-02-10 13:41:17
 * Description 类型检查
 */
export function isBase64(str) {
  const reg =
    /^\s*data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)\s*$/i;
  return reg.test(str);
}

export function isBlob(blob) {
  return blob instanceof Blob;
}

export function isFile(file) {
  return file instanceof File;
}

export function isURL(url) {
  const reg = /^(?:(http|https|ftp):\/\/)?((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i;
  return reg.test(url);
}
