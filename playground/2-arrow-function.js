// const square = function (x) {
//   return x * x;
// };

// const square = (x) => x * x;

// console.log(square(3));
// console.log(square(5));

const event = {
  name: "Birthday Party",
  guestList: ['Alex','Jose','Jesus'], 
  //New valid syntax for writing functions in objects
  printGuestList() {
    //arrow functions do not bind this values, So no arrow functions with methods (properties that are functions)
    console.log("Guest List for " + this.name);
    //arrow functions allows this statements to access parent scope variables (regular function statement binds this within the scope of function) 
    this.guestList.forEach((guest) => {
      console.log(guest + ' is attending ' + this.name)
    })
  },
};

event.printGuestList()
