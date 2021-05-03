const rockPaperScissors = require('./RockPaperScissors')

describe('rockPaperScissors', function () {
    it('both player and computer play', function () {
        expect(rockPaperScissors('rock', computerPlay)).toEqual(game)
    })
})