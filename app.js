function populate() {
   if(quiz.isEnded()) {
      showScores();
  } else {
      // show question
      var element = document.getElementById('question');
      element.innerHTML = quiz.getQuestionIndex().text;
 
      var choices = quiz.getQuestionIndex().choices;
      
      for (var i = 0; i < choices.length; i++) {
         var element = document.getElementById("choice" + i);
         element.innerHTML = choices[i];
         guess("btn" + i, choices[i]);
      }

      showProgress();
   }
};

function guess(id, guess) {
   var button = document.getElementById(id);
   button.onclick = function () {
      quiz.guess(guess);
      populate();
   }
}

function showProgress() {
   var currentQuestionNumber = quiz.questionIndex + 1;
   var element = document.getElementById("progress");
   element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
   var gameOverHtml = "<h1>The<br>Results</h1>";
   gameOverHtml += "<h2 id='score'> Your score: " + quiz.score + " out of " + quiz.questions.length + "!</h2>";
   var perfectScore = "<h3 id='score'>You got a perfect score! You've rewatched The Office way too many times to count, huh?<br>Great job & thanks for playing!</h3>";
   var goodScore = "<h3 id='score'>It seems you're a pretty big fan after all, but you missed a few. That's okay, it's a bit hard for most people.<br>That's what she said.</h3>";
   var avgScore ="<h3 id='score'>You missed quite a few there! I guess that means it's time for a rewatch.</h3>";
   var badScore = "<h3 id='score'>Wow. You're like the Toby of taking online quizzes. You need a refresher - go back to Netflix and watch more of The Office!</h3>";
   
   if (quiz.score == quiz.questions.length) {
      gameOverHtml += perfectScore;
   }
   if (quiz.score > 14 && quiz.score <= 21) {
      gameOverHtml += goodScore;
   }
   if (quiz.score > 7 && quiz.score <= 13) {
      gameOverHtml += avgScore;
   }
   if (quiz.score >= 0 && quiz.score <= 7) {
      gameOverHtml += badScore;  
   }
   
   var element = document.getElementById("quiz");
   element.innerHTML = gameOverHtml;

  
} 


var questions = [
   new Question("What song does Andy try to sing with his father?", ["Everything I Do (I Do It For You)", "More Than Words", "More Than You Know", "Wonderwall"], "More Than Words"),
   new Question("What is Erin's first name?", ["Kelly", "Sarah", "Kathleen", "Hayley"], "Kelly"),
   new Question("How does Pam like her coffee?", ["2 creams, 2 sugars", "black", "extra cream, 10 sugars", "sprinkle of cinnamon"], "sprinkle of cinnamon"),
   new Question("What famous musician plays Andy's brother?", ["Josh Groban", "Michael Buble", "Adam Levine", "John Mayer"], "Josh Groban"),
   new Question("How many siblings does Dwight have?", ["0", "1", "2", "5"], "2"),
   new Question("In Florida, what reason does Cathy give Jim when she asks to join him in his room?", ["There's a mouse in her room", "Her room's heating system is messed up", "She's afraid of the dark", "She was locked out of her room"], "Her room's heating system is messed up"),
   new Question("What state did Pam move to for her graphic design school program?", ["New York", "New Hampshire", "Maine", "New Jersey"], "New York"),
   new Question("What is the name of Dwight's cousin that lives with him?", ["Jebadiah", "Mose", "Zeke", "Cameron"], "Mose"),
   new Question("What department does Meredith work in?", ["Sales", "Customer Relations", "Accounting", "Tech Support"], "Customer Relations"),
   new Question("In what season do Pam and Jim get married?", ["6", "9", "7", "5"], "6"),
   new Question("What food does Pam say Roy wanted to have at their wedding?", ["Oysters", "Hamburgers", "Hot dogs", "Popcorn"], "Hot dogs"),
   new Question("What company does Michael Scott start after quitting Dunder Mifflin in season 5?", ["The Best Paper Company", "Threat Level Midnight Paper Company", "Michael Scott Paper Company", "Dunder Mifflin 2"], "Michael Scott Paper Company"),
   new Question("Where do Holly and Michael move to after they get married?", ["New Hampshire", "New York", "Montana", "Colorado"], "Colorado"),
   new Question("Who does Toby have a crush on for most of the series?", ["Oscar", "Kelly", "Angela", "Pam"], "Pam"),
   new Question("Who does Nellie dress up as for Halloween in season 8?", ["Toby", "Andy", "Dwight", "Packer"], "Toby"),
   new Question("What suite is the Scranton Dunder Mifflin located in?", ["100", "200", "300", "400"], "200"),
   new Question("What is DeAngelo's middle name?", ["Ludacris", "Aurelius", "Jeremitrius", "Ozymandias"], "Jeremitrius"),
   new Question("What kind of car does Michael drive?", ["PT Cruiser", "Mini Cooper", "Mustang", "Camry"], "PT Cruiser"),
   new Question("Which candy does Andy forget the jingle to?", ["Blow Pops", "Hersheys Kisses", "Kit Kats", "Mentos"], "Kit Kats"),
   new Question("Where is caucasian Jim at when the Asian Jim prank is happening?", ["The stairwell", "The Annex", "Sick at home", "The dentist"], "The dentist"),
   new Question("Which one of these instruments does Andy play?", ["Piano", "Banjo", "Flute", "Drums"], "Banjo"),
   new Question("How many weddings are shown on-screen throughout the series?", ["3", "4", "5", "6"], "4")
];

var quiz = new Quiz(questions);
 
populate();