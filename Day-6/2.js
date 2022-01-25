/**
 * Ram have a car and  
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
  constructor(brandName, vehicleNumber, vehicleColor, modelNumber) {
    this.brandName = brandName
    this.vehicleNumber = vehicleNumber
    this.vehicleColor = vehicleColor
    this.modelNumber = modelNumber
  }
}

class Car extends Vehicle {
  constructor(brandName, vehicleNumber, vehicleColor, modelNumber) {
    super()
    this.brandName = brandName
    this.vehicleNumber = vehicleNumber
    this.vehicleColor = vehicleColor
    this.modelNumber = modelNumber
  }
}

class Bike extends Vehicle {
  constructor(brandName, vehicleNumber, vehicleColor, modelNumber) {
    super()
    this.brandName = brandName
    this.vehicleNumber = vehicleNumber
    this.vehicleColor = vehicleColor
    this.modelNumber = modelNumber
  }

}

class Person {
  constructor(name) {
    this.name = name
    this.car = new Car("Mercedese", "DL-04 1999", "red", "Benz XYZ")
    this.bike = new Bike("BMW", "UP-16 1999", "black", "HayaBusa",)
  }

  getTheVehicleDetails() {
    console.log(`${this.name} has ${this.car.brandName} ${this.car.vehicleColor} car`)
    console.log(`${this.name} has ${this.bike.brandName} ${this.bike.vehicleColor} bike`)
  }
  //
}

let hrithikVahicleDetails = new Person("Hrithik")
hrithikVahicleDetails.getTheVehicleDetails()


