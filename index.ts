const world = '🗺️';

export function hello(word: string = world): string {
      return `Hello ${world}! `;
}

console.log('hello')

enum MyNumEnum {  ChoiceA,  ChoiceB ,}

console.log( MyNumEnum.ChoiceA )

const addNum = (x:number, y:number): string => {
  return (x + y).toString()
}