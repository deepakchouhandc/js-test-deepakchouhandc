/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = new Map();
    map.set('I', 1);
    map.set('V', 5);
    map.set('X', 10);
    map.set('L', 50);
    map.set('C', 100);
    map.set('D', 500);
    map.set('M', 1000);

    // Assuming str is the Roman numeral string
    const l = str.length;
    let output = 0;

    for (let i = 0; i < l; i++) {
        if (i < l - 1 && map.get(str.charAt(i)) < map.get(str.charAt(i + 1))){
            output += map.get(str.charAt(i + 1)) - map.get(str.charAt(i));
            i++;
        }
        else {
            output += map.get(str.charAt(i));
        }
    }
    return output;
};


module.exports={romanToInt}
