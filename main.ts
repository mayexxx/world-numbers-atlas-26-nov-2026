import {cpSync,mkdirSync,writeFileSync} from 'node:fs';
import {join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {buildDossier} from './vendor/makefun-frontend.ts';
const here=fileURLToPath(new URL('.',import.meta.url));
const out=resolve(process.env.MAKEFUN_OUTPUT_DIR??'/output');
mkdirSync(out,{recursive:true});
for(const dir of ['app','screenshots'])cpSync(join(here,dir),join(out,dir),{recursive:true});
writeFileSync(join(out,'dossier.json'),buildDossier(out,{text_max_bytes:163840,screenshots:{max:4,max_bytes:262144},app_max_files:993,app_max_bytes:16777216}));
