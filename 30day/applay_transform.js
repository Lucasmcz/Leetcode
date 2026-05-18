/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const returnedArray = []; //Criar o novo Array

    for(let i = 0;i < arr.length;i++){

        const resultadoTransformado = fn(arr[i],i);

        returnedArray.push(resultadoTransformado);
    } 


    return returnedArray;
    
};
