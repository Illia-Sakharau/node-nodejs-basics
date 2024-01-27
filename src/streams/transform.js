import { stdin, stdout } from "process";
import { Transform, pipeline } from "stream";

const reverseText = (text) => text.split('').reverse().join('')

const transform = async () => {
    const reverseTransform = new Transform({
        transform(chunk, encoding, callback) {
            const reversedText = reverseText(chunk.toString()).slice(1) + '\n'
            callback(null, reversedText);
        },
      })

    stdin.pipe(reverseTransform).pipe(stdout)
};

await transform();