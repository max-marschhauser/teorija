THIS keyword
BIND, CALL, APPLY
CONSTRUCTOR FUNCTION
USE GETTERS AND SETTERS TO CONTROL ACCESS TO AN OBJECT
PROTOTYPE AND PROTOTYPAL INHERITANCE
INSTANCE METHODS
instanceof


OBJEKTNO ORIJENTRANO PROGRAMIRANJE

unutar objekta se postave propertiji i metode
propertiji su poput varijabli, a metode poput funkcija, s tim da ne moram pisati argumente funkcije već ih pozivam s this riječi
npr.
let employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage: function() {
    return this.baseSalary + (this.overtime * this.rate);
  }
};
employee.getWage();

konstruktor funkcija se pišu s velikim početnim slovom

function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
  }
}
const another = new Circle(1);


for u objektima
for ( let key in circle ) {
  console.log(key, circle[key]);
  }   // prvi u console logu ispiše key, a drugi value
const keys = Object.keys(circle); // sve keyeve objekta stavi u jedan array

if ( "radius" in circle ) {console.log("Circle has a radius.");}



crow instanceof Bird; --> vraća true ako je crow nastao od Bird objekta

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for (let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}


Bird.prototype.numLegs = 2; --> da se kod ne bi ponavljao kod svake Bird instance pojedinačno, već je kod svih zajednički

You have now seen two kinds of properties: own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.

MOGUĆE DODATI PROTOTYPE NA VEĆ POSTOJEĆI OBJEKT, ali uvijek treba nanovo definirati constructora jer bi se inače obrisao
Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  } 
};


Bird.prototype.isPrototypeOf(duck);




In previous lessons, you learned that an object can inherit its behavior (methods) from another object by referencing its prototype object:

ChildObject.prototype = Object.create(ParentObject.prototype);
Then the ChildObject received its own methods by chaining them onto its prototype:

ChildObject.prototype.methodName = function() {...};


MIXINS
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line
let glideMixin = function(obj) {
  obj.glide = function(){};
}

glideMixin(bird);
glideMixin(boat);