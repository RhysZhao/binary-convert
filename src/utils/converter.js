/*
 * Author  rhys.zhao
 * Date  2023-02-10 11:36:25
 * LastEditors  rhys.zhao
 * LastEditTime  2023-02-10 14:13:21
 * Description blob, file, base64类型转换
 */

// blob => file
export function blobToFile(blob, filename) {
  return new File([blob], filename, { type: blob.type });
}

// base64 => file
export function dataURLtoFile(dataURL, filename) {
  let arr = dataURL.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}

// blob, file => base64
export function blobToDataURL(blob) {
  return new Promise((resolve, reject) => {
    let a = new FileReader();
    a.onload = function (e) {
      resolve(e.target.result);
    };
    a.readAsDataURL(blob);
  });
}

// file => blob
export const fileToBlob = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const blob = new Blob([e.target.result], { type: file.type });
      resolve(blob);
    };
    reader.readAsDataURL(file);
  });
};

// base64 => blob
export function dataURLtoBlob(dataURL) {
  let arr = dataURL.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}
