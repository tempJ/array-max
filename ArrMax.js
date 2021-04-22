'use strict';

class ArrMath{
    // static _tmp = [];
    static maxMapLen(arrayData, outputCnt){
        const len = Math.floor(arrayData.length/outputCnt);
        let _tmp = [];
        const arr = [];
    
        arrayData.map((data) => {
            _tmp.push(data);
            if(_tmp.length === len){
                // arr.push(_tmp);
                // console.log(_tmp);
                // console.log(Math.max.apply(null, _tmp));
                arr.push(Math.max.apply(null, _tmp));
                _tmp = [];
            }
        });

        if(_tmp.length > 0){
            arr.push(Math.max.apply(null, _tmp));
            // arr.push(_tmp);
        }
        
        // console.log(arr);
        return arr;
    }

    static maxMapIdx(arrayData, outputCnt){
        const len = Math.floor(arrayData.length/outputCnt);
        const arr = [];
        let _tmp = [];
    
        arrayData.map((data, idx) => {
            _tmp.push(data);
            if(idx%len === len-1){
                // arr.push(_tmp);
                arr.push(Math.max.apply(null, _tmp));
                _tmp = [];
            }
        });

        if(_tmp.length > 0){
            arr.push(Math.max.apply(null, _tmp));
            // arr.push(_tmp);
        }
        
        // console.log(arr);
        return arr;
    }

    static maxReduce(arrayData, outputCnt){
        const len = Math.floor(arrayData.length/outputCnt);
        const arr = [];
        let _tmp = [];
        arrayData.reduce((pre, cur, idx) => {
            _tmp.push(cur);
            
            if(idx%len === len-1){
                // arr.push(_tmp);
                // console.log(`${idx}, ${idx%outputCnt}, ${outputCnt-1}`);
                arr.push(Math.max.apply(null, _tmp));
                _tmp = [];
            }            
        })

        if(_tmp.length > 0){
            arr.push(Math.max.apply(null, _tmp));
            // arr.push(_tmp);
        }
        // console.log(arr.length);
        // console.log(arr);
        return arr;
    }

    static maxForeach(arrayData, outputCnt){
        const len = Math.floor(arrayData.length/outputCnt);
        const arr = [];
        let _tmp = [];
        arrayData.forEach((data, idx) => {
            _tmp.push(data);
            if(idx%len === len-1){
                // arr.push(_tmp);
                arr.push(Math.max.apply(null, _tmp));
                _tmp = [];
            }            
        })

        if(_tmp.length > 0){
            arr.push(Math.max.apply(null, _tmp));
            // arr.push(_tmp);
        }

        // console.log(arr);
        return arr;
    }

    static maxFor(arrayData, outputCnt){
        const len = Math.floor(arrayData.length/outputCnt);
        const arr = [];
        let _tmp = [];

        for(let idx=0; idx<len; idx++){
            _tmp.push(arrayData[idx]);
            if(idx%len === len-1){
                // arr.push(_tmp);
                arr.push(Math.max.apply(null, _tmp));
                _tmp = [];
            }
        }

        if(_tmp.length > 0){
            arr.push(Math.max.apply(null, _tmp));
            // arr.push(_tmp);
        }

        // console.log(arr);
        return arr;
    }
}


module.exports = ArrMath;