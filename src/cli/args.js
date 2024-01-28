import process from 'process';

const parseArgs = () => {
    
    const res = process.argv.reduce((acc, val, i, arr) => {
        if(val.startsWith('--')) {
            return `${acc}${val.slice(2)} is ${arr[i+1]}, `
        }
        return acc
    }, '')

    console.log(res.slice(0, -2));
};

parseArgs();