import {UserProps} from './User'

class Attributes<T> {
    constructor(
        private data: T
    ) {}

    get<K extends keyof T>(key: K): T[K] {
        return this.data[key];
    }

    set(update: T): void {
        Object.assign(this.data, update)
    }
}

const attrs =  new Attributes<UserProps>({
    id: 1,
    age: 2,
    name: 'doutz',
});

const id = attrs.get('id');
const age = attrs.get('age');
const name = attrs.get('name');