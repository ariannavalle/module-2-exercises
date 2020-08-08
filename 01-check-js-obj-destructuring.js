// Given the object 'data', use the object destructuring to be able
// to print student first and last name, favorite football club,
// as well as the city and the country this student is coming from.

// BONUS: Write a function to capitalize all the words that need to be capitalized.

const data = {
  name: {
    firstName: 'ana',
    lastName: 'marino'
  },
  isStudent: true,
  favoriteFootballTeam: 'fc barcelona',
  hometown: {
    city: 'buenos aires',
    country: 'argentina'
  }
};

const {
  name: {firstName, lastName},
  favoriteFootballTeam,
  hometown: {city, country}
} = data;

console.log(firstName, lastName, favoriteFootballTeam, city, country)
