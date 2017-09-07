/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(25)('wks');
var uid = __webpack_require__(15);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(22)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var createDesc = __webpack_require__(12);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(3);
var IE8_DOM_DEFINE = __webpack_require__(41);
var toPrimitive = __webpack_require__(56);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Quizzes = __webpack_require__(35);

var _Quizzes2 = _interopRequireDefault(_Quizzes);

var _QuizList = __webpack_require__(34);

var _QuizList2 = _interopRequireDefault(_QuizList);

var _QuizContainer = __webpack_require__(33);

var _QuizContainer2 = _interopRequireDefault(_QuizContainer);

var _Elem = __webpack_require__(16);

var _Elem2 = _interopRequireDefault(_Elem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Controller = {
  init: function init() {
    // Set current quiz to first quiz in list
    _Quizzes2.default.currentQuiz = _Quizzes2.default.collection[0];

    // Initialize views
    _QuizList2.default.init();
    _QuizContainer2.default.init();
  },
  getCurrentQuiz: function getCurrentQuiz() {
    return _Quizzes2.default.currentQuiz;
  },


  // When a quiz is selected from the list, set it as current and render it
  setCurrentQuiz: function setCurrentQuiz(idx) {
    _Quizzes2.default.currentQuiz = _Quizzes2.default.collection[idx];
    _QuizContainer2.default.render();
  },


  /* When the retry button is clicked, reset the quiz status, counter, and answers
  so the user can take it again from scratch */
  resetQuiz: function resetQuiz() {
    _Quizzes2.default.currentQuiz.status = 'not-started';
    _Quizzes2.default.currentQuiz.questionCounter = 0;
    _Quizzes2.default.currentQuiz.answers = [];
    _QuizContainer2.default.render();
  },


  /* Set the quiz status to 'complete'. If the user switches between quizzes, 
  it will show the score and answers if the quiz status is complete */
  completeQuiz: function completeQuiz() {
    _Quizzes2.default.currentQuiz.status = 'complete';
  },


  /* Set the quiz status to 'in-progess'. If the user switches between quizzes, 
  it will show the question the user left off on if the quiz status is in-progress*/
  startQuiz: function startQuiz() {
    _Quizzes2.default.currentQuiz.status = 'in-progress';
  },


  // Returns an array of quiz names so the QuizList view can display them
  getQuizNames: function getQuizNames() {
    return _Quizzes2.default.collection.map(function (quiz) {
      return quiz.name;
    });
  },


  /* Save the answer so it can be used to score the quiz once it is completed or
  restored if the user returns to previous questions */
  saveAnswer: function saveAnswer(answer) {
    var questionIndex = _Quizzes2.default.currentQuiz.questionCounter;

    _Quizzes2.default.currentQuiz.answers[questionIndex] = answer;
  },
  getSavedAnswer: function getSavedAnswer() {
    var answerIndex = _Quizzes2.default.currentQuiz.questionCounter;

    return _Quizzes2.default.currentQuiz.answers[answerIndex];
  },


  /* Returns the number of questions answered correctly, a percentage score,
  and the total number of questions in that quiz so they can be displayed */
  getScore: function getScore() {
    var quiz = _Quizzes2.default.currentQuiz,
        total = quiz.numOfQuestions;
    var correct = 0,
        percentage = void 0;

    quiz.answers.forEach(function (answer, index) {
      if (+answer === quiz.questions[index].correctAnswer) {
        correct++;
      }
    });

    percentage = (correct / total * 100).toFixed(0);

    return {
      correct: correct,
      percentage: percentage,
      total: total
    };
  },
  incrementQuestionCounter: function incrementQuestionCounter() {
    _Quizzes2.default.currentQuiz.questionCounter++;
  },
  decrementQuestionCounter: function decrementQuestionCounter() {
    _Quizzes2.default.currentQuiz.questionCounter--;
  },


  /* Checks if there are more questions in the quiz so the quiz can be 
  completed the next time the next button is pressed if there are no more questions */
  isLastQuestion: function isLastQuestion() {
    return _Quizzes2.default.currentQuiz.questionCounter < _Quizzes2.default.currentQuiz.numOfQuestions - 1 ? false : true;
  },


  /* Validate that a choice has been selected to prevent moving forward
  if an answer has not been chosen */
  validateChoices: function validateChoices() {
    var isChoiceSelected = false;

    this.choices.forEach(function (choice) {
      if (choice.checked === true) {
        isChoiceSelected = true;
      }
    });

    return isChoiceSelected;
  },


  /* Mark a choice as checked if the question has already been answered 
  when returning to a previous question */
  restoreSelectedChoice: function restoreSelectedChoice() {
    if (this.getSavedAnswer() !== undefined) {
      var idx = this.getSavedAnswer();
      this.choices[idx].checked = true;
    }
  },
  configureChoices: function configureChoices() {
    var _this = this;

    this.choices = Array.from(document.getElementsByName('choices'));

    this.restoreSelectedChoice();

    this.handleRadioChange = this.handleRadioChange.bind(this);

    this.choices.forEach(function (radio) {
      radio.addEventListener('change', _this.handleRadioChange);
    });
  },


  // Remove the validation message if it's visible and save the selected choice
  handleRadioChange: function handleRadioChange() {
    _Elem2.default.hide(_QuizContainer2.default.validationEl);
    var choice = document.querySelector('[name="choices"]:checked').value;
    this.saveAnswer(choice);
  }
};

exports.default = Controller;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(25)('keys');
var uid = __webpack_require__(15);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* Takes in a variable amount of elements and hides or 
shows them as needed by the quiz */
var Elem = {
  hide: function hide() {
    if (arguments.length !== 0) {
      var args = Array.from(arguments);
      args.forEach(function (arg) {
        arg.classList.add('hidden');
      });
    }
  },
  show: function show() {
    if (arguments.length !== 0) {
      var args = Array.from(arguments);
      args.forEach(function (arg) {
        arg.classList.remove('hidden');
      });
    }
  }
};

exports.default = Elem;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(36);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(4);
var hide = __webpack_require__(6);
var redefine = __webpack_require__(23);
var ctx = __webpack_require__(18);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var hide = __webpack_require__(6);
var has = __webpack_require__(2);
var SRC = __webpack_require__(15)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(4).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f;
var has = __webpack_require__(2);
var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(42);
var defined = __webpack_require__(9);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(14);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(9);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Controller = __webpack_require__(8);

var _Controller2 = _interopRequireDefault(_Controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Controller2.default.init();

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59);
__webpack_require__(58);
module.exports = __webpack_require__(4).Array.from;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = {"quizzes":[{"name":"Game of Thrones","quote":"'When you play the game of thrones, you win or you die. There is no middle ground.'","quoteSource":"Season 1, Episode 7","questions":[{"question":"What are the house words of House Stark?","choices":["The North Remembers","When the snows fall and the white winds blow, the lone wolf dies but the pack survives","Winter is Coming","The winters are hard, but the Starks will endure"],"correctAnswer":2},{"question":"What is the name of Ned Stark's Valyrian greatsword?","choices":["Longclaw","Oathkeeper","Heartsbane","Ice"],"correctAnswer":3},{"question":"Which of these names is not on Arya's list?","choices":["Cersei","Roose Bolton","Joffery","Illyn Payne"],"correctAnswer":1},{"question":"What are the house words of House Targaryen?","choices":["Fire cannot kill a dragon","Blood of the Dragon","All men must die, but we are not men","Fire and Blood"],"correctAnswer":3},{"question":"What or who kills Khal Drogo in the end?","choices":["The witch, Mirri","His bloodriders","Daenerys suffocates him","His chest wound"],"correctAnswer":2},{"question":"When Jon first meets Tyrion, what advice does Tyrion give him?","choices":["“It’s not easy being drunk all the time. If it were easy, everyone would do it.”","“Never forget what you are, the rest of the world will not. Wear it like armor and it can never be used to hurt you.”","“It’s hard to put a leash on a dog once you’ve put a crown on its head.”","“A mind needs books like a sword needs a whetstone.”"],"correctAnswer":1},{"question":"What are the house words of House Lannister?","choices":["Hear me roar!","A Lannister always pays his debts","Teach them what it means to put a lion in a cage","When you play a game of thrones, you win or you die"],"correctAnswer":0}]},{"name":"Buffy the Vampire Slayer","quote":"'In every generation there is a chosen one... she alone will stand against the vampires, the demons and the forces of darkness. She is the slayer.'","quoteSource":"Season 1, Episode 1","questions":[{"question":"Who is the first vampire that Buffy kills in the first episode, 'Welcome to the Hellmouth'?","choices":["Darla","Luke","Jesse","Thomas"],"correctAnswer":3},{"question":"What gift does Angel give Buffy for her 17th birthday?","choices":["A silver cross","A book","A Claddagh ring","Takes her ice skating"],"correctAnswer":2},{"question":"In the episode 'Where the Wild Things Are', the gang goes to find Giles for help. They find him singing and playing guitar at the Espresso Bar. What song is he performing?","choices":["Behind Blue Eyes","Freebird","Tales of Brave Ulysses","Wild Horses"],"correctAnswer":0},{"question":"Xander tells Anya to dress up as something scary in the Halloween episode 'Fear, Itself'. What does she dress up as?","choices":["A nurse","A clown","A demon","A bunny"],"correctAnswer":3},{"question":"What name do Willow and Tara give their kitten?","choices":["Trixie","They haven't found her name","Miss Kitty Fantastico","Joan"],"correctAnswer":2},{"question":"What phrase is not on Buffy's tombstone?","choices":["She saved the world a lot","Beloved Daughter","Devoted Friend","Beloved Sister"],"correctAnswer":1},{"question":"In the episode 'Restless', what does Tara warn Buffy?","choices":["'Be back before dawn.'","'You don't understand.'","'You're asking the wrong questions.'","'Don't stick out your elbow.'"],"correctAnswer":0},{"question":"What does Dawn get Tara for her birthday in the episode 'Family'?","choices":["A spellbook","A witch Pez dispenser","A necklace","A crystal ball"],"correctAnswer":1}]},{"name":"Parks and Rec","quote":"'We need to remember what's important in life: friends, waffles, work. Or waffles, friends, work. Doesn't matter, but work is third.'","quoteSource":"Season 3, Episode 13","questions":[{"question":"What is the title of the book Leslie writes?","choices":["Failure: an American Success Story","Pawnee: The Greatest Town in America","Off the Sidelines: Raise Your Voice, Change the World","A History of Pawnee, Indiana"],"correctAnswer":1},{"question":"What word and description appears at the very top of the Swanson Pyramid of Greatness?","choices":["Capitalism - God's way of determining who is smart, and who is poor","Discipline - The ability to repeat a boring thing over and over","Buffets - Whenever available. Choose quantity over quality","Honor - If you need it defined, you don't have it"],"correctAnswer":3},{"question":"Which of these is not one of Andy's own secrets he tells Ron after finding out about Duke Silver?","choices":["'I'm allergic to sushi. Every time I eat more than 80 pieces, I throw up'","'I don't know who Al Gore is and at this point I'm too afraid to ask'","'When they say 2% milk, I don't know what the other 98% is'","'I didn't actually sell my last car, I just forgot where I parked it'"],"correctAnswer":0},{"question":"What superhero costume does Ben buy when Donna and Tom bring him along on their annual 'Treat Yo Self' day?","choices":["Superman","Spider-man","Batman","Captain America"],"correctAnswer":2},{"question":"What is the only thing Ron hates more than lying?","choices":["Clear alcohols","Salad","Cats","Skim milk"],"correctAnswer":3},{"question":"What is April's favorite band?","choices":["Neutral Milk Hotel","Scarecrow Boat","The Duke Silver Trio","Mouse Rat"],"correctAnswer":0}]},{"name":"Twin Peaks","quote":"'I have no idea where this will lead us. But I have a definite feeling it will be a place both wonderful and strange.'","quoteSource":"Season 2, Episode 18","questions":[{"question":"Who discovers Laura Palmer's body?","choices":["Sheriff Harry S. Truman","Doc Hayward","Hank Jennings","Pete Martell"],"correctAnswer":3},{"question":"What is the name of Agent Cooper's secretary, who he addresses on most of his recordings?","choices":["Lucy","Margaret","Diane","Nadine"],"correctAnswer":2},{"question":"What is the name of the diner Shelly works at?","choices":["Great Northern Diner","Double R Diner","Roadhouse","Bookhouse Diner"],"correctAnswer":1},{"question":"What is Agent Cooper's favorite type of donut?","choices":["Bearclaw","Boston Creme","Jelly","Cruller"],"correctAnswer":2},{"question":"What is the Log Lady's real name?","choices":["Margaret Lanterman","Catherine Martell","Annie Blackburn","Nadine Hurley"],"correctAnswer":0}]}]}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Quiz = function Quiz(data) {
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
};

exports.default = Quiz;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Controller = __webpack_require__(8);

var _Controller2 = _interopRequireDefault(_Controller);

var _Elem = __webpack_require__(16);

var _Elem2 = _interopRequireDefault(_Elem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* View for the active quiz */
var QuizContainer = {
  init: function init() {
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
    this.retryBtn.addEventListener('click', _Controller2.default.resetQuiz);

    this.render();
  },
  render: function render() {
    this.quiz = _Controller2.default.getCurrentQuiz();
    // When starting (or restarting) a quiz, show the quiz start data and start button
    if (this.quiz.status === 'not-started') {
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
  showQuestion: function showQuestion() {
    var _this = this;

    var quiz = this.quiz,
        currentQuestion = quiz.questions[quiz.questionCounter];

    this.quizEl.innerHTML = '';
    this.quizEl.innerHTML += '\n      <div class="count">\n        ' + (quiz.questionCounter + 1) + ' / ' + quiz.numOfQuestions + '\n      </div>';
    this.quizEl.innerHTML += '\n      <p class="question">' + currentQuestion.question + '</p>\n    ';

    currentQuestion.choices.forEach(function (choice, index) {
      _this.quizEl.innerHTML += '\n        <div class="choice">\n          <input type="radio" name="choices" id="choice-' + index + '" class="choice--radio" value="' + index + '" />\n          <label for="choice-' + index + '" class="choice--label">' + choice + '</label>\n        </div>\n      ';
    });

    _Controller2.default.configureChoices();
    this.showButtons();
  },


  // Display the appropriate buttons for the current question
  showButtons: function showButtons() {
    // If it's the first question, don't show the back button
    if (this.quiz.questionCounter === 0) {
      _Elem2.default.hide(this.retryBtn, this.backBtn, this.startBtn);
      _Elem2.default.show(this.nextBtn);
    } else if (this.quiz.questionCounter < this.quiz.numOfQuestions) {
      _Elem2.default.hide(this.retryBtn, this.startBtn);
      _Elem2.default.show(this.backBtn, this.nextBtn);
      // If the quiz is complete, only show the retry button
    } else {
      _Elem2.default.hide(this.startBtn, this.backBtn, this.nextBtn);
      _Elem2.default.show(this.retryBtn);
    }
  },


  // Displays the quiz name, a quote, and a start button
  startQuiz: function startQuiz() {
    this.quizEl.innerHTML = '\n      <p class="name">' + this.quiz.name + '</p>\n      <p class="quote">' + this.quiz.quote + '</p>\n      <p class="quote-source">' + this.quiz.quoteSource + '</p>\n    ';

    _Elem2.default.hide(this.retryBtn, this.nextBtn, this.backBtn);
    _Elem2.default.show(this.startBtn);
  },


  // Displays the first question of a quiz. The controller changes the status of the quiz to 'in progress'
  firstQuestion: function firstQuestion() {
    _Elem2.default.hide(this.startBtn);
    _Elem2.default.show(this.nextBtn);

    _Controller2.default.startQuiz();

    this.showQuestion();
  },


  /* As long as an answer has been chosen, increments the question counter and 
  displays the next question in the quiz. If the current question is the last question, 
  completes the quiz instead. If no answer has been chosen when the 'next' button is clicked, 
  displays a message asking the user to select a choice */
  nextQuestion: function nextQuestion() {
    if (_Controller2.default.validateChoices()) {
      _Elem2.default.show(this.backBtn);
      if (!_Controller2.default.isLastQuestion()) {
        _Controller2.default.incrementQuestionCounter();
        this.showQuestion();
      } else {
        this.completeQuiz();
      }
    } else {
      _Elem2.default.show(this.validationEl);
    }
  },


  // Decrements the question counter and shows the previous question
  prevQuestion: function prevQuestion() {
    _Controller2.default.decrementQuestionCounter();
    this.showQuestion();
    if (this.quiz.questionCounter === 0) {
      _Elem2.default.hide(this.backBtn);
    }
  },


  /* The controller marks the quiz as completed and gets the score.
  Displays the score and an button to allow the user to view the answers */
  completeQuiz: function completeQuiz() {
    _Controller2.default.completeQuiz();

    _Elem2.default.hide(this.backBtn, this.nextBtn, this.startBtn);
    _Elem2.default.show(this.retryBtn);

    var score = _Controller2.default.getScore();

    this.quizEl.innerHTML = "";
    this.quizEl.innerHTML += '\n      <p class="score">' + score.percentage + '%</p>    \n      <p class="correct">You got ' + score.correct + ' out of ' + score.total + ' questions right.</p>\n      <div class="btn-container">\n        <button id="answers" class="btn-link">Show answers</button>\n      </div>\n    ';

    this.answersBtn = document.getElementById('answers');
    this.showAnswers = this.showAnswers.bind(this);
    this.answersBtn.addEventListener('click', this.showAnswers);
  },


  /* Displays the selected answers along with the correct answer if the chosen
  answer was incorrect */
  showAnswers: function showAnswers() {
    var _this2 = this;

    _Elem2.default.hide(this.answersBtn);

    var answers = this.quiz.answers,
        questions = this.quiz.questions;

    answers.forEach(function (answer, index) {
      if (+answer === questions[index].correctAnswer) {
        _this2.quizEl.innerHTML += '\n          <div class="answer">\n            <p>\n              <span class="num">' + (index + 1) + '</span>\n              ' + questions[index].choices[answer] + ' \n              <span class="icon-correct">\u2714</span>\n            </p>\n          </div>\n        ';
      } else {
        _this2.quizEl.innerHTML += '\n          <div class="answer">\n            <p>\n              <span class="num">' + (index + 1) + '</span>\n              ' + questions[index].choices[answer] + '\n              <span class="icon-incorrect">X</span>\n              </p>\n            <p class="answer-correct">\n              <span>Correct answer:</span> ' + questions[index].choices[questions[index].correctAnswer] + '\n            </p>\n          </div>\n        ';
      }
    });
  }
};

exports.default = QuizContainer;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Controller = __webpack_require__(8);

var _Controller2 = _interopRequireDefault(_Controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* View for the list of available quizzes */
var QuizList = {
  init: function init() {
    this.quizListEl = document.getElementById('quiz-list');

    this.render();
  },


  // For each quiz name, add an <li> to the quiz list element
  render: function render() {
    var _this = this;

    _Controller2.default.getQuizNames().forEach(function (name, index) {
      _this.quizListEl.innerHTML += '<li id="' + index + '" class="quiz-link">' + name + '</li>';
    });

    this.setActiveLinkStyle(0);

    /* Add event listener to the quiz list which sets the 
    selected quiz as current and changes the style of the quiz link */
    this.quizListEl.addEventListener('click', function () {
      var selectedQuiz = event.target.id;
      _Controller2.default.setCurrentQuiz(selectedQuiz);
      _this.setActiveLinkStyle(selectedQuiz);
    });
  },


  /* Changes the style of the link for the current quiz and 
  resets the style of the other quiz links */
  setActiveLinkStyle: function setActiveLinkStyle(idx) {
    this.quizLinks = document.querySelectorAll('.quiz-link');

    this.quizLinks.forEach(function (link) {
      link.classList.remove('active');
    });
    this.quizLinks[idx].classList.add('active');
  }
};

exports.default = QuizList;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _quizzes = __webpack_require__(31);

var _quizzes2 = _interopRequireDefault(_quizzes);

var _Quiz = __webpack_require__(32);

var _Quiz2 = _interopRequireDefault(_Quiz);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Import quiz data from the .json file and create a quiz object from
each set of quiz data along with adding some additional properties */
var Quizzes = {
  currentQuiz: null,
  collection: _quizzes2.default.quizzes.map(function (data) {
    return new _Quiz2.default(data);
  })
};

exports.default = Quizzes;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(26);
var toLength = __webpack_require__(27);
var toAbsoluteIndex = __webpack_require__(55);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(17);
var TAG = __webpack_require__(0)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(7);
var createDesc = __webpack_require__(12);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(22)(function () {
  return Object.defineProperty(__webpack_require__(19)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(17);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(11);
var ITERATOR = __webpack_require__(0)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(3);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(49);
var descriptor = __webpack_require__(12);
var setToStringTag = __webpack_require__(24);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(0)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(48);
var $export = __webpack_require__(21);
var redefine = __webpack_require__(23);
var hide = __webpack_require__(6);
var has = __webpack_require__(2);
var Iterators = __webpack_require__(11);
var $iterCreate = __webpack_require__(45);
var setToStringTag = __webpack_require__(24);
var getPrototypeOf = __webpack_require__(51);
var ITERATOR = __webpack_require__(0)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(0)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(3);
var dPs = __webpack_require__(50);
var enumBugKeys = __webpack_require__(20);
var IE_PROTO = __webpack_require__(13)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(19)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(40).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var anObject = __webpack_require__(3);
var getKeys = __webpack_require__(53);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(2);
var toObject = __webpack_require__(28);
var IE_PROTO = __webpack_require__(13)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(2);
var toIObject = __webpack_require__(26);
var arrayIndexOf = __webpack_require__(37)(false);
var IE_PROTO = __webpack_require__(13)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(52);
var enumBugKeys = __webpack_require__(20);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(14);
var defined = __webpack_require__(9);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(14);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(10);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(38);
var ITERATOR = __webpack_require__(0)('iterator');
var Iterators = __webpack_require__(11);
module.exports = __webpack_require__(4).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(18);
var $export = __webpack_require__(21);
var toObject = __webpack_require__(28);
var call = __webpack_require__(44);
var isArrayIter = __webpack_require__(43);
var toLength = __webpack_require__(27);
var createProperty = __webpack_require__(39);
var getIterFn = __webpack_require__(57);

$export($export.S + $export.F * !__webpack_require__(47)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(54)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(46)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(30);
module.exports = __webpack_require__(29);


/***/ })
/******/ ]);