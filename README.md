# TYPESCRIPT
> about typescript

yarn global add typescript
or
yarn add typescript --dev





## [](#dependencies)Dependencies

First, you need TypeScript installed of course. You can decide to have it installed globally on your machine, or locally to your project.

To install globally, run:

    $ npm i typescript -g

    # or, using Yarn:
    $ yarn global add typescript

And to install locally, run:

    $ npm i typescript --save-dev

    # or, using Yarn:
    $ yarn add typescript --dev

## [](#setup)Setup

TypeScript comes with two binaries: _tsc_ and _tsserver_. **tsc** is the TypeScript compiler and has a command line interface with [plenty of available options](https://www.typescriptlang.org/docs/handbook/compiler-options.html). To initialize a TypeScript project, simply use the `--init` flag:

    $ tsc --init

* * *

If you’re using a version of TypeScript installed locally, you’ll instead want to ensure that you’re running the local version by calling **tsc** from the local _node_modules_ folder:

    $ ./node_modules/.bin/tsc --init

Or, even better, simply [using npx](/workflow/npx/) to ensure that the local version of tsc is used:

    $ npx tsc --init

* * *

After running **tsc** with the `--init` flag, a `tsconfig.json` will be added to your project folder with a few sensible defaults and an extensive list of commented-out possible configurations. Here are the starting configurations:

    {
      "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "strict": true
      }
    }

Let’s add just two more options to that base configuration:

    {
      "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "strict": true,
        "outDir": "dist",
        "sourceMap": true
      }
    }

With this, the JavaScript files that the TypeScript compiler outputs will be in a _dist_ folder and sourcemaps will be generated.

## [](#compiling)Compiling

With the `tsconfig.json` in place, we can start coding our app in TypeScript.

Let’s create an `index.ts` file in a _src_ folder with this content:

    const world = '🗺️';

    export function hello(word: string = world): string {
      return `Hello ${world}! `;
    }

Now, we can compile by simply running `tsc`:

    $ tsc

    # or, for local tsc:
    $ npx tsc

And bam, our JavaScript and sourcemap files are created! Here’s the content of the compiled JavaScript:

<span>/dist/index.js</span>

    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var world = 'WORLD';
    function hello(word) {
        if (word === void 0) { word = world; }
        return "Hello " + world + "! ";
    }
    exports.hello = hello;
    //# sourceMappingURL=index.js.map

### Watch mode

Instead of running the TypeScript compiler every time you make a change, you can start the compiler in watch mode instead so that it recompiles every time there are changes to the TypeScript files:

    $ tsc -w

    # or, for local tsc:
    $ npx tsc -w

### Watch mode

To run our app we need to run the complied js file in our dist folder. Let's open up another terminal to do this so we can still have our watchmode script running  

    $ node dist/index.js

## Linters and prettier

Having some sort of linter is can be a great way to keep you code clean and readable.  I use prettier and have use it format my document.  Lets look at the documentation to become more familiar with it and with extensions in general

# TYPESCRIPT

###  Exploring TypeScript: basic types

#### Types

As the name suggests, everything in Typescript deals with types. Since Typescript is the typed version of JS, we can specify types to variables when they are declared. This makes your code more scalable and reliable, and you can check that your code runs properly before runtime.

If you’ve worked with Javascript before, you know that it has eight types: string, number, null, undefined, object, symbol, bigint, and boolean. Javascript is dynamically typed, which means that it doesn’t know the type of your variable until runtime and variables can change their type. Even if we change them intentionally, errors and bugs often arise. Typescript helps with this problem by adding static types to the code.

There are three categories of types in Typescript: `any`, `Built-in`, and `User-defined`.

*   The **`any`** type is a superset of all Typescript data types, and it is the loosest one available to us. It means that a variable can be of any type. If we use this type, it will override type checking.
*   **`Built-in`** types include number, string, boolean, undefined, null, and void.
*   **`User-defined`** types include enum, array, interface, class, and tuple.

_Let’s dive into each of those a bit more and how to use Typescript types._

#### Assigning types

To assign a type in Typescript, you need a colon `:`, the name of the type, an equal sign `=`, and the value of that variable. Let’s look at an example.

    let variableName: typeScriptType = value;  

#### Number

Typescript supports decimal, hexadecimal, octal, and binary literal. In Typescript, all numbers are floating-point values.

    let num: number = 0.444;let hex: number = 0xbeef;let bin: number = 0b0010;

#### Boolean

Boolean values function just like they do in Javascript.

    let yes: boolean = true;
    let no: boolean = false;

#### Array

In Typescript, arrays are a collection of the same object. You can declare a typed array in two ways, either with the datatype followed by [ ], or the generic array approach with `Array<elemType>`.

You can also assign multiple types to one array using the `|` operator or create a multidimensional array to save one array into another array using the `[ ]` operator.

    const arr3: (Date| string[])[] = [new Date(), new Date(), ["1", "a"]];

#### Tuple

Tuples are a lot like arrays, but we can define the type of data that are stored in each position. Tuple types enable you to make organized arrays. You can express an array when you know the type of a fixed number of elements and predefine your types in order.

    let numberTuple: [number, number, number];

