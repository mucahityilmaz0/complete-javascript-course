'use strict';

function calcAge(birtYear) {
  const age = 2023 - birtYear;
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birtYear}`;
    console.log(output);

    if (birtYear >= 1981 && birtYear <= 1996) {
      var milenial = true;
      //Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      //reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `oh, and you're a milenial ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //console.log(str);
    console.log(milenial);
    //console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Mucahit';
calcAge(1996);
//console.log(age);
//printAge();
