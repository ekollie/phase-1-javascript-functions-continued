// code your solution here
function saturdayFun(activity = "roller-skate"){
   return `This Saturday, I want to ${activity}!`
}

const fn = function () {
    console.log("Yet more razzling");
}

const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function outer(greeting, msg = "It's a fine day to learn") {

    const innerFunction = function (name, lang = "Python") {
        return `${greeting}, ${name}! ${msg} ${lang}`;
    };
    return innerFunction
}

console.log(outer("Hello")("student", "JavaScript"));

const array = (function (thingToAdd) {
    const base = 3;
    return [
      function () {
        return base + thingToAdd;
      },
      function () {
        return base;
      },
    ];
  })(2);

const wrapAdjective = function(flair){
    return function(adjective = "special"){
       return `You are ${flair}${adjective}${flair}!`
    }
}
