import fs from 'fs';
import path, {dirname} from 'path';
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url)); 
const CONTENT = 'I am fresh and young';
const ERROR_MESSAGE = 'FS operation failed';

const create = async () => {
    const filePath = path.join(__dirname, 'files', 'fresh.txt')

    if (fs.existsSync(filePath)) throw new Error(ERROR_MESSAGE)

    fs.writeFileSync(filePath, CONTENT)
};

await create();