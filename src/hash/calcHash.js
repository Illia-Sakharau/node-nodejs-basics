import fs from 'fs';
import path, {dirname} from 'path';
import { fileURLToPath } from "url";
import { createHash } from "crypto";

const __dirname = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
    const filePath = path.join(__dirname, 'files/fileToCalculateHashFor.txt')
    const hash = createHash('sha256');

    const input = fs.createReadStream(filePath);
    input.on('readable', () => {
        const data = input.read();
        if (data)
          hash.update(data);
        else {
          console.log(hash.digest('hex'));
        }
    })
};

await calculateHash();