import { readFile } from 'node:fs/promises';
const manifest=JSON.parse(await readFile(new URL('../assets/showcase.json',import.meta.url),'utf8'));console.log(JSON.stringify({ready:true,url:`http://127.0.0.1:${manifest.port}/`,...manifest}));
