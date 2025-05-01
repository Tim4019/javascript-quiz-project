class Question {
    constructor (text, choices, answer, difficulty) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
      this.difficulty = difficulty;
    }
 
    shuffleChoices() {
      for(let i =0; i < this.choices.length; i++) {
        let randomNumber = Math.floor(Math.random() * this.choices.length);
        
        const choice = this.choices[i];
        this.choices[i] = this.choices[randomNumber];
        this.choices[randomNumber] = choice;
      }
    }
 }
 
 
 const question1 = new Question("question 1", ["1", "2", "3", "4"], "1", 1);
 const question2 = new Question("question 2", ["1", "2", "3", "4"], "2", 1);

