/*
Assignment Tasks:
- Sove using OOPS concepts
1:- Abstraction
2:- Encapsulation
3:- Polymorphism
4:- Inheritance
5:- Association
6:- Aggregation
7:- Composition 

Task 1 :
Write a program to depict Indian Politics.
Consider the politics use cases:
MP: is a person who won from a constituency

getConstituency - return their winning constituency.
getDriver - returns the driver assigned for their vehicle(default car).
exceedsSpendingLimit - returns true or false if Mps exceeds to their spending limit.

PM -> Ministers -> MP(All of them are MPS) - PM has special permissions such as it can give permission to arrest any minister.
PM enjoys special benefits such as Aircraft (along with car) and its designated driver.

Note: PM spending limit: 1 crore, Ministers: 10 lakhs, MP: 1 lakh.
Need to design in a way  where Commisioner class can arrest MP, Ministers and PM when their expense exceeds their spending limit:

canArrest - can arrest one or many MP.  
Note:-
If PM  cant arrest.
If minister can arrest with PM permission
if mps they can be arrested without anyones permission.
In Short, If the MP is not PM then he can be arrested by commisoner ,
If he is minister then can be arrested with PMs permisison.
*/

/**
 * Base class to inherit in every class
 * @param {String} name Name of the Person
 */
class Person {
  constructor(name) {
    this.name = name
  }
}

class Vehicle {
  constructor(color, VehicleNumber) {
    this.color = color
    this.VehicleNumber = VehicleNumber
  }

}

class Car extends Vehicle {
  constructor(color, VehicleNumber, driverName) {
    this.color = color
    this.VehicleNumber = VehicleNumber
    this.driverName = driverName
  }
  getDriver() {
    return this.driverName
  }
}

class Aircraft extends Vehicle {
  constructor(color, VehicleNumber, pilotName) {
    super()
    this.color = color
    this.VehicleNumber = VehicleNumber
    this.pilotName = pilotName
  }
}

/**
 * Using the inheritace by using "extend"
 * @param {String} name Name of the MP
 * @param {String} constName Name of the constituency from where he is MP
 * @param {String} carName Name of the Car
 * @param {String} driverName Name of the Driver
 * @param {Number } spendingLimit Limit of the funds to spend
 * @param {Number} amountSpent The Amount of fund have spent by the MP
*/

class MP extends Person {
  constructor(name, post, constName, carName, driverName, spendingLimit, amountSpent) {
    super()
    this.name = name
    this.post = post
    this.constName = constName
    this.carName = carName
    this.driverName = driverName
    this.spendingLimit = spendingLimit
    this.amountSpent = amountSpent
  }
  getConstituency() {
    console.log(`The winning constituency of the ${this.name} is:- ${this.constName}`)
  }
  getDriver() {
    console.log(`The Driver of the ${this.name} is ${this.driverName}`)
  }
  checkExceedsSpendingLimit() {
    if (this.amountSpent > this.spendingLimit) {
      return true
    }
    return false
  }
}

class Minister extends MP {
  constructor(name, post, constName, carName, driverName, spendingLimit, amountSpent) {
    super()
    this.name = name
    this.post = post
    this.constName = constName
    this.carName = carName
    this.driverName = driverName
    this.spendingLimit = spendingLimit
    this.amountSpent = amountSpent
  }
}
/**
 * PM has the additional benifits such as aircraft and privillage to give permision ot arrest MP or Minister
 * All the Params of the MP and minister with following addition
 * @param {string} aircraftName Name of the aircraft assigned to PM
 */

class PM extends Minister {
  constructor(name, constName, carName, driverName, spendingLimit, amountSpent, aircraftName) {
    super()
    this.name = name
    this.constName = constName
    this.carName = carName
    this.driverName = driverName
    this.spendingLimit = spendingLimit
    this.amountSpent = amountSpent
    this.aircraftName = new Aircraft("red", "MH-100 9901", aircraftName)
  }

  getPermission(homeMinister) {
    if (homeMinister.checkExceedsSpendingLimit())
      return true
  }
}


class Commisioner {
  constructor() { }

  /**
   * @param {Object} Object of the MP or Minister 
   * @param {Boolean} hasPmPermission 
   * @returns 
   */

  canArrest(objectToCheck, hasPmPermission) {


    if (!hasPmPermission) {
      return false
    }

    if (objectToCheck.post === "MP" && objectToCheck.checkExceedsSpendingLimit())
      console.log("Commisioner can arrest MP")

    if (objectToCheck.post === "Minister" && objectToCheck.checkExceedsSpendingLimit() && hasPmPermission) {
      console.log("Comissioner can Arrest Minister")
    }

  }
}

// Spending limit cnstants
const PM_SPENDING_LIMIT = 10000000
const MINISTER_SPENDING_LIMIT = 1000000
const MP_SPENDING_LIMIT = 100000

// Instantiating all the class
let commisonerOfDelhi = new Commisioner()
let pmOfIndia = new PM("Narendra Modi", "Rajkot", "Mercedes", "Ramesh", PM_SPENDING_LIMIT, 100000000, "Air India One")
let mpOfNoida = new MP("Mahesh Sharma", "MP", "Greater Noida", "Mercedez Benz", "Sumit", MP_SPENDING_LIMIT, 1000)
let homeMinister = new Minister("Amit Shah", "Minister", "Gandhinagar", "BMW", "Mahesh", MINISTER_SPENDING_LIMIT, 10000000)

//method calls for MP
mpOfNoida.getDriver()
mpOfNoida.getConstituency()
commisonerOfDelhi.canArrest(mpOfNoida)
console.log("--------------------------------------------------------------")

//method calls for Minister
homeMinister.getDriver()
homeMinister.getConstituency()
commisonerOfDelhi.canArrest(homeMinister, pmOfIndia.getPermission(homeMinister))
console.log("--------------------------------------------------------------")

//method calls for PM
pmOfIndia.getDriver()
pmOfIndia.getConstituency()
console.log("--------------------------------------------------------------")
