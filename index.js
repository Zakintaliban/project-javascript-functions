function logName(name) {
  console.log(`Hello, ${name}!`);
}

const nameA = "Alfa";
const nameB = "Beta";
const nameC = "Charlie";

logName(nameA);
logName(nameB);
logName(nameC);

// Feel free to have some experiments with functions

const checkAge = function(age) {
  if (age >= 18) {
    console.log("You are old enough");
  } else if (age < 18 && age >= 0) {
    console.log("You are still young");
  } else {
    console.log("You are not born yet");
  }
};

checkAge(12); // You are still young
checkAge(18); // You are old enough
checkAge(-2); // You are not born yet

// Feel free to have some experiments with function declarations

const addMarks = (text, mark, times) => {
  let newText = text;

  for (let i = 0; i <= times; i++) {
    newText += mark;
  }

  console.log(newText);
};

addMarks("Hello", "!", 0); // Hello!
addMarks("HELLO", "!", 4); // Hello!!!!!
addMarks("How are you", "?", 0); // How are you?
addMarks("HOW ARE YOU", "?", 4); // How are you?????
addMarks("nih gak ada orangnya?  seriusan", "?", 0); // nih gak ada orangnya? seriusan?
addMarks("NIH GAK ADA ORANGNYA?  SERIUSAN", "?", 4); // nih gak ada orangnya? seriusan?????

// Feel free to have some experiments with arrow functions

const showNameWithAge = (name = "Unknown", age = 0) => {
  const nameWithAge = `${name} is ${age} year(s) old`;

  return nameWithAge; // return the value to be used later
};

const alpha = showNameWithAge("Alfa", 12);
const betty = showNameWithAge("Beta", 18);
const gamma = showNameWithAge("Charlie", 30);

console.log(Alfa);
console.log(Beta);
console.log(Charlie);

// Feel free to have some experiments with default parameters
