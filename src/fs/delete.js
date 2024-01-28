import fs from 'fs';
import path, {dirname} from 'path';
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ERROR_MESSAGE = 'FS operation failed';

const remove = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRemove.txt')

    if (!fs.existsSync(filePath)) throw new Error(ERROR_MESSAGE)

    fs.unlinkSync(filePath)
};

await remove();