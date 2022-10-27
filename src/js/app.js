// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export default class Validator {   
    static validateUsername(name) {
        return /^[^-\d_]\w+[_\d-]{0,3}\w+[^-\d_]$/.test(name);
    }
};