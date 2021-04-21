'use strict';

class ArrMath{
    static max(_arrayData, _outputCnt){
        const len = Math.floor(_arrayData.length/_outputCnt);
        let _tmp = [];
        const _arr = [];
    
        _arrayData.map((data) => {
            _tmp.push(data);
            if(_tmp.length === len){
                _arr.push(_tmp);
                _tmp = [];
            }
        });
        
        console.log(_arr);
        return _arr;
    }
}


module.exports = ArrMath;