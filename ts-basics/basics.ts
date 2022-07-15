let age: number = 24;

age = 12.2;

let userName: string | string[] = 'xxxxx';

let isInstructor: boolean = true;

let hobbies: string[] = ['h1','h2'];

type Person = {
  name: string;
  age: number;
};

let person: Person;

let people: Person[];

let course: string | number = 'react';

function add(a: number, b: number): number {
  return a + b;
}

function myPrint(a: any): void {
  console.log(a);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  return [value, ...array];
}

const demoArray = [1,2,3];
const newArray = insertAtBeginning(demoArray, -1);
newArray[0].slpit('');