// Write a function eligibleToDrink() that takes a number as an argument and returns a promise
// that tests if the passed value is less than or greater than the value 18.
// If greater then 18, resolve with 'Being ___ years old, you are eligible to  drink'.
// If less then 18, reject with '___ years is underage. Here is a fresh squeezed orange juice for you!'

function eligibleToDrink(age) {
  const myPromise = new Promise(function(resolve, reject) {
    if (age>=18) {
      const msg = `Being ${age} years old, you are eligible to  drink.`
      resolve(msg)
    } 
    else {
      const msg = `${age} years is underage. Here is a fresh squeezed orange juice for you!`
      reject(msg)
    } 
  });
  return myPromise;
}

eligibleToDrink(15)
  .then(result => console.log(result))
  .catch(error => console.log(error));
// => 15 years is underage. Here is a fresh squeezed orange juice for you!

eligibleToDrink(18)
  .then(result => console.log(result))
  .catch(error => console.log(error));
// => Being 18 years old, you are eligible to  drink.
