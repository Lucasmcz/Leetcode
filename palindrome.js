/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var palavra = x.toString()
    var palavra_2 = palavra.split('').reverse().join('')
    
    if(palavra == palavra_2){
        return(true);
    }
    else{
        return(false);
    }

};
