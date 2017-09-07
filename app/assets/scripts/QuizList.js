import Controller from './Controller';

/* View for the list of available quizzes */
var QuizList = {
  init() {
    this.quizListEl = document.getElementById('quiz-list');

    this.render();
  },
  
  // For each quiz name, add an <li> to the quiz list element
  render() {
    Controller.getQuizNames().forEach((name, index) => {
      this.quizListEl.innerHTML += `<li id="${index}" class="quiz-link">${name}</li>`;
    });

    this.setActiveLinkStyle(0);

    /* Add event listener to the quiz list which sets the 
    selected quiz as current and changes the style of the quiz link */
    this.quizListEl.addEventListener('click', () => {
      const selectedQuiz = event.target.id;
      Controller.setCurrentQuiz(selectedQuiz);
      this.setActiveLinkStyle(selectedQuiz);
    });
  },

  /* Changes the style of the link for the current quiz and 
  resets the style of the other quiz links */
  setActiveLinkStyle(idx) {
    this.quizLinks = document.querySelectorAll('.quiz-link');
    
    this.quizLinks.forEach(link => {
      link.classList.remove('active');
    })
    this.quizLinks[idx].classList.add('active');
  }
}

export default QuizList;