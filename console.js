/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable arrow-body-style */
/* eslint-disable no-shadow */
/* eslint-disable linebreak-style */
/* eslint-disable indent */

const { resolve } = require('path');
const readline = require('readline');

const topics = ['Тема 1', 'Тема 2', 'Тема 3'];
const questions = ['Вопрос 1', 'Вопрос 2', 'Вопрос 3', 'Вопрос 4'];
const answers = ['Ответ 1', 'Ответ 2', 'Ответ 3', 'Ответ 4'];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
console.log('\n' + 'Выбери тему для QUIZ' + '\n');

// создаем запрос с консоли
const askQuestion = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

const getAnswers = async () => {
    const userAnswers = [];
    for (let i = 0; i < questions.length; i++) {
        const answer = await askQuestion(
            `Вопрос №${i + 1} ---> ${questions[i]} \n\n`
        );
        if (answer.toLowerCase().trim() === answers[i].toLowerCase().trim()) {
            console.log(`Правильно! \n\n`);
        } else {
            console.log(`Неправильно! \n\n`);
        }
        userAnswers.push(answer);
    }
    return userAnswers;
};

getAnswers().then(() => {
    console.log('<<<<<<<<<<___THE END___>>>>>>>>>>' + '\n' + '\n' + '\n');
    rl.close();
});
