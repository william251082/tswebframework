import { User } from "./models/User";

const user = new User({name: 'newrecord', age: 90});

user.events.on('change', () => {
    console.log('change');
});

user.events.trigger('change');

user.save();