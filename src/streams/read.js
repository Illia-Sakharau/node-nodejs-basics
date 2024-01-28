import fs from 'fs';
import path, {dirname} from 'path';
import { fileURLToPath } from "url";
import { stdout } from "process";

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const filePath = path.join(__dirname, 'files/fileToRead.txt')

    const input = fs.createReadStream(filePath);
    input.pipe(stdout)
};

await read();