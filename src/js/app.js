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
    " Andrey",
    "!Andrey",
    "Andrey ",
    " Andrey!",
    "Андрей",
    "Яrosla",
    "ЫshtyЛ",
    "N@bitator",
    "Nag1b000ter",
    "Pr01p1234yer",
    "Pr01p1234ye1r",
    "aaaa-aa4444aa",
    "aa-aa_aa4444aa",
    "aaaa-aa4444a_a"
];  */

export default class Validator {   
    static validateUsername(name) {
        return /^[A-Za-z]+[\w-]+[^-\d_][A-Za-z]+$/.test(name) ? !/[\d]{4}/.test(name) : false; 
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