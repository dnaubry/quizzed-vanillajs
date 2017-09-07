/* Takes in a variable amount of elements and hides or 
shows them as needed by the quiz */
var Elem = {
  hide() {
    if(arguments.length !== 0) {
      var args = Array.from(arguments);
      args.forEach(arg => {
        arg.classList.add('hidden');
      })   
    }
  },

  show() {
    if(arguments.length !== 0) {
      var args = Array.from(arguments);
      args.forEach(arg => {
        arg.classList.remove('hidden');
      })   
    }
  },
}

export default Elem;
