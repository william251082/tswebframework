import {User} from "./models/User";

const user = new User({name: 'john', age: 20});

user.on('click', () => {});
user.on('click', () => {});
user.on('click', () => {});

console.log(user);
