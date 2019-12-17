import * as _ from 'lodash';

const arr = [1, 2, 3, 4];
const newArr = _.chunk(arr, 2); // [ [1,2], [3,4] ]
console.log(newArr);

const arr2 = ['1', '2', '3', '4'];
const newArr2 = _.chunk(arr2, 3); // [ ['1', '2', '3'], ['4'] ]
console.log(newArr2);
