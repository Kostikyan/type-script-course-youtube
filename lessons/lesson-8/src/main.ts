// Generic
const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === "object" && !Array.isArray(arg) && arg !== null)
}

console.log(isObj(true));
console.log(isObj('John'));
console.log(isObj([1,2,3]));
console.log(isObj({name: 'John'}));
console.log(isObj(null));

interface BoolCheck<T> {
    value: T;
    is: boolean;
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
    if(Array.isArray(arg) && !arg.length) return {value: arg, is: false};

    if(isObj(arg) && !Object.keys(arg as keyof T).length) return {value: arg, is: false};

    return {value: arg, is: !!arg};
}

interface hasId {
    id: number
}

const processUser = <T extends hasId>(user: T): T => {
    return user;
}

console.log(processUser({id: 1, name: "Dave"}));
// console.log(processUser({name: "Dave"}));

const getUsersProperty = <T extends hasId, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}

class StateObject<T> {
    private data: T;

    constructor(value: T) {
        this.data = value;
    }

    get state(): T{
        return this.data;
    }

    set state(value: T) {
        this.data = value;
    }
}

const store = new StateObject<number>(12);
console.log(store.state);
// store.state = "Dave";
store.state = 123;

const store2 = new StateObject<string>("Dave");
console.log(store2.state);
store2.state = "Daveds";
// store2.state = 123;

const myState = new StateObject<(string | number | boolean)[]>(['a']);
myState.state = ([12, "Dave", true]);
console.log(myState.state);