const removeFromArray = function() {
    array = arguments[0];
    for (let i = 1; i < arguments.length; i++)
    {
        let indexOfElem = findIndex(array, arguments[i]);
        if (indexOfElem !== false)
        {
            array.splice(indexOfElem, 1);
        }
    }
    console.log(array);
    return array;
};

function findIndex(array, elem) {
    for (let i = 0; i < array.length; i++)
    {
        if (elem === array[i])
        {
            return i;
        }
    }
    return false;
};

// Do not edit below this line
module.exports = removeFromArray;