import Quizzes from './Quizzes';
import QuizList from './QuizList';
import QuizContainer from './QuizContainer';
import Elem from './Elem';

var Controller = {
  init() {
    // Set current quiz to first quiz in list
    Quizzes.currentQuiz = Quizzes.collection[0];

    // Initialize views
    QuizList.init();
    QuizContainer.init();
  },

  getCurrentQuiz() {
    return Quizzes.currentQuiz;
  },

  // When a quiz is selected from the list, set it as current and render it
  setCurrentQuiz(idx) {
    Quizzes.currentQuiz = Quizzes.collection[idx];
    QuizContainer.render();
  },

  /* When the retry button is clicked, reset the quiz status, counter, and answers
  so the user can take it again from scratch */
  resetQuiz() {
    Quizzes.currentQuiz.status = 'not-started';
    Quizzes.currentQuiz.questionCounter = 0;
    Quizzes.currentQuiz.answers = [];
    QuizContainer.render();
  },

  /* Set the quiz status to 'complete'. If the user switches between quizzes, 
  it will show the score and answers if the quiz status is complete */
  completeQuiz() {
    Quizzes.currentQuiz.status = 'complete';
  },

    /* Set the quiz status to 'in-progess'. If the user switches between quizzes, 
  it will show the question the user left off on if the quiz status is in-progress*/
  startQuiz() {
    Quizzes.currentQuiz.status = 'in-progress';
  },

  // Returns an array of quiz names so the QuizList view can display them
  getQuizNames() {
    return Quizzes.collection.map(quiz => quiz.name);
  },

  /* Save the answer so it can be used to score the quiz once it is completed or
  restored if the user returns to previous questions */
  saveAnswer(answer) {
    const questionIndex = Quizzes.currentQuiz.questionCounter;

    Quizzes.currentQuiz.answers[questionIndex] = answer;
  },

  getSavedAnswer() {
    const answerIndex = Quizzes.currentQuiz.questionCounter;
    
    return Quizzes.currentQuiz.answers[answerIndex];
  },

  /* Returns the number of questions answered correctly, a percentage score,
  and the total number of questions in that quiz so they can be displayed */
  getScore() {
    const quiz = Quizzes.currentQuiz,
          total = quiz.numOfQuestions;
    let correct = 0,
        percentage;
    
    quiz.answers.forEach((answer, index) => {
      if (+answer === quiz.questions[index].correctAnswer) {
        correct++;
      }
    });

    percentage = ((correct / total) * 100).toFixed(0);

    return {
      correct,
      percentage,
      total
    }
  },

  incrementQuestionCounter() {
    Quizzes.currentQuiz.questionCounter++;
  },

  decrementQuestionCounter() {
    Quizzes.currentQuiz.questionCounter--;
  },

  /* Checks if there are more questions in the quiz so the quiz can be 
  completed the next time the next button is pressed if there are no more questions */
  isLastQuestion() {
    return (Quizzes.currentQuiz.questionCounter < (Quizzes.currentQuiz.numOfQuestions - 1))
      ? false : true;
  },

  /* Validate that a choice has been selected to prevent moving forward
  if an answer has not been chosen */
  validateChoices() {
    let isChoiceSelected = false;

    this.choices.forEach(choice => {
      if (choice.checked === true) {
        isChoiceSelected = true;
      }
    });

    return isChoiceSelected;
  },

  /* Mark a choice as checked if the question has already been answered 
  when returning to a previous question */
  restoreSelectedChoice() {
    if(this.getSavedAnswer() !== undefined) {
      const idx = this.getSavedAnswer();
      this.choices[idx].checked = true;
    }
  },

  
  configureChoices() {
    this.choices = Array.from(document.getElementsByName('choices'));

    this.restoreSelectedChoice();

    this.handleRadioChange = this.handleRadioChange.bind(this);

    this.choices.forEach(radio => {
      radio.addEventListener('change', this.handleRadioChange);
    });
  },

  // Remove the validation message if it's visible and save the selected choice
  handleRadioChange() {
    Elem.hide(QuizContainer.validationEl);
    const choice = document.querySelector('[name="choices"]:checked').value;
    this.saveAnswer(choice);
  },
}

export default Controller;
