const numbers=[1,2,3,
];
numbers.push(6,5,4);
numbers.unshift(-3,-2,-1);


const numbers2=[100,-273.15,0,1,2,3,4,5,6,9,10];
const deletedNumbers3=numbers2.pop();
const deletedNumbers4=numbers2.shift();


const numbers5=[1,2,3,4,5];
const result= numbers5.splice(-4,2);

const numbers6=[1,2,3,4,5];
const result1=numbers6.splice(-2,1,'a','b','c');

const numbers7=[1,2,3,4,5];
const result2=numbers7.splice(1,4,'a','b',2, 3, 4, 'c', 5, 'e');

