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

var scoresMap = {
  'A X' : 1 + 3, //rock rock, draw
  'A Y' : 2 + 6, //rock paper, loss
  'A Z' : 3 + 0, //rock scissors, win
  'B X' : 1 + 0, //paper rock. win
  'B Y' : 2 + 3, //paper paper, draw
  'B Z' : 3 + 6, //paper scissors, loss
  'C X' : 1 + 6, //scissors rock, loss
  'C Y' : 2 + 0, //scissors paper, 
  'C Z' : 3 + 3  //scissocs scissors, draw
}

var totalScore = 0;

lineReader.on('line', function (line) {
  // Each line in input.txt will be successively available here as `line`.
  var line = line.trim();
  console.log({line})

  // var opp = line[0];
  // var me = line[2];
  // console.log({opp})
  // console.log({me})

  // var oppScore = scoreLookup(opp)
  // var meScore = scoreLookup(me)
  // console.log({oppScore})
  // console.log({meScore})

  // var wld = 3;
  // if(meScore > oppScore){
  //   wld = 6;
  // }else if (meScore < oppScore){
  //   wld = 0;
  // }

  // console.log({wld})

  // var lineScore = meScore + wld;
  lineScore = scoresMap[line];
  console.log({lineScore})

  totalScore += lineScore;
  console.log({totalScore})
});

lineReader.on('close', function() {
  console.log({totalScore})
})

function scoreLookup(play){ return scores[columnMap[play]]}