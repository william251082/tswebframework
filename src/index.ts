import { User } from "./models/User";

const user = new User({name: 'newrecord1', age: 90});


console.log(user.get('name'));

user.on('change', () => {
    console.log('User was changed, update html');
});

user.set({name: 'New name'});