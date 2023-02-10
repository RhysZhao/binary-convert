/*
 * Author  rhys.zhao
 * Date  2023-02-10 11:40:43
 * LastEditors  rhys.zhao
 * LastEditTime  2023-02-10 11:41:57
 * Description blob下载相关
 */

// url => blob
export function getBlobFromUrl(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.open('GET', decodeURI(url));
    xhr.addEventListener('readystatechange', function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.response);
        }
      }
    });
    xhr.send();
  });
}

// blob => download file
export function downloadFileByBlob(blob, fileName) {
  if (!blob instanceof Blob) {
    throw new TypeError('blob must be a Blob');
  }
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(a.href);
  a.remove();
}
