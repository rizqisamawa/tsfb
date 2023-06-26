// function
let sayHi = () => {
  console.log("Hi");
};

// return must be string because we set the type data
let sayHi2 = (): string => {
  console.log("Hi");
  return "Hi";
};

// return must be number because we set the type data
let multiple = (num: number): number => {
  return num * 2;
};

let multiple2 = (num: number): void => {
  // do something but not return
};

// optional parameter
let sum = (num1: number, num2: number, another?: number): number => {
  return num1 + num2;
};

// default parameter
let person = (person: { name: string; age: number; isMarried?: boolean }) => {
  console.log(person.name);
};

// type
type personType = {
  name: string;
  age: number;
  isMarried?: boolean;
  theme: "dark" | "light";
};

// better function
let person2 = (person: personType) => {
  console.log(person.isMarried);
};

const userWithTheme: personType = {
  name: "rizqi",
  age: 23,
  theme: "light",
};

// interfaces

interface IUser {
  username: string;
  password: string;
  email: string;
  age: number;
}

// interface can be used in class and object
interface IEmployee extends IUser {
  employeeId: number;
  position: string;
}

// we must fill all the property in interface IEmployee
const employee: IEmployee = {
  username: "rizqi",
  password: "123",
  email: "rizqisamawa11@gmail.com",
  age: 23,
  employeeId: 1,
  position: "developer",
};

// we can fill only the property in interface IUser
const client: IUser = {
  username: "rizqi",
  password: "123",
  email: "rizqisamawa11@gmail.com",
  age: 23,
};
