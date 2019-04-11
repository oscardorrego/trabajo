
const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('file.txt');
  const readLine = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  for await (const line of readLine) {
    console.log(`Line from file: ${line}`);
  }
}

module.exports = processLineByLine;