import fs from 'fs';
import path, {dirname} from 'path';
import { fileURLToPath } from "url";
import zlib from 'zlib';

const __dirname = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToCompress.txt')
    const arhivePath = path.join(__dirname, 'files', 'archive.gz')

    const readStream = fs.createReadStream(arhivePath)
    const writeStream = fs.createWriteStream(filePath)
    const gunzip = zlib.createGunzip();

    readStream.pipe(gunzip).pipe(writeStream)
};

await decompress();