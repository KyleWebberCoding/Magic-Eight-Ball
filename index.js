var userName = 'Kyle';

// Task 2: greet based on whether a name was provided
console.log(userName ? `Hello, ${userName}!` : 'Hello!');

// Task 3-4: user question and acknowledgment
var userQuestion = 'Will I get married soon?';
console.log(`The user asked: ${userQuestion}`);

// Task 5: random number between 0 and 7
var randomNumber = Math.floor(Math.random() * 8);

// Task 6: eightBall placeholder
var eightBall = '';

// Task 7: determine eightBall response using if/else (no 8 case needed since 0-7)
if (randomNumber === 0) {
  eightBall = 'It is certain';
} else if (randomNumber === 1) {
  eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
  eightBall = 'Reply hazy try again';
} else if (randomNumber === 3) {
  eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
  eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
  eightBall = 'My sources say no';
} else if (randomNumber === 6) {
  eightBall = 'Outlook not so good';
} else if (randomNumber === 7) {
  eightBall = 'Signs point to yes';
}

// Task 8: print the answer
console.log(eightBall);
