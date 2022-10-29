// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export default class Validator {   
    static validateUsername(name) {
        if (/^[^-\d_][A-Za-z]+[_\d-]+[A-Za-z]+[^-\d_]$/.test(name)) {
            /\D\d{0,3}\D/.test(name);
        };
    }
};
