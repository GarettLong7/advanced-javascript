// how strings and arrays are similar
// 1. you can access them by index

const fruits = ["apples", "oranges", "bananas"];
console.log(fruits[1]); // -> oranges

// But we can change the item of array by indexedDB
fruits[1] = "bananas";

// 2. the slice function works on array as well
console.log(fruits.slice(3,5));

// 3. arrays share some functions with strings, especially query (won't change original array)
console.log(fruits.includes("durians")); // => true

//4. most array functions will change the original array
fruits.sort();
console.log(fruits);

const touristHotspots = ["Kyoto", "Merlion", "Tokyo", "Big Ben"];
touristHotspots.reverse();
console.log(touristHotspots)

// CRUD for arrays
touristHotspots.push("Bukit Timah");
console.log("After pushing Bukit Timah", touristHotspots);
touristHotspots.splice(2,1);
