class Quiz {
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    getQuestion() {
        return this.questions[this.currentQuestionIndex];
    }
    
    moveToNextQuestion() {
        this.currentQuestionIndex++;
    }

  
    shuffleQuestions() {
        for(let i =0; i < this.questions.length; i++) {
         let randomNumber = Math.floor(Math.random() * this.questions.length);
         
         const question = this.questions[i];
         this.questions[i] = this.questions[randomNumber];
         this.questions[randomNumber] = question;
       }
      }

    checkAnswer(answer) {
        let currentQuestion = this.getQuestion();
        let currentQuestionAnswer = currentQuestion.answer;

        if (currentQuestionAnswer === answer) {
            this.correctAnswers++;
        }
    }

    hasEnded() {
        if (this.currentQuestionIndex < this.questions.length) {
            return false;
        } else if (this.currentQuestionIndex === this.questions.length){
            return true;
        }
    }

    filterQuestionsByDifficulty(difficulty) {
        if(typeof difficulty !== 'number' || difficulty < 1 || difficulty > 3) {
            return this.questions;
        }

        let filterdQuestions = this.questions.filter(question => question.difficulty === difficulty); 
        this.questions = filterdQuestions;
        return this.questions;
    }

    averageDifficulty() {
        let totalDifficulty = this.questions.reduce((totalDifficulty, question) => {
            return totalDifficulty + question.difficulty;
        }, 0);

        return totalDifficulty / this.questions.length;
    }
}
