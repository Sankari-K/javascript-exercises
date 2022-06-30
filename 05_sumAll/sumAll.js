const sumAll = function(start, stop) {
    let sum = 0;
    if (typeof(start) != "number" || typeof(stop) != "number") {
        return "ERROR";
    }
    if (start < 0 || stop < 0) {
        return "ERROR";
    }
    let temp = start;
    start = start < stop ? start: stop;
    stop = stop >= temp ? stop: temp;
    console.log("test", start, stop);
    for(let i = start; i <= stop; i++)
    {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
