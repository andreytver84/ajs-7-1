// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

/* const wrongName = [
    "1aaaa",
    "aaaa1",
    "1aaaa",    
    "-aaaaaa",
    "aaaaa-",
    "_aaaaaa",
    "aaaaa_"   
  ];

const rightName =[
    "aaaa-aaaa",    
    "aaaa111aaaa",    
    "aa-2-ssss",
    "aaa_aaaaa",
    "aaaaa_2aaaa",
    "aaaa_333-ssss"
];

const mixname = [
    "Andrey",
    "Андрей",
    "Яrosla",
    "ЫshtyЛ",
    "N@bitator",
    "Nag1b000ter",
    "Pr01p1234yer"
]; */

export default class Validator {   
    static validateUsername(name) {
        if (/^[^-\d_][A-Za-z_\d-]+[^-\d_]$/.test(name)) {
            return /^\D+\d{0,3}\D+\d{0,3}\D+$/.test(name);
        } else {
            return false;
        }
    }
};

/* rightName.forEach(item => {
    console.log(Validator.validateUsername(item));
    console.log(item);
}); 
wrongName.forEach(item => {
    console.log(Validator.validateUsername(item));
    console.log(item);
}); 
mixname.forEach(item => {
    console.log(Validator.validateUsername(item));
    console.log(item);
});  */