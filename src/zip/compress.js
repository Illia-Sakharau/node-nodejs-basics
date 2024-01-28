import fs from 'fs';
import path, {dirname} from 'path';
import { fileURLToPath } from "url";
import zlib from 'zlib';

const __dirname = dirname(fileURLToPath(import.meta.url));

const compress = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToCompress.txt')
    const arhivePath = path.join(__dirname, 'files', 'archive.gz')

    const readStream = fs.createReadStream(filePath)
    const writeStream = fs.createWriteStream(arhivePath)
    const gzip = zlib.createGzip();

    readStream.pipe(gzip).pipe(writeStream)
};

await compress();