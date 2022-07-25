// node.js가 있어서 ctrl+alt+n 으로 terminal에서 실행 or terminal에서 node x 엔터 { console.log('x') }
// console.log("arr.js!");

// 배열은 항상 같은 type ex) int, str
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log("arr[0]: " + arr[0]);

arr[0] = 11;
arr[0]++;
console.log("arr[0]: " + arr[0]);

for (let i = 0; i < arr.length; i++) {
    console.log(`arr[${i}]: ${arr[i]}`);
}

console.log("================");

// arr.forEach(cb); //ch means callback function
// (item) => {};
// arr.forEach(function (item) {});
// arr.forEach((item) => {});

arr.forEach((item) => {
    console.log(item);
});

const fnPrint = (item) => {
    console.log(item);
};
