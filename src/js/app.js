// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export default function specAtackGet(obj) {   
    let specAtackArr;
    let specAtackArrRes = [];
    for (let key in obj) {
        if (typeof obj[key] == "object") {
            specAtackArr = [...obj[key]];
            specAtackArr.forEach(item => {
                let {id, name, description = 'Описание недоступно', icon} = item;
                specAtackArrRes.push({id,name,description,icon});
            });
        }
    }
    return specAtackArrRes;    
};






