/*
 * Author  rhys.zhao
 * Date  2022-01-28 15:27:52
 * LastEditors  rhys.zhao
 * LastEditTime  2023-02-10 14:01:45
 * Description 入口文件
 */
import * as converter from './utils/converter';
import * as download from './utils/download';
import * as typeCheck from './utils/typeCheck';

class BinaryConverter {
  toFile(data, filename = 'file') {
    if (typeCheck.isBase64(data)) {
      return converter.dataURLtoFile(data, filename);
    }
    if (typeCheck.isBlob(data)) {
      return converter.blobToFile(data, filename);
    }
    throw new TypeError('data should be base64 string or Blob type');
  }

  toBlob(data) {
    if (typeCheck.isBase64(data)) {
      return Promise.resolve(converter.dataURLtoBlob(data));
    }
    if (typeCheck.isFile(data)) {
      return converter.fileToBlob(data);
    }
    throw new TypeError('data should be base64 string or File type');
  }

  toBase64(data) {
    if (typeCheck.isBlob(data)) {
      return converter.blobToDataURL(data);
    }
    throw new TypeError('data should be Blob type or File type');
  }

  getBlobFromURL(url) {
    if (typeCheck.isURL(url)) {
      return download.getBlobFromUrl(url);
    }
    throw new TypeError('url is not valid');
  }

  downloadFileByBlob(data, filename) {
    if (typeCheck.isBlob(data)) {
      return download.downloadFileByBlob(data, filename);
    }
    throw new TypeError('data should be Blob type');
  }
}

export default new BinaryConverter();
