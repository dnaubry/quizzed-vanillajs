import Controller from './Controller';
import Elem from './Elem';

/* View for the active quiz */
var QuizContainer = {
  init() {
    this.quizEl = document.getElementById('quiz');
    this.startBtn = document.getElementById('start');
    this.backBtn = document.getElementById('back');
    this.nextBtn = document.getElementById('next');
    this.retryBtn = document.getElementById('retry');
    this.validationEl = document.getElementById('validation');

    this.firstQuestion = this.firstQuestion.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.prevQuestion = this.prevQuestion.bind(this);

    this.startBtn.addEventListener('click', this.firstQuestion);
    this.nextBtn.addEventListener('click', this.nextQuestion);
    this.backBtn.addEventListener('click', this.prevQuestion);
    this.retryBtn.addEventListener('click', Controller.resetQuiz);

    this.render();
  },

  render() {
    this.quiz = Controller.getCurrentQuiz();
    // When starting (or restarting) a quiz, show the quiz start data and start button
    if(this.quiz.status === 'not-started') {
      this.startQuiz();
      // When a user switches back to a completed quiz, show the completed quiz data - score and answers
    } else if (this.quiz.status === 'complete') {
      this.completeQuiz();
      // When a user switches back to a quiz in progress, show the question they left off on
    } else {
      this.showQuestion();
    }
  },

  /* Display the current question along with its answer choices. The controller 
  restores the previously selected choice if there is one */
  showQuestion() {
    const quiz = this.quiz,
          currentQuestion = quiz.questions[quiz.questionCounter];

    this.quizEl.innerHTML = '';
    this.quizEl.innerHTML += `
      <div class="count">
        ${quiz.questionCounter + 1} / ${quiz.numOfQuestions}
      </div>`;
    this.quizEl.innerHTML += `
      <p class="question">${currentQuestion.question}</p>
    `;

    currentQuestion.choices.forEach((choice, index) => {
      this.quizEl.innerHTML += `
        <div class="choice">
          <input type="radio" name="choices" id="choice-${index}" class="choice--radio" value="${index}" />
          <label for="choice-${index}" class="choice--label">${choice}</label>
        </div>
      `;
    });

    Controller.configureChoices();
    this.showButtons();
  },

  // Display the appropriate buttons for the current question
  showButtons() {
    // If it's the first question, don't show the back button
    if(this.quiz.questionCounter === 0) {
      Elem.hide(this.retryBtn, this.backBtn, this.startBtn);
      Elem.show(this.nextBtn);
    } else if (this.quiz.questionCounter < this.quiz.numOfQuestions) {
      Elem.hide(this.retryBtn, this.startBtn);
      Elem.show(this.backBtn, this.nextBtn);
      // If the quiz is complete, only show the retry button
    } else {
      Elem.hide(this.startBtn, this.backBtn, this.nextBtn);
      Elem.show(this.retryBtn);
    }
  },

  // Displays the quiz name, a quote, and a start button
  startQuiz() {
    this.quizEl.innerHTML = `
      <p class="name">${this.quiz.name}</p>
      <p class="quote">${this.quiz.quote}</p>
      <p class="quote-source">${this.quiz.quoteSource}</p>
    `;

    Elem.hide(this.retryBtn, this.nextBtn, this.backBtn);
    Elem.show(this.startBtn);
  },

  // Displays the first question of a quiz. The controller changes the status of the quiz to 'in progress'
  firstQuestion() {
    Elem.hide(this.startBtn);
    Elem.show(this.nextBtn);

    Controller.startQuiz();
    
    this.showQuestion();
  },

  /* As long as an answer has been chosen, increments the question counter and 
  displays the next question in the quiz. If the current question is the last question, 
  completes the quiz instead. If no answer has been chosen when the 'next' button is clicked, 
  displays a message asking the user to select a choice */
  nextQuestion() {
    if (Controller.validateChoices()) {
      Elem.show(this.backBtn);
      if(!Controller.isLastQuestion()) {
        Controller.incrementQuestionCounter();
        this.showQuestion();
      } else {
        this.completeQuiz();
      }
    } else {
      Elem.show(this.validationEl);
    }
  },

  // Decrements the question counter and shows the previous question
  prevQuestion() {
    Controller.decrementQuestionCounter();
    this.showQuestion();
    if(this.quiz.questionCounter === 0) {
      Elem.hide(this.backBtn);
    }
  },

  /* The controller marks the quiz as completed and gets the score.
  Displays the score and an button to allow the user to view the answers */
  completeQuiz() {
    Controller.completeQuiz();
    
    Elem.hide(this.backBtn, this.nextBtn, this.startBtn);
    Elem.show(this.retryBtn);

    const score = Controller.getScore();
  
    this.quizEl.innerHTML = "";    
    this.quizEl.innerHTML += `
      <p class="score">${score.percentage}%</p>    
      <p class="correct">You got ${score.correct} out of ${score.total} questions right.</p>
      <div class="btn-container">
        <button id="answers" class="btn-link">Show answers</button>
      </div>
    `;

    this.answersBtn = document.getElementById('answers');
    this.showAnswers = this.showAnswers.bind(this);
    this.answersBtn.addEventListener('click', this.showAnswers);
  },

  /* Displays the selected answers along with the correct answer if the chosen
  answer was incorrect */
  showAnswers() {
    Elem.hide(this.answersBtn);

    const answers = this.quiz.answers,
          questions = this.quiz.questions;

    answers.forEach((answer, index) => {
      if (+answer === questions[index].correctAnswer) {
        this.quizEl.innerHTML += `
          <div class="answer">
            <p>
              <span class="num">${index + 1}</span>
              ${questions[index].choices[answer]} 
              <span class="icon-correct">✔</span>
            </p>
          </div>
        `;
      } else {
        this.quizEl.innerHTML += `
          <div class="answer">
            <p>
              <span class="num">${index + 1}</span>
              ${questions[index].choices[answer]}
              <span class="icon-incorrect">X</span>
              </p>
            <p class="answer-correct">
              <span>Correct answer:</span> ${questions[index].choices[questions[index].correctAnswer]}
            </p>
          </div>
        `;
      }
    });
  },
}

export default QuizContainer;
