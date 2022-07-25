const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];

// let sum = 0;

// // arr,forEach 활용 arr 홀수는 odd에 전부 더하고, 짝수는 even에 더하시오.

// arr.forEach((item, idx) => {
//     console.log(idx);
//     if (item <= 70) {
//         sum += item;
//     }
// });

// console.log(`sum:${sum}`);

//arr,forEach 활용 아래처럼

arr.forEach((item, idx) => {
    console.log(`arr[${idx}]: ${item}`);
});
