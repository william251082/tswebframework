import axios, { AxiosResponse } from "axios";
import {Eventing} from "./Eventing";

interface UserProps {
    id?: number
    name?: string,
    age?: number
}

type CallBack = () => void;

// option 1
// accept dependencies as second constructor argument
export class User {
    constructor(
        private data: UserProps,
        private events: Eventing,
    ) {}

    get(propName: string): (number | string) {
        return this.data[propName];
    }

    set(update: UserProps): void {
        Object.assign(this.data, update)
    }

    fetch(): void {
        axios.get(`http://localhost:3000/users/${this.get('id')}`)
            .then((response: AxiosResponse): void => {
                this.set(response.data);
            });
    }

    save(): void {
        const id = this.get('id');

        if (id) {
            axios.put(`http://localhost:3000/users/${id}`, this.data)
        } else {
            axios.post('http://localhost:3000/users/', this.data)
        }
    }
}

// option 2
// Only accept dependencies into constructor
// Define a static class method to preconfigure
// User and assign properties afterwards
export class User {
    static  fromData(data: UserProps) {
        const user = new User(new Eventing());
        user.set(data);

        return user;
    }

    private data: UserProps;

    constructor(
        private events: Eventing,
    ) {}

    get(propName: string): (number | string) {
        return this.data[propName];
    }

    set(update: UserProps): void {
        Object.assign(this.data, update)
    }

    fetch(): void {
        axios.get(`http://localhost:3000/users/${this.get('id')}`)
            .then((response: AxiosResponse): void => {
                this.set(response.data);
            });
    }

    save(): void {
        const id = this.get('id');

        if (id) {
            axios.put(`http://localhost:3000/users/${id}`, this.data)
        } else {
            axios.post('http://localhost:3000/users/', this.data)
        }
    }
}

// option 3
// Only accept properties into constructor
// Hard code dependencies as class properties
export class User {
    events: Eventing = new Eventing();
    constructor(
        private data: UserProps
    ) {}

    get(propName: string): (number | string) {
        return this.data[propName];
    }

    set(update: UserProps): void {
        Object.assign(this.data, update)
    }

    fetch(): void {
        axios.get(`http://localhost:3000/users/${this.get('id')}`)
            .then((response: AxiosResponse): void => {
                this.set(response.data);
            });
    }

    save(): void {
        const id = this.get('id');

        if (id) {
            axios.put(`http://localhost:3000/users/${id}`, this.data)
        } else {
            axios.post('http://localhost:3000/users/', this.data)
        }
    }
}

