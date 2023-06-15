// 2. Print a table containing multiplication tables

// 1. Print all even numbers from 0 – 10
// 0, 2, 4, 6, 8, 10
// 0 == '0' --> true
// 0 === '0' --> false

function printEvenNumbers() {
  for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log(i)
    }
  }
}
// printEvenNumbers()

// 2. Print a table containing multiplication tables
/*
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
1 x 4 = 4
1 x 5 = 5
1 x 6 = 6
1 x 7 = 7
1 x 8 = 8
1 x 9 = 9

2 x 1 = 2
2 x 2 = 4

${kintamieji, aritmetika su kintamaisiais, salygas} 
*/

function daugybosLentele() {
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      console.log(`${i} x ${j} = ${i * j}`)
    }
    console.log('---')
  }
}
// daugybosLentele()

// 3. Create a length converter function
/*
30 cm -> ? coliai
1cm = 0.393701 colių
*/

let centimetrai = 100
let konvertavimas = 0.01

function kovertuoklis(x, y) {
  return x * y
}

// console.log(`${centimetrai} centimetrų yra lygu ${kovertuoklis(centimetrai, konvertavimas)} metrų`)
const arr1 = [1, 3, 2, 3, 4, 5, 3]
const arr2 = [3, 2]

function difference(a1, a2) {
  const res = a1.filter(item => !a2.includes(item))
  console.log(res)
}
difference(arr1, arr2)
