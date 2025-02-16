// // Array.map() review

// const names = ['John', 'Paul', 'George', 'Ringo'];

// const bigNames = names.map((name, idx, arr) =>{
// // arr[idx] = name.length; // mutate the original array
//     return name.toUpperCase();
// });

// console.log(bigNames); // [ 'JOHN', 'PAUL', 'GEORGE', 'RINGO' ]
// console.log(names); // [ 'John', 'Paul', 'George', 'Ringo' ]

// Array.filter() review

const things = [
  {
    id: 0,
    title: "whiskers on kittens",
    favorite: true,
    points: 97,
  },
  {
    id: 1,
    title: "raindrops on roses",
    favorite: true,
    points: 77,
  },
  {
    id: 2,
    title: "brown paper packages tied up with string",
    favorite: true,
    points: 87,
  },
  {
    id: 3,
    title: "dog bite",
    favorite: false,
    featured: "true",
    points: 12,
  },
  {
    id: 4,
    title: "bee sting",
    favorite: false,
    points: 6,
  },
];

// myFavoriteThings = things.filter(thing => thing.favorite);
// console.log(myFavoriteThings);

// const thingsWithOverFiftyPoints = things.filter(thing => thing.points > 50);
// console.log(thingsWithOverFiftyPoints);

//Array.find() review
// const selectThingById = (id) => things.find(thing => thing.id === id);
// console.log(selectThingById(4));

// first thing with featured property set to true
const firstFeaturedThing = things.find(t => t.featured);
console.log(firstFeaturedThing);
const firstFeaturedThingWithFilter = things.filter(t => t.featured)[0];
console.log(firstFeaturedThingWithFilter);