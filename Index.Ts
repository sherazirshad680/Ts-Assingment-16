
// Question 1: Array Manipulation and Function Interaction

// You are given an array of student objects, where each object has properties name (string) and grades (array of numbers):

// const students = [
//   { name: "Alice", grades: [95, 88, 92] },
//   { name: "Bob", grades: [78, 86, 90] },
//   { name: "Charlie", grades: [89, 94, 87] }
// ];
// Write a function named calculateAverageGrades that takes the array of students as a parameter and
//returns an array of objects with the format { name: string, averageGrade: number } that includes the student name and their average grade.

const students = [
    { name: "Alice", grades: [95, 88, 92] },
    { name: "Bob", grades: [78, 86, 90] },
    { name: "Charlie", grades: [89, 94, 87] },
];
var calculateAverageGrades = (total: number) => {
    var averageGrades = [];

    for (let i = 0; i < students.length; i++) {
        var student = students[i];
        var sum = student.grades.reduce((sum, grade) => sum + grade, 0);
        var average = Math.floor((sum / total) * 100);

        averageGrades.push({
            name: student.name,
            grades: average,
        });
    }
    return averageGrades;
};

var averageGrades = calculateAverageGrades(300);
console.log(averageGrades);

// Question 2: Looping, Array Filtering, and Math Operations

// You are given an array of numbers:

// const numbers = [5, 10, 15, 20, 25, 30];
// Write a function named calculateSumOfEvenSquaredNumbers that takes an array of numbers as a parameter, filters the even numbers, calculates the square of each even number, and returns the sum of the squared even numbers.

const calculateSumOfEvenSquaredNumbers = (numbers: number[]): number => {
    var evenSquaredNumbers = numbers.filter(items => items % 2 == 0).map(even => even ** 2);

    var sumOfEvenSquaredNumbers = evenSquaredNumbers.reduce((sum, squarednums) => sum + squarednums, 0);

    return sumOfEvenSquaredNumbers;
};

var numbers = [5, 10, 15, 20, 25, 30];
var a = calculateSumOfEvenSquaredNumbers(numbers);
console.log(a);


// Question 3: Class Inheritance and Method Overrides

// Define a class named Animal with properties name and sound. Create two subclasses, Cat and Dog, that inherit from Animal.
//  Override the sound property for each subclass. Write a function named makeNoise that takes an array of Animal objects
//   and makes each animal in the array produce its sound.


class Animal {
    name: string;
    sound: string;
    constructor(name: string, sound: string) {
        this.name = name;
        this.sound = sound;
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name, "Meow");
    }
}
class Dog extends Animal {
    constructor(name: string) {
        super(name, "Woof");
    }
}

function Noise(animals: any[]) {
    animals.forEach(animal => {
        console.log(`${animal.name} ${animal.sound}`);
    });
}
const cat1 = new Cat("Ragdoll");
const cat2 = new Cat("Smokey");
const dog1 = new Dog("Bulldog");
const dog2 = new Dog("Poodel");

const animals = [cat1, cat2, dog1, dog2];

Noise(animals);


// Question 5: String Manipulation and Decision Making

// You are given an array of strings:

// const words = ["apple", "banana", "cherry", "date", "fig"];
// Write a function named countVowels that takes an array of strings as a parameter, counts the total number of vowels across all strings, and returns the count.


const words_ = ["apple", "banana", "cherry", "date", "fig"]

function countVowels(strings: string[]): number {
    let vowels = "aeiouAEIOU";
    let vowelCount = 0;

    for (let str of strings) {
        for (let char of str) {
            if (vowels.includes(char)) {
                vowelCount++;
            }
        }
    }
    return vowelCount;
}

let words = ["apple", "banana", "cherry", "date", "fig"];
let totalVowels = countVowels(words);
console.log(`Total number of vowels: ${totalVowels}`);


// Question 7: Looping and Object Properties

// You are given a complex object:

// const data = {
//   person: {
//     name: "Alice",
//     age: 30,
//     address: {
//       street: "123 Main St",
//       city: "Wonderland"
//     }
//   }
// };
// Write a function named displayAddress that takes the data object as a parameter and prints the person's name and complete address.

interface Address {
    street: string;
    city: string;
}

interface Person {
    name: string;
    age: number;
    address: Address;
}

interface Data {
    person: Person;
}

var data: Data = {
    person: {
        name: "Alice",
        age: 30,
        address: {
            street: "123 Main St",
            city: "Wonderland"
        }
    }
};

function displayAddress(data: Data) {
    var person = data.person;
    var { name, address } = person;

    console.log(`Name: ${name}`);
    console.log(`Address: ${address.street}, ${address.city}`);
}

displayAddress(data);


// Question 8: Nested Array and Object Operations

// You are given a nested array of numbers:

// const nestedNumbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// Write a function named calculateSumOfNestedNumbers that takes the nested array as a parameter, calculates the sum of all numbers, and returns the total sum.

