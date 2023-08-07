const fs = require('fs');

const readFiles = fs.readFileSync(
  `${__dirname}/topics/nighthawk_flashcard_data.txt`,
  'utf-8'
);

function reading(readFiles) {
  const reg = /[А-я A-z{}?!:;'"&|=,+)(--\d]+/gi;
  const matches = readFiles.match(reg);

  const QA = [];
  const q = matches.filter((el, index) => index % 2 === 0);
  const a = matches.filter((el, index) => index % 2);
  QA.push(q, a);
  // console.log(QA);
  return QA;
}
// const result = doubleArr(doneFile);

module.exports = {
  reading,
};
