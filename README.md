<!--
 * Author  rhys.zhao
 * Date  2021-09-16 13:23:39
 * LastEditors  rhys.zhao
 * LastEditTime  2023-02-10 15:00:01
 * Description 拖拽、缩放容器组件
-->

## 描述

binary-convert 是一个 base64, file, blob 相互转换的工具类

## 使用

1. 安装

```
npm i binary-convert -S
```

2. 使用

```
// 引入
import binaryConverter from 'binary-convert';

// ...
// 转换为 base64类型, 其中data是Blob或者File类型
const base64 = await binaryConverter.toBase64(data);

// ...
// 转换为 File类型, 其中data是Blob或者base64类型
const file = binaryConverter.toFile(data, '文件');

// ...
// 转换为 Blob类型, 其中data是base64或者File类型
const blob = await binaryConverter.toBlob(data);
```

## 工具方法介绍

| 方法               | 描述                                   | 参数                                  | 返回值                       |
| :----------------- | :------------------------------------- | :------------------------------------ | :--------------------------- |
| toFile             | 将 Base64 或 Blob 类型转换为 File 类型 | data: 要转换的数据, filename: 文件名  | 转换后的 File 类型数据       |
| toBase64           | 将 File 或 Blob 类型转换为 Base64 类型 | data: 要转换的数据                    | 一个包含转换后数据的 Promise |
| toBlob             | 将 Base64 或 File 类型转换为 Blob 类型 | data: 要转换的数据                    | 一个包含转换后数据的 Promise |
| getBlobFromURL     | 获取将在线文档的 Blob 类型数据         | url: 在线文档 URL                     | 一个包含转换后数据的 Promise |
| downloadFileByBlob | 将 Blob 数据作为文件下载下来           | data: Blob 类型数据, filename: 文件名 | 无返回值                     |
