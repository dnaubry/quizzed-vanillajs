import quizData from './data/quizzes.json';
import Quiz from './Quiz';

/* Import quiz data from the .json file and create a quiz object from
each set of quiz data along with adding some additional properties */
var Quizzes = {
  currentQuiz: null,
  collection: quizData.quizzes.map(data => new Quiz(data)),
};

export default Quizzes;