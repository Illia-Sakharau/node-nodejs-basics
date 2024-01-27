import fs from 'fs';
import path, {dirname} from 'path';
import { fileURLToPath } from "url";
import { stdin } from "process";

const __dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
    const filePath = path.join(__dirname, 'files/fileToWrite.txt')

    const writeStreamToFile = fs.createWriteStream(filePath);
    stdin.pipe(writeStreamToFile)
};

await write();