'use strict';

class ArrMath{
    // static ifLen(_tmp, ){
    //     if(_tmp.length === len){
    //         arr.push(Math.max.apply(null, _tmp));
    //         _tmp = [];
    //     }
    // }

    static maxMapLen(arrayData, outputCnt){
        const length = arrayData.length;
        const len = Math.floor(length/outputCnt);
        const isFloor = (length%outputCnt === 0)? false : true;

        const arr = [];
        let _tmp = [];
    
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

        if(isFloor){
            _tmp.push(arr.pop());
            arr.push(Math.max.apply(null, _tmp));
            // console.log(_tmp);
            // arr.push(_tmp);
        }
        
        // console.log(arr);
        return arr;
    }

    static maxMapIdx(arrayData, outputCnt){
        const length = arrayData.length;
        const len = Math.floor(length/outputCnt);
        const isFloor = (length%outputCnt === 0)? false : true;
        // console.log(isFloor);

        const arr = [];
        let _tmp = [];
        // if(isFloor){
        //     arrayData.map((data, idx) => {
        //         _tmp.push(data);
        //         if((arr.length !== outputCnt-1) && (idx%len === len-1)){
        //             // arr.push(_tmp);
        //             arr.push(Math.max.apply(null, _tmp));
        //             _tmp = [];
        //         }
        //     });
        //     arr.push(Math.max.apply(null, _tmp));
        // }
        // else{
        //     arrayData.map((data, idx) => {
        //         _tmp.push(data);
        //         if(idx%len === len-1){
        //             // arr.push(_tmp);
        //             arr.push(Math.max.apply(null, _tmp));
        //             _tmp = [];
        //         }
        //     });
        // }

        arrayData.map((data, idx) => {
            _tmp.push(data);

            if(idx%len === len-1){
                // arr.push(_tmp);
                arr.push(Math.max.apply(null, _tmp));
                _tmp = [];
            }
        });
        
        if(isFloor){
            _tmp.push(arr.pop());
            arr.push(Math.max.apply(null, _tmp));
            // console.log(_tmp);
            // arr.push(_tmp);
        }
        // console.log(arr.length);
        // console.log(arr);
        return arr;
    }

    static maxReduce(arrayData, outputCnt){
        const length = arrayData.length;
        const len = Math.floor(length/outputCnt);
        const isFloor = (length%outputCnt === 0)? false : true;

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

        if(isFloor){
            _tmp.push(arr.pop());
            arr.push(Math.max.apply(null, _tmp));
            // console.log(_tmp);
            // arr.push(_tmp);
        }

        return arr;
    }

    static maxForeach(arrayData, outputCnt){
        const length = arrayData.length;
        const len = Math.floor(length/outputCnt);
        const isFloor = (length%outputCnt === 0)? false : true;

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

        if(isFloor){
            _tmp.push(arr.pop());
            arr.push(Math.max.apply(null, _tmp));
            // console.log(_tmp);
            // arr.push(_tmp);
        }

        return arr;
    }

    static maxFor(arrayData, outputCnt){
        const length = arrayData.length;
        const len = Math.floor(length/outputCnt);
        const isFloor = (length%outputCnt === 0)? false : true;

        const arr = [];
        let _tmp = [];

        for(let idx=0; idx<length; idx++){
            _tmp.push(arrayData[idx]);
            if(idx%len === len-1){
                // arr.push(_tmp);
                arr.push(Math.max.apply(null, _tmp));
                _tmp = [];
            }
        }

        if(isFloor){
            _tmp.push(arr.pop());
            arr.push(Math.max.apply(null, _tmp));
            // console.log(_tmp);
            // arr.push(_tmp);
        }

        return arr;
    }
}


module.exports = ArrMath;