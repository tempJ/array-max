'use strict';

const arrMax = require('./ArrMax');

const NUM = 100;
const CNT = 10;

const data = [];
for(let i=0; i<NUM; i++){
    let tmp = Math.floor(Math.random()*100);
    data.push(tmp);
}

console.log(`data: ${data}`);
arrMax.max(data, CNT);