function calculateSumOfNestedNumbers(nestedArray: number[][]): number {
    let total = 0;

    for (var innerArray of nestedArray) {
        for (var num of innerArray) {
            total += num;
        }
    }

    return total;
}

var nestedNumbers: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var totalSum: number = calculateSumOfNestedNumbers(nestedNumbers);
console.log(totalSum);


// Question 9: TypeScript Arrays and Method Usage

// You are given an array of numbers:

// const scores = [90, 85, 95, 70, 88];
// a. Write a function named calculateAverageScore that takes the array as a parameter and returns the average score.
// b. Write a function named findHighestScore that takes the array as a parameter and returns the highest score.


const scores = [90, 85, 95, 70, 88];

function calculateAverageScore(totalscore: number) {
    var a: number[] = [totalscore]
    return calculateAverageGrades
}

function findHighestScore(scoress: number) {
    var b: number[] = [scoress]
    var scoress = 95
    return scores
}

console.log(scores.shift());


// Question 10: Objects and String Manipulation

// You are given an array of person objects, where each object has properties firstName and lastName:

// const people = [
//   { firstName: "Alice", lastName: "Smith" },
//   { firstName: "Bob", lastName: "Johnson" },
//   { firstName: "Charlie", lastName: "Williams" }
// ];
// Write a function named createFullName that takes the array as a parameter and returns an array of full names (e.g., "Alice Smith").

// interface Person {
//     firstName: string;
//     lastName: string;
//   }

//   const people: Person[] = [
//     { firstName: "Alice", lastName: "Smith" },
//     { firstName: "Bob", lastName: "Johnson" },
//     { firstName: "Charlie", lastName: "Williams" }
//   ];

//   function createFullName(people: Person[]): string[] {
//     return people.map(person => `${person.firstName} ${person.lastName}`);
//   }

//   var fullNames: string[] = createFullName(people);
//   console.log(fullNames);


// Question 11: Functions and Object Creation

// Write a function named createEmployee that takes firstName and lastName as parameters and returns an employee object
//  with properties fullName and email. The email should be generated by combining the first and last name (e.g., 
// "alice.smith@example.com").


function createEmployee(firstName: string, lastName: string) {
    var fullName = `${firstName} ${lastName}`;
    var email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;

    var employee = {
        fullName: fullName,
        email: email
    };

    return employee;
}

var employee1 = createEmployee("sheraz", "irshad");
console.log(employee1.fullName);
console.log(employee1.email);


// Question 12: TypeScript Arrays and String Manipulation

// You are given an array of words:

// const words = ["apple", "banana", "cherry", "date", "fig"];
// a. Write a function named capitalizeWords that takes the array as a parameter and returns an array with all words capitalized.
// b. Write a function named concatenateAndUppercase that takes the array as a parameter, concatenates all words, and returns the result in uppercase.

// const _words: string[] = ["apple", "banana", "cherry", "date", "fig"];

// function capitalizeWords(arr: string[]): string[] {
//     return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
// }

// function concatenateAndUppercase(arr: string[]): string {
//     return arr.join('').toUpperCase();
// }

// var capitalizedWords = capitalizeWords(words);
// console.log(capitalizedWords);

// var concatenatedUppercase = concatenateAndUppercase(words);
// console.log(concatenatedUppercase);

// Question 15: Looping and Decision Making

// You are given an array of numbers:

// const values = [10, 25, 30, 15, 5];
// Write a function named countAboveThreshold that takes the array and a threshold number as parameters, and returns the
//  count of numbers in the array that are above the threshold.


// const values: number[] = [10, 25, 30, 15, 5];

// function countAboveThreshold(array: number[], threshold: number): number {
//     let count = 0;

//     for (let i of array) {
//         if (i > threshold) {
//             count++;
//         }
//     }

//     return count;
// }
// var threshold = 20;
// var countAbove = countAboveThreshold(values, threshold);
// console.log(`Count of numbers above ${threshold}: ${countAbove}`);


// Question 24: Classes and Decision Making

// Define a class named Student with properties name and score. Create instances of Student representing different students.
// Write a function named findTopStudent that takes an array of Student objects as a parameter and returns the student with the highest score.


class Student {
    name: string;
    score: number;

    constructor(name: string, score: number) {
        this.name = name;
        this.score = score;
    }
}

function findTopStudent(students: Student[]): Student {
    if (students.length == 0) {

    }

    let topStudent = students[0];

    for (var student of students) {
        if (student.score > topStudent.score) {
            topStudent = student;
        }
    }
    return topStudent;
}

const studentss: Student[] = [
    new Student("Alice", 95),
    new Student("Bob", 88),
    new Student("Charlie", 92)
];

const topStudent = findTopStudent(studentss);
if (topStudent) {
    console.log(`Top student: ${topStudent.name}, Score: ${topStudent.score}`);
} else {
    console.log("Not students found.");
}