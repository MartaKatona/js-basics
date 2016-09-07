/* Create a `myName` variable and assign it a String value */
var myName = 'Crescendi';
console.log('myName:', myName);

/* Create a `person` variable and give it 2 properties,
 * `name`, assign it the same name as before,
 * as well as an `age` (number);
 */
var person = {
  name: 'Crescendi',
  age: 100
};



/* Create a variable called `canDrive`,
 * if it should be true if your person object is at least 16 years old
 */
 var canDrive = false;
 if (person.age >= 16) {
    canDrive = true;
 }
 console.log('can person drive:', canDrive);

/* Create a function called `greet`,
 * it should take a 1 parameter, `name`
 * and it should print "Hello, my name is {name}"
 */
 var greet = function (name) {
    var say = 'Hello, my name is ';
    return console.log(say + name);
 };

 greet('Marta');

/* Create an array called `dataTypes` with atleast 1 of every data type;
 * (there are 6 different data types);
 */

 var dataTypes = [1,'array',true,null,undefined,[1,2,3],{weather:'rainy',temperature:78,highSurf:false}];
 for (var i = 0; i < dataTypes.length; i++) {
      console.log(i,'  ',dataTypes[i]);
 }

/* Create a `dog` object
 * it should have a `bark` function that makes your dog bark!
 * It should also have a name attribute with the value of 'Spot'
 */
var noises = ['ahoy','cool','yiha'];
var dog = {
  name: 'Spot',
  bark: function (){
      //var barking = '';
      //for (var i = 0; i < noises.length; i++) {
        //barking += noises[i] + ' ';
        //console.log('barking',barking);
      //}
      return console.log ('My name is ' + dog.name + ', ' + noises[0] + '!');
    }
  };
dog.bark();

