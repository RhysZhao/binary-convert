/*
 * Author  rhys.zhao
 * Date  2023-02-10 13:51:20
 * LastEditors  rhys.zhao
 * LastEditTime  2023-02-10 14:26:56
 * Description
 */
import binaryConverter from '../lib';
// import binaryConverter from '../src';

const url = 'http://pic.aopioc.com/doc/352511514571313152_4ZgatUZsN5icf61628c923f40412913f02283935564c.pdf';

async function test() {
  const data = await binaryConverter.getBlobFromURL(url);
  console.log('data', data);

  //   binaryConverter.downloadFileByBlob(data, '测试下载');

  // blob => base64
  const base64 = await binaryConverter.toBase64(data);
  console.log('base64', base64);
  // blob => file
  const file = binaryConverter.toFile(data, '文件');
  console.log('file', file);

  //   base64 => blob
  const blob = await binaryConverter.toBlob(base64);
  console.log('blob', blob);
  //   base64 => file
  const newFile = await binaryConverter.toFile(base64, '新文件');
  console.log('newFile', newFile);

  //   file => blob
  const newBlob2 = await binaryConverter.toBlob(file);
  console.log('newBlob2', newBlob2);
  //   file => base64
  const newBase64 = await binaryConverter.toBase64(file);
  console.log('newBase64', newBase64);
}

test();
