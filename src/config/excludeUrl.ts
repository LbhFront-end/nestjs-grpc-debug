import { RequestMethod } from '@nestjs/common';

export const generateExcludeUrls = (arr: string[]) => {
  const urls = [];
  arr.forEach(path =>
    urls.push({
      path,
      method: RequestMethod.ALL,
    }),
  );
  return urls;
};

export const urls = [
  '/status',
  '/doc',
  '/login',
  '/voyager',
  '/health',
  '/socket.io',
  '/upload',
  '/uploads',
  '/vcode',
  '/isexist',
];
export const ExcludeUrls = generateExcludeUrls(urls);
