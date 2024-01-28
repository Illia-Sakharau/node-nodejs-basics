import fs from 'fs';
import path, {dirname} from 'path';
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ERROR_MESSAGE = 'FS operation failed';

const rename = async () => {
    const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt')
    const newPath = path.join(__dirname, 'files', 'properFilename.md')

    if (fs.existsSync(newPath) || !fs.existsSync(oldPath)) throw new Error(ERROR_MESSAGE)

    fs.renameSync(oldPath, newPath)
};

await rename();