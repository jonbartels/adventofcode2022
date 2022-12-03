var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('day2.input')
});

var scores = {
  'Rock' : 1,
  'Paper' : 2,
  'Scissors' : 3 
}

var columnMap = {
  'A' : 'Rock',
  'B': 'Paper',
  'C' : 'Scissors',
  'X' : 'Rock',
  'Y': 'Paper',
  'Z' : 'Scissors'
}

// X means you need to lose, 
// Y means you need to end the round in a draw,
// an d Z means you need to win. Good luck!"

var scoresMap = {
  'A X' : 3 + 0, 
  'A Y' : 1 + 3, 
  'A Z' : 2 + 6, 
  'B X' : 1 + 0, 
  'B Y' : 2 + 3, 
  'B Z' : 3 + 6, 
  'C X' : 2 + 0, 
  'C Y' : 3 + 3, 
  'C Z' : 1 + 6  
}

var totalScore = 0;

lineReader.on('line', function (line) {
  // Each line in input.txt will be successively available here as `line`.
  var line = line.trim();
  console.log({line})

  lineScore = scoresMap[line];
  console.log({lineScore})

  totalScore += lineScore;
  console.log({totalScore})
});

lineReader.on('close', function() {
  console.log({totalScore})
})

function scoreLookup(play){ return scores[columnMap[play]]}