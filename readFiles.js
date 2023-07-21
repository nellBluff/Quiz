const fs = require('fs');

const readFiles = fs.readFileSync(
  `${__dirname}/topics/nighthawk_flashcard_data.txt`,
  'utf-8'
);

function transplate(str) {
  const reg = /[А-я ?!-\d]+/gi;
  const matches = str.match(reg);
  return matches;
}

const doneFile = transplate(readFiles);

function doubleArr(arr) {
  const QA = [];
  const q = arr.filter((el, index) => index % 2 === 0);
  const a = arr.filter((el, index) => index % 2);
  QA.push(q, a);
  console.log(QA);
  return QA;
}

const result = doubleArr(doneFile);

module.exports = result;
