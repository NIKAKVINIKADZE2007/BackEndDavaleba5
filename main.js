//! task 1

// const fs = require('fs').promises;

// async function main() {
//   const res = await fetch(' https://jsonplaceholder.typicode.com/users');
//   const data = await res.json();

//   const parsedData = data.map((el) => {
//     return {
//       id: el.id,
//       name: el.name,
//       username: el.username,
//       email: el.email,
//     };
//   });

//   await fs.writeFile('users.json', JSON.stringify(parsedData));
// }
// main();

//! task 2

// const fs = require('fs').promises;

// async function main() {
//   const [, , carName, carYear, carColor] = process.argv;

//   let cars = await fs.readFile('cars.json', 'utf-8');

//   if (!cars) {
//     cars = [];

//     id = cars.length;
//     cars.push({ id, carName, carYear, carColor });
//     await fs.writeFile('cars.json', JSON.stringify(cars));
//   } else {
//     let parsedData = await JSON.parse(cars);
//     id = parsedData.length;
//     parsedData.push({ id, carName, carYear, carColor });
//     await fs.writeFile('cars.json', JSON.stringify(parsedData));
//   }
// }

// main();

//! task 3

const fs = require('fs').promises;

async function main() {
  const text = await fs.readFile('text.txt', 'utf-8');

  let count = 0;

  let words = text.split(' ');
  let vawouls = 'aeiou';

  words.map((el) => {
    for (let i = 0; i < el.length; i++)
      if (vawouls.includes(el[i])) {
        count++;
      }
  });

  console.log(count);
}

main();
