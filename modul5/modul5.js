const numbers = [1, 2, 3, 4];

const doubleNumbers = numbers.map((number) => number * 2);

console.log(numbers);
console.log(doubleNumbers);

const students = [
  { name: "Kornelia", score: 55 },
  { name: "Kamil", score: 78 },
  { name: "Martyna", score: 86 },
  { name: "Konrad", score: 65 },
];

const names = students.map((student) => student.name);
console.log(names);
