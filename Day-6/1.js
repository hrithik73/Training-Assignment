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
  constructor(name, constName, carName, driverName, spendingLimit, amountSpent) {
    super()
    this.name = name
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
  constructor(name, constName, carName, driverName, spendingLimit, amountSpent) {
    super()
    this.name = name
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
    this.aircraftName = this.aircraftName
  }
}

/**
 * @param {object} mpOfNoida Object of the MP 
 * @param {object} homeMinister Object of the Minister
 * @param {object} pmOfIndia Object of the PM
 * @param {boolean} hasPmPermission Boolian if the comissioner have the permission of PM to arrest minister 
 */
class Commisioner {
  constructor(mpOfNoida, homeMinister, pmOfIndia, hasPmPermission) {
    this.mpOfNoida = mpOfNoida
    this.homeMinister = homeMinister
    this.pmOfIndia = pmOfIndia
    this.hasPmPermission = hasPmPermission
  }

  canArrest() {
    this.mpOfNoida.amountSpent > this.mpOfNoida.spendingLimit ?
      console.log("Comissioner can Arrest MP")
      :
      console.log("Comissioner can not Arrest MP")

    if (this.homeMinister.amountSpent > this.homeMinister.spendingLimit && this.hasPmPermission) {
      console.log("Comissioner can arrest Minister")
    }
    else {
      console.log("Comissioner can not arrest Minister")
    }
  }
}

// Spending limit cnstants
const PM_SPENDING_LIMIT = 10000000
const MINISTER_SPENDING_LIMIT = 1000000
const MP_SPENDING_LIMIT = 100000

//Objects and method calls for MP
let mpOfNoida = new MP("Mahesh Sharma", "Greater Noida", "Mercedez Benz", "Sumit", MP_SPENDING_LIMIT, 1000)
mpOfNoida.getDriver()
mpOfNoida.getConstituency()
let isMPSpendingLimitExceeded = mpOfNoida.checkExceedsSpendingLimit()
console.log({ isMPSpendingLimitExceeded })
console.log("--------------------------------------------------------------")

//Objects and method calls for Minister
let homeMinister = new Minister("Amit Shah", "Gandhinagar", "BMW", "Mahesh", MINISTER_SPENDING_LIMIT, 10000000)
homeMinister.getDriver()
homeMinister.getConstituency()
let isMinisterSpendingLimitExceeded = homeMinister.checkExceedsSpendingLimit()
console.log({ isMinisterSpendingLimitExceeded })
console.log("--------------------------------------------------------------")

//Objects and method calls for PM
let pmOfIndia = new Minister("Narendra Modi", "Rajkot", "Mercedes", "Ramesh", PM_SPENDING_LIMIT, 100000000, "Air India One")
pmOfIndia.getDriver()
pmOfIndia.getConstituency()
let isPMSpendingLimitExceeded = pmOfIndia.checkExceedsSpendingLimit()
console.log({ isPMSpendingLimitExceeded })
console.log("--------------------------------------------------------------")

//Objects and method calls for PM
let commisonerOfDelhi = new Commisioner(mpOfNoida, homeMinister, pmOfIndia, true)
commisonerOfDelhi.canArrest()