/*
class
*/



/**
 * @param {string} name Name of the person
 * @param {number} numberOfVehicles Number of vehicle
 * @param {string} carName Name of the car
 * @param {string} bikeName Name of the bike
 * @param {string} carColor Color of the car
 * @param {string} bikeColor Color of the Bike
 * @param {number} numberOfCars Number of the cars
 * @param {number} numberOfBikes Number of the bikes
 */


class Vehicle {

}


class Car extends Vehicle {
  constructor() {
    super()
    console.log(this)
  }
}

class Bike extends Vehicle {
  constructor() {

  }

}

class Person extends Vehicle {
  constructor() {
    super()
    console.log(this)
  }

  getTheVehicleDetails() {
    if (this.numberOfVehicles > 1) {
      console.log(`${this.name} has ${this.numberOfCars} ${this.carColor} color ${this.carName} car and ${this.numberOfBikes} ${this.bikeColor} ${this.bikeName} bike `)
    }
    else {
      this.carName === undefined ?
        console.log(`${this.name} has ${this.numberOfBikes} ${this.bikeColor} color ${this.bikeName} bike`)
        :
        console.log(`${this.name} has ${this.numberOfCars} ${this.carColor} color ${this.carName} car`)
    }
  }
  //
}
let vehicle = [
  {
    brandName: "BMW",
    color: "red",
    type: "car"
  },
  {
    brandName: "Mercedeze",
    color: "blue",
    type: "car"
  },
  {
    brandName: "BMW",
    color: "red",
    type: "bike"
  },
  {
    brandName: "TVS",
    color: "red",
    type: "bike"
  },
]

let hrithikVahicleDetails = new Person("Hrithik", vehicle)


