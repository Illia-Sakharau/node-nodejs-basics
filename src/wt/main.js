import { Worker } from 'worker_threads'
import os from 'os'
import path, {dirname} from 'path';
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const STATUSES = {
    resolved: 'resolved',
    error: 'error'
}

const calcFibonacci = (data) => new Promise ((resolve) => {
    const workerPath = path.join(__dirname, 'worker.js')
    const worker = new Worker(workerPath, {
        workerData: data
    })

    worker.on('message', (res) => resolve({ status: STATUSES.resolved, data: res }))
    worker.on('error', () => resolve({ status: STATUSES.error, data: null }))
})

const performCalculations = async () => {
    const startNum = 10;

    const calculations = os.cpus().map((_, i)=> calcFibonacci(startNum + i));
    const res = await Promise.all(calculations);

    console.log(res);
};

await performCalculations();