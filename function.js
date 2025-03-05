// Object 1: Person
const person = {
    name: "John Doe",                 // String
    age: 32,                           // Number
    isMarried: true,                   // Boolean
    hobbies: ["reading", "traveling"], // Array
    address: {                          // Object
        city: "New York",
        zipCode: 10001
    }
};

// Object 2: Product
const product = {
    id: 101,                            // Number
    name: "Smartphone",                 // String
    price: 699.99,                      // Number (float)
    inStock: false,                     // Boolean
    tags: ["electronics", "mobile"],    // Array
    releaseDate: new Date("2024-01-15") // Date Object
};

// Object 3: Car
const car = {
    brand: "Tesla",                     // String
    model: "Model S",                   // String
    year: 2023,                          // Number
    isElectric: true,                    // Boolean
    features: ["Autopilot", "GPS"],     // Array
    owner: {                             // Object
        name: "Alice",
        license: "XYZ123"
    }
};

// Object 4: Movie
const movie = {
    title: "Inception",                 // String
    duration: 148,                      // Number (in minutes)
    isAvailable: true,                  // Boolean
    genres: ["Sci-Fi", "Thriller"],     // Array
    director: {                         // Object
        name: "Christopher Nolan",
        age: 53
    }
};

// Object 5: Book
const book = {
    title: "JavaScript Essentials",     // String
    pages: 450,                         // Number
    isPublished: true,                  // Boolean
    authors: ["Jane Smith", "Bob Lee"], // Array
    publisher: {                        // Object
        name: "TechBooks Publishing",
        year: 2022
    }
};

console.log(person, product, car, movie, book);


//2
// Loop to print 1 - 100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Loop to print 1 - 10 without 4 and 5
for (let i = 1; i <= 10; i++) {
    if (i === 4 || i === 5) {
        continue; // Skip numbers 4 and 5
    }
    console.log(i);
}



//3
// Function to add numbers and print the result
function addNumbers() {
    // Initialize a variable to store the sum
    let sum = 0;

    // Loop through all arguments and add them to the sum
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    // Print the result to the console
    console.log("The sum is:", sum);
}

// Example usage
addNumbers(10, 20, 30); // Outputs: The sum is: 60
addNumbers(5, 15);      // Outputs: The sum is: 20
addNumbers(1, 2, 3, 4); // Outputs: The sum is: 10

//4
// Function to greet a user
function greet(name) {
    // Print the greeting message with the provided name
    console.log("Hello " + name + ", welcome to Deebug");
}

// Example usage
greet("John"); // Outputs: Hello John, welcome to Deebug
greet("Alice"); // Outputs: Hello Alice, welcome to Deebug

//5
// Program to print the multiples of 6 up to 6x12

// Loop from 1 to 12
for (let i = 1; i <= 12; i++) {
    console.log(`6x${i} = ${6 * i}`);
}
