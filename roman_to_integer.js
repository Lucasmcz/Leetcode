/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var n = s.length;
    var count = 0;
    for(i = 0;i < n;i++){
        if(s[i] == 'I' && s[i+1] != 'V' && s[i+1] !='X'){
            count = count + 1;
        }
        else if(s[i] == 'I' && s[i+1] == 'V'){
            count = count + 4;
            i = i + 1;
        }
        else if(s[i] == 'I' && s[i+1] == 'X'){
            count = count + 9;
            i = i + 1;
        }
        else if(s[i] == 'V'){
            count = count + 5;
        }
        
        else if(s[i] == 'X' && s[i+1] != 'L' && s[i+1] != 'C'){
            count = count + 10;

        }
        else if(s[i] == 'X' && s[i+1] == 'L' && s[i+1] != 'C'){
            count = count + 40;
             i = i + 1;

        }
        else if(s[i] == 'X' && s[i+1] != 'L' && s[i+1] == 'C'){
            count = count + 90;
             i = i + 1;
        }
        else if(s[i] == 'L'){
            count = count + 50;

        }
        else if(s[i] == 'C' && s[i+1] != 'D' && s[i+1] != 'M'){
            count = count + 100;

        }
        else if(s[i] == 'C' && s[i+1] == 'D' && s[i+1] != 'M'){
            count = count + 400;
            i = i + 1;

        }
        else if(s[i] == 'C' && s[i+1] != 'D' && s[i+1] == 'M'){
            count = count + 900;
            i = i + 1;

        }
        else if(s[i] == 'D'){
            count = count + 500;

        }
        else if(s[i] == 'M'){
            count = count + 1000;
        }
    }
    return(count);

};
