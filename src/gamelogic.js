import { TIPP, PATTERN } from "./gameboard";

let RESULT = [];

function randColors(){
    const HIDED_COLORS = [];
    while(HIDED_COLORS.length  < 4){
    let value = Math.floor(Math.random() * 8) + 1;
    HIDED_COLORS.push(value);
     }
    return HIDED_COLORS;
}

function evaluateTipp(){
const PATTERN_STORE = [...PATTERN];
RESULT = [];
for(let i = 0; i < PATTERN_STORE.length; i++){
    if(TIPP[i] === PATTERN_STORE[i]){
        RESULT.push(true);
        PATTERN_STORE[i] = null;
        TIPP[i] = null;
    }
}
for(let i = 0; i < TIPP.length; i++){
    for(let j = 0; j < PATTERN_STORE.length; j++){
        if(TIPP[i] != null && PATTERN_STORE[j] != null && TIPP[i] === PATTERN_STORE[j] ){
            RESULT.push(false);
            PATTERN_STORE[j] = null;
            break;
        }
    }
}
while(RESULT.length < 4){
    RESULT.push(null);
}
}

export { randColors, evaluateTipp, RESULT };
