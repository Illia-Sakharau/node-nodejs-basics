import fs from 'fs';
import path, {dirname} from 'path';
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ERROR_MESSAGE = 'FS operation failed';

const list = async () => {
    const folderPath = path.join(__dirname, 'files')

    if (!fs.existsSync(folderPath)) throw new Error(ERROR_MESSAGE)

    const files = fs.readdirSync(folderPath)
    console.log(files);
};

await list();