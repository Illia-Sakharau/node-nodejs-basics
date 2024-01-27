import process from 'process';

const parseEnv = () => {
    let res = '';
    for (let key in process.env) {
        if (key.startsWith('RSS_')) {
            res = res + `${key}=${process.env[key]}; `
        }
    }
    console.log(res.slice(0, -2));
};

parseEnv();