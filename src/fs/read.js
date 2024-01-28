import fs from 'fs';
import path, {dirname} from 'path';
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ERROR_MESSAGE = 'FS operation failed';

const read = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt')

    if (!fs.existsSync(filePath)) throw new Error(ERROR_MESSAGE)

    const content = fs.readFileSync(filePath, { encoding: 'utf8' })
    console.log(content);
};

await read();