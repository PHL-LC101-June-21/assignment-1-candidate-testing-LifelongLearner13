/* Assignment 1: Candidate testing

Requirements¶
* Ask the candidate (user) to enter their name
* Use a loop to ask five questions, one at a time, to the candidate
* Collect the candidate's answers
* Check those answers for accuracy (case insensitive equality check)
* Calculate the candidate's overall percentage
* Determine if the candidate did well enough to enter our program (need >= 80% to pass)
* Display the results.
*/

const input = require('readline-sync');

/* ----- SETUP ----- */

/* First Question */
const question = 'Who was the first American woman in space? ';
const correctAnswer = 'Sally Ride';

/* Muli-question quiz */
const questions = [
  'Who was the first American woman in space? ',
  'True or false: 5 kilometer == 5000 meters? ',
  '(5 + 3)/2 * 10 = ? ',
  'Given the array [8, \'Orbit\', \'Trajectory\', 45], what entry is at index 2? ',
  'What is the minimum crew size for the ISS? '];
const correctAnswers = ['Sally Ride', 'true', '40', 'Trajectory', '3'];
const ACCEPTANCE_THRESHOLD = 80;

/* User input */
let candidateName = '';
let candidateAnswer = '';
let candidateAnswers = [];

/* Gradding */
let numCorrect = 0;

function gradeQuiz(candidateAnswers) {
  numCorrect = 0;
  for (let idx = 0; idx < questions.length; idx++) {
    if (candidateAnswers[idx].toLowerCase() === correctAnswers[idx].toLowerCase()) {
      numCorrect++;
    }
  }

  return (numCorrect / questions.length) * 100;
}

function runProgram() {
  candidateName = input.question('What is your name? ');

  /* Ask questions */
  for (let idx = 0; idx < questions.length; idx++) {
    candidateAnswers.push(input.question(`${idx}) ${questions[idx]}`));
  }
  candidateAnswer = candidateAnswers[0];

  gradeQuiz(candidateAnswers);

  console.log('\n------ RESULTS ------');
  console.log(`Candidate Name: ${candidateName}`);

  for (let idx = 0; idx < questions.length; idx++) {
    console.log(`${idx}) ${questions[idx]}`);
    console.log(`Your Answer: ${candidateAnswers[idx].toLowerCase()}`);
    console.log(`Correct Answer: ${correctAnswers[idx].toLowerCase()}\n`);
  }

  let grade = gradeQuiz(candidateAnswers);
  console.log(`>>> Overall Grade: ${grade}% (${numCorrect} of ${questions.length} correct) <<<`);
  console.log(`>>> Status: ${grade >= 80 ? 'PASSED' : 'FAILED'} <<<`);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};