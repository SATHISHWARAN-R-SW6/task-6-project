// 1. https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

//The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

//.  title, which is a String representing the title of the movie
//.  studio, which is a String representing the studio that made the movie
//.  rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}

// Creating an instance of the Movie class
const movieInstance = new Movie("Inception", "Warner Bros.", "PG-13");

// Outputting the properties of the movie instance
console.log("Title:", movieInstance.title);
console.log("Studio:", movieInstance.studio);
console.log("Rating:", movieInstance.rating);

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}

// Creating an instance of the Movie class with no rating provided

const movieInstance1 = new Movie("The Lion King", "Disney");
console.log("Movie 1 - Title:", movieInstance1.title);
console.log("Movie 1 - Studio:", movieInstance1.studio);
console.log("Movie 1 - Rating:", movieInstance1.rating);

//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(movies) {
    return movies.filter((movie) => movie.rating === "PG");
  }
}

// Creating an array of Movie instances
const movies = [
  new Movie("Finding Nemo", "Pixar", "G"),
  new Movie("Toy Story", "Pixar", "G"),
  new Movie("The Dark Knight", "Warner Bros.", "PG-13"),
  new Movie("Aladdin", "Disney", "PG"),
  new Movie("The Lion King", "Disney", "PG"),
  new Movie("Harry Potter and the Sorcerer's Stone", "Warner Bros.", "PG"),
];

// Getting an array of movies with a rating of "PG"
const pgMovies = Movie.getPG(movies);

// Outputting the properties of the PG-rated movies
pgMovies.forEach((movie) => {
  console.log("Title:", movie.title);
  console.log("Studio:", movie.studio);
  console.log("Rating:", movie.rating);
  console.log("----------------------");
});

//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}

// Creating an instance of the Movie class
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Outputting the properties of the created movie instance
console.log("Title:", casinoRoyale.title);
console.log("Studio:", casinoRoyale.studio);
console.log("Rating:", casinoRoyale.rating);

// 2. https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

//Circle Class

//Convert the UML diagram to Typescript class. - use number for double

class Circle {
  constructor(radius, color = "red") {
    this.radius = radius;
    this.color = color;
  }

  getRadius() {
    return this.radius;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }

  toString() {
    return `Circle[radius=${this.radius},color=${this.color}]`;
  }
}

// Example usage
const circle1 = new Circle(1.0, "blue");
console.log(circle1.toString()); // Circle[radius=1,color=blue]
console.log("Area:", circle1.getArea()); // Area: 3.141592653589793
console.log("Circumference:", circle1.getCircumference()); // Circumference: 6.283185307179586

const circle2 = new Circle(2.5);
console.log(circle2.getColor()); // red
circle2.setColor("green");
console.log(circle2.toString()); // Circle[radius=2.5,color=green]

// 3. Write a “person” class to hold all the details.

class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getAge() {
    return this.age;
  }

  getGender() {
    return this.gender;
  }

  toString() {
    return `${this.getFullName()}, ${this.age} years old, ${this.gender}`;
  }
}

// Example usage
const person1 = new Person("John", "Doe", 30, "Male");
console.log(person1.toString()); // John Doe, 30 years old, Male

const person2 = new Person("Jane", "Smith", 25, "Female");
console.log(person2.getFullName()); // Jane Smith
console.log(person2.getAge()); // 25
console.log(person2.getGender()); // Female

// 4. write a class to calculate the uber price.

class UberCalculator {
  constructor(baseFare, costPerKilometer, costPerMinute) {
    this.baseFare = baseFare;
    this.costPerKilometer = costPerKilometer;
    this.costPerMinute = costPerMinute;
  }

  calculatePrice(distanceInKm, timeInMinutes) {
    const distanceCost = distanceInKm * this.costPerKilometer;
    const timeCost = timeInMinutes * this.costPerMinute;
    const totalCost = this.baseFare + distanceCost + timeCost;
    return totalCost;
  }
}

// Example usage
const uberXCalculator = new UberCalculator(10, 0.5, 0.2);
const distance = 7.5; // in kilometers
const time = 15; // in minutes

const totalPrice = uberXCalculator.calculatePrice(distance, time);
console.log(`Uber X Price: $${totalPrice.toFixed(2)}`); // Uber X Price: $18.50
