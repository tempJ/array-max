'use strict';

const arrMax = require('./ArrMax');

const NUM = 1000000;
const CNT = 10000;

let now, end, time;

const data = [];
for(let i=0; i<NUM; i++){
    let tmp = Math.floor(Math.random()*100);
    data.push(tmp);
}

// console.log(`data: ${data}`);

now = new Date();
arrMax.maxMapL(data, CNT);
end = new Date();
time = end - now;
console.log(`maxMap-use len: ${time} ms`);

now = new Date();
arrMax.maxMapQ(data, CNT);
end = new Date();
time = end - now;
console.log(`maxMap-use %: ${time} ms`);

now = new Date();
arrMax.maxReduce(data, CNT);
end = new Date();
time = end - now;
console.log(`maxReduce: ${time} ms`);

now = new Date();
arrMax.maxForeach(data, CNT);
end = new Date();
time = end - now;
console.log(`maxForeach: ${time} ms`);

now = new Date();
arrMax.maxFor(data, CNT);
end = new Date();
time = end - now;
console.log(`maxFor: ${time} ms`);