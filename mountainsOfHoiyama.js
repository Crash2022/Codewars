function mountainsOfHoiyama (width) {
  if (width % 2 !== 0) {
  
  let arr = [width];
  
  for (let i = 1; i < width; i++) {
    arr[i] = []; // создаем подмассив (количество массивов)
    width--; // корректировка количества массивов
    let arrayLength = arr[i].length + i; // корректировка длины массива
    let k = 1; // поправка для следующего элемента массива

      for (let j = 0; j < arrayLength; j++) { // счётчик длины массива
      
      arr[i][j] = width; // заполняем подмассив числами (начало массива)
      arr[i].push(arr[i][j] - k); // добавляем в конец массива
      arr[i].unshift(arr[i][j] - k); // добавляем в начало массива
      k++; 
    }
  }
  console.log(arr);

  // сумма элементов массива
  let sum = 0;
  arr = arr.flat(Infinity) // перевод многомерного массива в однострочный
  for (let i = 0; i < arr.length; i++) {
     sum += arr[i];
  }
  console.log(sum);
  // return sum;
  } else {
    console.log('Введите нечётное число');
    console.log([]);
    //return [];
  }
}
mountainsOfHoiyama(7);