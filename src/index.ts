import {UserForm} from "./views/UserForm";
import {User} from "./models/User";

const user = User.buildUser({name: 'doutz', age: 20});
const root = document.getElementById('root');

if (root) {
    const useForm = new UserForm(root, user);
    useForm.render();
} else {
    throw new Error('Root element not found');
}