#### Void

Void is a subtype of `undefined`. It is a return type that can be substituted with different types when needed. Void is used when we are returning functions. It essentially tells us that a function will return undefined. This ensures that a function does not return a value.

#### Enum

Enums allow us to define a set of named predefined constants. These are defined with the enum keyword. You can define a numeric or a string enum.

    enum MyStringEnum {  ChoiceA = "A",  ChoiceB = "B",}
    enum MyNumEnum {  ChoiceA,  ChoiceB ,}

#### String

Typescript follows the same syntax of Javascript with double or single quotes around text. You can also use the backtick character to use multiple lines or the `${expression}` to enable evaluated operations inside a string.

    let w = "Value1";let x = "this is a string with the value " + w;let y = 'this is a string with the value ' + w;let z = `this is a string ${w}`;console.log(w,x,y,z)

###  Exploring TypeScript: Interfaces
One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.

#### Simple example
```javascript
function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
```
The type checker checks the call to `printLabel`. The `printLabel` function has a single parameter that requires that the object passed in has a property called label of type string. Notice that our object actually has more properties than this, but the compiler only checks that at least the ones required are present and match the types required. There are some cases where TypeScript isn’t as lenient, which we’ll cover in a bit.

We can write the same example again, this time using an interface to describe the requirement of having the label property that is a string:

```javascript
interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

```

#### Optional Properties
Not all properties of an interface may be required. Some exist under certain conditions or may not be there at all. These optional properties are popular when creating patterns like “option bags” where you pass an object to a function that only has a couple of properties filled in.

```javascript
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black" });

```
#### Optional Properties
Some properties should only be modifiable when an object is first created. You can specify this by putting readonly before the name of the property:

```javascript
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!

//TypeScript comes with a ReadonlyArray<T> type that is the same as Array<T> with all mutating methods removed, so you can make sure you don’t change your arrays after creation:

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error

```

#### allow for anything to be defined in interface
this would check the types of color and width if passed and allow for other values to be passed.
Keep in mind that for simple code like below, you probably shouldn’t be trying to “get around” these checks

```javascript   
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}
```

###  Exploring TypeScript: Functions
Functions are the fundamental building block of any application in JavaScript. They’re how you build up layers of abstraction, mimicking classes, information hiding, and modules. In TypeScript, while there are classes, namespaces, and modules, functions still play the key role in describing how to do things. TypeScript also adds some new capabilities to the standard JavaScript functions to make them easier to work with.

To begin, just as in JavaScript, TypeScript functions can be created both as a named function or as an anonymous function. This allows you to choose the most appropriate approach for your application, whether you’re building a list of functions in an API or a one-off function to hand off to another function.

To quickly recap what these two approaches look like in JavaScript:
```javascript
function add(x, y) {
  return x + y;
}

let myAdd = function(x, y) {
  return x + y;
};
// Let’s add types to our simple examples:
function add(x: number, y: number): number {
  return x + y;
}

let myAdd = function(x: number, y: number): number {
  return x + y;
};

//We can add types to each of the parameters and then to the function itself to add a return type. TypeScript can figure the return type out by looking at the return statements, so we can also optionally leave this off in many cases.

```

###  Exploring TypeScript: literals
There are two sets of literal types available in TypeScript today, strings and numbers, by using literal types you can allow an exact value which a string or number must have.

#### String/Numeric Literal Types

```javascript
type Easing = "ease-in" | "ease-out" | "ease-in-out";

class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === "ease-in") {
      // ...
    } else if (easing === "ease-out") {
    } else if (easing === "ease-in-out") {
    } else {
      // error! should not pass null or undefined.
    }
  }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here


/////////NUMERIC TYPES
function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
  // ...
}

// with a interface
interface GameConfig {
  tileSize: 8 | 16 | 32;
}
```

#### String Literal Types

###  Exploring TypeScript: Generics
A major part of software engineering is building components that not only have well-defined and consistent APIs, but are also reusable. Components that are capable of working on the data of today as well as the data of tomorrow will give you the most flexible capabilities for building up large software systems.

In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is generics, that is, being able to create a component that can work over a variety of types rather than a single one. This allows users to consume these components and use their own types.

#### Basic Example
The identity function is a function that will return back whatever is passed in. You can think of this in a similar way to the echo command.

Without generics, we would either have to give the identity function a specific type:

```javascript
function identity(arg: number): number {
  return arg;
}
function identity(arg: string): string {
  return arg;
}
// Or, we could describe the identity function using the any type:
function identity(arg: any): any {
  return arg;
}

```

While using any is certainly generic in that it will cause the function to accept any and all types for the type of arg, we actually are losing the information about what that type was when the function returns. If we passed in a number, the only information we have is that any type could be returned.

Instead, we need a way of capturing the type of the argument in such a way that we can also use it to denote what is being returned. Here, we will use a type variable, a special kind of variable that works on types rather than values.

```javascript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("myString"); // type of output will be 'string'

//Here we use type argument inference — that is, we want the compiler to set the value of T for us automatically based on the type of the argument we pass in:
let output = identity("myString"); // type of output will be 'string'
```

























