import fs from 'fs';
import path, {dirname} from 'path';
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ERROR_MESSAGE = 'FS operation failed';

const copy = async () => {
    const srcPath = path.join(__dirname, 'files')
    const destPath = path.join(__dirname, 'files_copy')

    if (fs.existsSync(destPath) || !fs.existsSync(srcPath)) throw new Error(ERROR_MESSAGE)

    fs.cpSync(srcPath, destPath, {
        recursive: true,
      })
};

await copy();
