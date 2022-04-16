const caculater = {
    plus : function(a, b) {
        return(a + b)
    },
    minus : function(a, b) {
        return(a - b)
    },
    times : function(a, b) {
        return(a * b)
    },
    divide : function(a, b) {
        return(a / b)
    },
    power :function(a, b) {
        return(a ** b)
    }
}

const plusResult = caculater.plus(5, 2);
const minusResult = caculater.minus(plusResult, 5);
const timeResult = caculater.times(10, minusResult);
const divideResult = caculater.divide(timeResult, plusResult);
const powerResult = caculater.power(divideResult, minusResult);


