var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('day1.input')
});

var elves = [];

var currentElf = 0;
var biggestElf = 0;

lineReader.on('line', function (line) {
  // Each line in input.txt will be successively available here as `line`.
  var line = line.trim();
    console.log({line})

  if(line){
    var current = parseInt(line);
    console.log({current})
    console.log(typeof current)
    currentElf += current;
    console.log({currentElf})
    console.log(typeof currentElf)
  } else {
    console.log("next elf!")
    elves.push(currentElf);
    biggestElf = ((currentElf > biggestElf) ? currentElf : biggestElf);
    currentElf = 0;
  }
});

lineReader.on('close', function() {
  console.log({elves})
  elves = elves.sort(function(a, b) {
    return b - a;
  });
  var biggest = elves[0];
  console.log({elves})
  console.log({biggest})
  console.log({biggestElf})
  var topThree = elves[0] + elves[1] + elves[2];
  console.log({topThree})
})