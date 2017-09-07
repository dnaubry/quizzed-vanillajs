var Quiz = function(data) {
  this.name = data.name;
  this.questions = data.questions;
  this.quote = data.quote;
  this.quoteSource = data.quoteSource;
  this.numOfQuestions = this.questions.length;
  this.questionCounter = 0;
  this.answers = [];
  /* Statuses: not-started, in-progress, complete
  These help control display the quiz in the correct status 
  when a user switches between the quizzes */ 
  this.status = 'not-started';
}

export default Quiz;
