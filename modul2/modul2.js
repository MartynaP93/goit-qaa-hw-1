const fruits = ["Jabłko", "Banan", "Pomarańcza", "Winogrona", "Arbuz"];
console.log(fruits);

const numbers = [1, 44, 67, 6, 3, 0, 11, 2];
const wiekszeOd5 = 5;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > wiekszeOd5) {
    console.log(`Liczba większa niż ${wiekszeOd5}: ${numbers[i]}`);
  }
}
