CSS

na slike mogu staviti filter i neki efekt, a onda kod hovera mogu napraviti da se taj efekt promijeni (npr. slika je po defaultu filter:greyscale(100%) contrast(200%); transition: filter .35s ease;, a kad se hovera da bude filter:greyscale(0%) contrast(100%) ).

na ikone mogu staviti filter:invert(100%) za problem light i dark moda

TYPESCRIPT

Simple types
let firstName: string = "Dylan";

Special types
any, never, unknown, undefined, null

Array
const names: string[] = [];
const names: readonly string[] = ["Dylan"];

Tuple
A tuple is a typed array with a pre-defined length and types for each index.
let ourTuple: [number, boolean, string];
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
const graph: [x: number, y: number] = [55.2, 41.3];
destructuring tuples
const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;
