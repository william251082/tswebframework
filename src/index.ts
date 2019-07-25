import {UserForm} from "./views/UserForm";
import {User} from "./models/User";

const user = User.buildUser({name: 'doutz', age: 20});
const useForm = new UserForm(document.getElementById('root'), user);

useForm.render();