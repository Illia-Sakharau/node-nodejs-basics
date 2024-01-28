import { fork } from 'child_process'
import path, {dirname} from 'path';
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
    const modulePath = path.join(__dirname, 'files', 'script.js')
    fork(modulePath, args)
};

// Put your arguments in function call to test this functionality
spawnChildProcess();
