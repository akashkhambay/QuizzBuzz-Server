class GameState{
    constructor(category, difficulty, host, numQuestions){
        this.category = category;
        this.difficulty = difficulty;
        this.host = host;
        this.numQuestions = numQuestions;
        this.users = [
            {
                name: host,
                score: 0
            }
        ];
        this.questionNumber = 1;
    }
}

module.exports = { GameState };