CSS

na slike mogu staviti filter i neki efekt, a onda kod hovera mogu napraviti da se taj efekt promijeni (npr. slika je po defaultu filter:greyscale(100%) contrast(200%); transition: filter .35s ease;, a kad se hovera da bude filter:greyscale(0%) contrast(100%) ).

na ikone mogu staviti filter:invert(100%) za problem light i dark moda

REACT

<suspense fallback={<div>Loading...}>
<neka asynchronous komponenta, poput fetch data>
</suspense>

TYPESCRIPT

Simple types
let firstName: string = "Dylan";

Special types
any, never, unknown, undefined, null

Array
const names: string[] = [];
const names: only string[] = ["Dylan"];

Tuple
A tuple is a typed array with a pre-defined length and types for each index.
let ourTuple: [number, boolean, string];
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
const graph: [x: number, y: number] = [55.2, 41.3];
destructuring tuples
const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;

Object
const car: { type: string, model: string, year: number } = {
type: "Toyota",
model: "Corolla",
year: 2009
};
Optional property - properties are properties that don't have to be defined in the object definition
const car: { type: string, mileage?: number } = { // no error
type: "Toyota"
};
car.mileage = 2000;
Index signature - can be used for objects without a defined list of propertie
const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.

Enums
An enum is a special "class" that represents a group of constants (unchangeable variables).
Numeric Enum
By default, enums will initialize the first value to 0 and add 1 to each additional value.
enum CardinalDirections {
North,
East,
South,
West
}
You can set the value of the first numeric enum and have it auto increment from that.
enum CardinalDirections {
North = 1,
East,
South,
West
}
You can assign unique number values for each enum value. Then the values will not incremented automatically.
enum StatusCodes {
NotFound = 404,
Success = 200,
Accepted = 202,
BadRequest = 400
}
Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.
enum CardinalDirections {
North = 'North',
East = "East",
South = "South",
West = "West"
};

Aliases and Interfaces
Aliases and Interfaces allows types to be easily shared between different variables/objects.

Union types
Union types are used when a value can be more than a single type. Such as when a property would be string or number.
let code: string | number

Functions
TypeScript has a specific syntax for typing function parameters and return values.
Return type
// the `: number` here specifies that this function returns a number
function getTime(): number {
return new Date().getTime();
}
The type void can be used to indicate a function doesn't return any value.
Parameters
function multiply(a: number, b: number) {
return a \* b;
}
Named Parameters
function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
return dividend / divisor;
}

Casting
Casting is a process of overriding a type
let x: unknown = 'hello';
console.log((x as string).length);
