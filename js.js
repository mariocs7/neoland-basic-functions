//Iteración #1: Buscar el máximo

function sum(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
      return numberOne;
    } else {
      return numberTwo;
    }
}


//Iteración #2: Buscar la palabra más larga

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(words) {
  if (words.length === 0) {
    return null; 
  }

  let palabraMasLarga = words[0];

  for (let i = 1; i < words.length; i++) {
    let currentWord = words[i];
       if (currentWord.length > palabraMasLarga.length) {palabraMasLarga = currentWord;
    } else if (currentWord.length === palabraMasLarga.length) {
      palabraMasLarga = words[i - 1];
    }
  }

  return palabraMasLarga;
}

const result = findLongestWord(avengers);
console.log(result);


//Iteración #3: Calcular la suma

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumaAll(arrayDeNumero) {
    let sum = 0;

    for (let i = 0; i < arrayDeNumero.length; i++) {
      sum += arrayDeNumero[i];
    }
  
    return sum;
}

const resultadoSuma = sumaAll(numbers);
console.log(resultadoSuma);


//Iteración #4: Calcular el promedio

const numbers1 = [12, 21, 38, 5, 45, 37, 6];

function average(arrayDeNumero2) {
  if (arrayDeNumero2 === 0) {
    return null;
  }

  let suma = 0;

  for (let i = 0; i < arrayDeNumero2.length; i++) {
    suma += arrayDeNumero2[i];
  }

  return suma / arrayDeNumero2.length;
}

const result1 = average(numbers1);
console.log(result1);

//Iteración #5: Calcular promedio de strings 

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(promedio) {
  let sumaLongitudes = 0;
  let sumaNumero = 0;

  for (let i = 0; i < promedio.length; i++) {
    if (typeof promedio[i] === 'number') {
      sumaLongitudes += promedio[i];
    } else if (typeof promedio[i] === 'string') {
      sumaLongitudes += promedio[i].length;
      sumaNumero++;
    }
  }
  if (sumaNumero === 0) {
    return 0;  
  }
  return sumaLongitudes / sumaNumero;
}

const result2 = averageWord(mixedElements);
console.log(result2);

//Iteración #6: Valores únicos

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  
  function removeDuplicates(param) {
    const result = [];
  
    for (const element of param) {
      if (!result.includes(element)) {
        result.push(element);
      }
    }
  
    return result;
  }
  
  const uniqueArray = removeDuplicates(duplicates);
  console.log(uniqueArray);

//Iteración #7: Buscador de nombres

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  
  function finderName(arr, target) {
    const position = arr.indexOf(target);
    const found = position !== -1;
  
    return { found, position };
  }
  
  const result4 = finderName(nameFinder, 'Logan');
  console.log(result4);


  // Iteration #8: Contador de repeticiones

  const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  
  function repeatCounter(arr) {
    const wordCount = {};
  
    for (const word of arr) {
      if (wordCount[word]) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }
    }
  
    return wordCount;
  }
  
  const result5 = repeatCounter(counterWords);
  console.log(result5);