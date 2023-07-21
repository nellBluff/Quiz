/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable arrow-body-style */
/* eslint-disable no-shadow */
/* eslint-disable linebreak-style */
/* eslint-disable indent */

const fs = require('fs');
const { resolve } = require('path');
const readline = require('readline');
const { reading } = require('./readFiles');
const chalk = require('chalk');
const colors = require('colors');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

async function startTopic() {
  const topics = ['Массивы', 'Операторы JS'];
  console.log(
    chalk.blue(`\n Выбери тему для ${chalk.underline.bgBlue('QUIZ!')} \n`)
      .brightCyan.bold
  );
  topics.map((el, index) =>
    console.log(chalk.blue(`${index + 1} ${el} \n`).bold)
  );

  // await
  const getTopit = await askQuestion('');

  const topic1 = 'tesk-operators';
  const topic2 = 'tesk-arr';
  const readFiles = fs.readFileSync(
    `${__dirname}/topics/${getTopit === '1' ? topic1 : topic2}.txt`,
    'utf-8'
  );
  const newArr = reading(readFiles);
  let points = 0;
  const questions = newArr[0];
  const answers = newArr[1];

  // создаем запрос с консоли;

  const getAnswers = async () => {
    const userAnswers = [];
    for (let i = 0; i < questions.length; i++) {
      const answer = await askQuestion(
        `Вопрос №${i + 1} ---> ${questions[i]} \n\n`.brightCyan.bold
      );
      if (answer.toLowerCase().trim() === answers[i].toLowerCase().trim()) {
        points++;
        console.log(chalk.black.bgYellow.bold(`Правильно! \n\n`).bold);
      } else {
        console.log(chalk.black.bgRed.bold(`Неправильно! \n\n`).bold);
      }
      userAnswers.push(answer);
    }
    return userAnswers;
  };

  getAnswers().then(() => {
    console.log(`Количество правильных ответов - ${points} \n`.brightCyan.bold);
    console.log(
      ('<<<<<<<<<<___THE END___>>>>>>>>>>' + '\n' + '\n' + '\n').rainbow.bold
    );
    rl.close();
  });
}

startTopic();
