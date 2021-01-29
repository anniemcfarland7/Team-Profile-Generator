// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./employee');

class Engineer extends Employee {
  constructor() {
    super(id, 4, 'beep');
    this.color = color;
    this.passengers = passengers;
    github  // GitHub username


getGithub()


getRole() // Overridden to return 'Engineer'cn
  }

  useHorn() {
    console.log(this.sound);
  }

  checkPassengers() {
    if (this.passengers.length > 4) {
      console.log(
        'This car only seats 4 people. You have too many passengers!'
      );
    } else {
      console.log(`You have room for ${4 - this.passengers.length} people.`);
    }
  }
}

const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  'Lao-Tzu',
  'Plato',
];

const car = new Car(15, 'blue', carPassengers);

console.log('---CAR---');
car.printInfo();
car.useHorn();
car.checkPassengers();
