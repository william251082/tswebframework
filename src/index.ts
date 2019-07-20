import {User} from "./models/User";

const user = new User({name: 'john', age: 20});

user.on('click', () => {
    console.log('change1');
});

user.on('click', () => {
    console.log('change2');

});

user.on('click', () => {
    console.log('change3');
});

user.trigger('click');

