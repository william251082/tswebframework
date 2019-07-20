import {User} from "./models/User";

const user = new User({name: 'john', age: 20});


console.log(user.get('name'));
console.log(user.get('age'));

console.log(user.set({name: 'doe', age: 21}));