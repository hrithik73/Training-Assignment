/*
We need to find manufacturing cost of a box.

There are  5 type of Box.
1. Universal
2. AllFlapMeeting
3. HoneyComb
4. ReverseTuckIn
5. TopOpening SnapLock

Each Box has some basic properties :  length,height,width,area, flute;
A box can either use pins or pasting() to join.
A box can either single part or double part.
there are 7 types of flute : A,B,C,E,F,G and B(B is mostly used).
a flute has gsm and extra gsm;
you need to calcuate cost of a box  : area * totalGSM * ExtraGSM * stitching cost (if double part cost is multiplied by 3)
where as Area : length * width * hight
and total GSM : extraGSM + GSM * 100;
and Extra GSM For Flute :
A = 10,B = 30,C = 20,E = 40,F =50,G = 20
and stitching cost :
1.if box has a pin then  :  10rs per pin
2.if box has a pasting then cost is : 
    1. Universal : 20
    2. AllFlapMeeting : 30
    3. HoneyComb : 40
    4. ReverseTuckIn : 40
    5. TopOpening SnapLock = 50
   
*/

/**
 * Constant class to have all the constants
 * In a real life application we can have a specific folder for constants such as config/constans.js 
 */
class Constant {
  static getExtraGSMValues() {
    const EXTRA_GSM_VALUES = {
      "A": 10,
      "B": 30,
      "C": 20,
      "E": 40,
      "F": 50,
      "G": 20
    }
    return EXTRA_GSM_VALUES
  }
  static getPinCost() {
    const PIN_COST = 10
    return PIN_COST
  }

  static getPastingCost() {
    const PASTING_COST = {
      "Universal": 20,
      "AllFlapMeeting": 30,
      "HoneyComb": 40,
      "ReverseTuckIn": 40,
      "TopOpeningSnapLock": 50
    }
    return PASTING_COST
  }
}

/**
 * Base class to extend in every class because all the classes are Box
 */
class Box {
  /**
   * @param {number} length length of the Box
   * @param {number} height Height of the Box 
   * @param {number} width width of the box
   * @param {number} GSM Gsm of the box
   * @param {string} type type contains the type of box   
   * @param {Array} flute flutes
   */

  constructor(length, height, width, GSM, type, flute) {
    this.length = length
    this.height = height
    this.width = width
    this.GSM = GSM
    this.type = type
    this.flute = flute
    console.log(this)
  }

  /**
   * This method will calculate and returns the area of the box
   * @returns {number} Area of the Box
   */

  getAreaOfTheBox() {
    return this.length * this.height * this.width
  }

  getExtraGSM() {
    // Getting Constant value for ExtraGSM
    const extraGSMValues = Constant.getExtraGSMValues()
    // ExtraGSM for the perticular flute
    let extraGMS = extraGSMValues[this.flute]
    return extraGMS
  }

  calculateTotalGSM() {
    // Calculating the totalGSM using this formula "total GSM : extraGSM + GSM * 100"
    let totalGSM = this.getExtraGSM() + (this.GSM * 100)
    return totalGSM
  }

  /**
   * Method to calculate the Stiching Cost it checks weather it is Pin or Pasting and then calculate accordingly
   * @param {string} type contains the type of the box   
   * @param {Boolean} isPin if Pin than "True" otherwise "False" if false then it means the box is "Pasting" 
   * @param {Number} numberOfPins Number of pins the the box has
   * @param {Number} numberOfPasting Number of pasting the box has 
  */
  getStichingCost(type, isPin, numberOfPins, numberOfPasting) {
    if (isPin) {
      let pinCost = Constant.getPinCost()
      let stichingCost = pinCost + numberOfPins
      console.log(stichingCost)
      return stichingCost

    }
    let pastingCost = Constant.getPastingCost()
    let stichingCost = pastingCost[type] * numberOfPasting
    return stichingCost
  }

  /**
   * Method to calculate manufacturing cost
   * @param {Boolean} hasDoublePart true if it has the double part otherwise false
   */

  getManufactCost(hasDoublePart) {

    //cost of a box  : area * totalGSM * ExtraGSM * stitching cost (if double part cost is multiplied by 3)
    let area = this.getAreaOfTheBox()
    let totalGSM = this.calculateTotalGSM()
    let extraGSM = this.getExtraGSM()
    let stichingCost = this.getStichingCost(universalObject.type, false, 5, 5)

    let costOFtheBox = area * totalGSM * extraGSM * stichingCost

    if (hasDoublePart) {
      return costOFtheBox * 3
    }
    return costOFtheBox
  }

}

class Universal extends Box {

}
class AllFlapMeeting extends Box {

}
class HoneyComb extends Box {

}
class ReverseTuckIn extends Box {

}
class TopOpeningSnapLock extends Box {

}

/**
 * Creating  objects and Method callings
*/
let universalObject = new Universal(20, 30, 40, 200, "Universal", "B")
// console.log(universalObject)
universalObject.calculateTotalGSM()
let manufacturingPriceOfUniversal = universalObject.getManufactCost(true)
console.log({ manufacturingPriceOfUniversal })