import { User } from "./models/User";

const user = new User({name: 'newrecord', age: 90});

// user.set({name: 'newname', age: 9});

user.save();