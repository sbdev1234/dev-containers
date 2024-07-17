//
// Some typescript basics
//

// ## Importing

// Import specific node functionality
import * as util from 'node:util';

// Import using path alias defined in tsconfig, resolved by tsc-path package
import { wait } from '@lib/async';

// ## Async IFEE
(async function (): Promise<void> {
  console.log('I promise to wait 500 milliseconds then output "Beep"');
  await wait(500);
  console.log('"Beep" as promised');
})();

// ## Inferred types
const Hello = 'Hello World';
console.log(Hello);

// ## Typed arrays
const numArr = [1, 2, 3];
console.log(numArr);

// ## Optional parameters
function add(x: number, y: number, z?: number): number {
  return x + y + (z ?? 0);
}
console.log(add(3, 5));

// ## Inline arrow function
const sayHello = (name: string): string => {
  return `Hello ${name}`;
};
console.log(sayHello('bob'));

// ## Object with method
const person = {
  name: 'Bob',
  sayHello(): string {
    return `Hello ${this.name}`;
  },
};
console.log(person.sayHello);

// ## Arrays
const names = ['Bill', 'Bob'];
for (const name of names) {
  console.log(name);
}

// ## Generics
const strArr: Array<string> = ['aaa', 'bbb', 'ccc'];
const roArray: ReadonlyArray<number> = [1, 2];

function lastElement<T>(arr: T[]): T | undefined {
  return arr.slice(-1).pop();
}
console.log(roArray, lastElement(numArr), lastElement(strArr));

// ## Union
type IGender = 'Male' | 'Female' | 'Other';

// ## Interface
interface IAllUsers {
  sex?: IGender; // Optional
}

interface IUser extends IAllUsers {
  fName: string;
  lName: string;
}

interface IUserInfo {
  getUserInfo(): string;
}

// ## Class
class UserInfo implements IUserInfo {
  private user: IUser;

  public static create(fName: string, lName: string, sex?: IGender): UserInfo {
    return new UserInfo({ fName, lName, sex });
  }

  constructor(user: IUser) {
    this.user = { sex: 'Other', ...user };
  }

  getUserInfo(): string {
    return `${this.user.fName} ${this.user.lName} Gender: ${this.user.sex}`;
  }

  public toString(): string {
    return this.getUserInfo();
  }

  [util.inspect.custom](): string {
    return this.getUserInfo();
  }
}

console.log(UserInfo.create('Bob', 'Smith', 'Male')); // Calls class custom inspector()
console.log(new UserInfo({ fName: 'Billy', lName: 'Bob' }) + ''); // calls class toString()
console.log(UserInfo.create('Jane', 'Doe', 'Female').toString());

// ## OOP
abstract class Animal {
  protected abstract sound(): string;
}

class Dog extends Animal {
  constructor() {
    super();
  }
  sound(): string {
    return 'Bark';
  }
}
console.log(new Dog().sound());

// ## Type manipulation
type Book = {
  id: number;
  title: string;
  info: {
    [key: string]: string; // Force all properties to be of type string
  };
  inStock: boolean;
};

const aBook: Book = {
  id: 1,
  title: 'Book 1 Title',
  info: {
    author: 'Billy Bob',
  },
  inStock: true,
};

console.log(aBook);

// ## Destructuring
const printBook = (book: Book): string => {
  const { id, title, info } = book;
  return `Book ${id}: ${title}\n${JSON.stringify(info, null, 2)}`;
};
console.log(printBook(aBook));
