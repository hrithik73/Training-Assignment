/*
Suppose a class VegetableBill keeps track of a list of vegetables being purchased at a market:

Method/Constructor    Description
public VegetableBill(Employee clerk)    constructs a VegetableBill object for the given clerk
public void add(Item i)    adds i to this bill's total
public double getTotal()    returns the cost of these items
public void printReceipt()    prints a list of items

VegetableBill objects interact with Item objects. An Item has the following public methods:
Method/Constructor    Description
public double getPrice()    returns the price for this item
public double getDiscount()    returns the discount for this item
For example, Onion item might cost 1.35 with a discount of 0.25 for preferred customers, meaning that preferred customers get it for 1.10. 
(Some items will have no discount, 0.0.) Currently the above classes do not consider discounts. Every item in a bill is charged full price, 
and item discounts are ignored.

Define a class DiscountBill that extends VegetableBill to compute discounts for preferred customers. 
The constructor for DiscountBill accepts a parameter for whether the customer should get the discount.
Your class should adjust the amount reported by getTotal for preferred customers. For example, 
if the total would have been $80 but a preferred customer is getting $20 in discounts, 
then getTotal should report the total as $60 for that customer.
You should also keep track of how many items a customer is getting a non-zero discount for and the overall discount, 
both as a total amount and as a percentage of the original bill. Include the extra methods below that allow a client to ask about the discount:

Method/Constructor    Description
public DiscountBill(Employee clerk, boolean preferred)    constructs bill for given clerk
public int getDiscountCount()    returns the number of items that were discounted, if any
public double getDiscountAmount()    returns the total discount for this list of items, if any
public double getDiscountPercent()    returns the percent of the total discount as a percent of what the total would have been otherwise
If the customer is not a preferred customer the DiscountBill behaves at all times as if there is a total discount of 0.0 
and no items have been discounted.
*/


class Item {
  /**
   * 
   * @param {Object} itemDetails this object contains the details of a perticular Item
   */
  constructor(itemDetails) {
    this.hasDiscount = itemDetails.hasDiscount
    this.discountAmount = itemDetails.discountAmount
    this.price = itemDetails.price
  }

  getDiscount() {
    return this.price - this.discountAmount
  }

  getPrice() {
    return this.price
  }

}

class VegetableBill {

  /**
   * 
   * @param {Object} employeDetails This object contains the Empoloye details
   */
  constructor(employeDetails) {
    this.employeDetails = employeDetails
    this.totalAmount = 0
    this.totalDiscountAmount = 0
    this.totalDiscountCount = 0
    this.totalDiscountPercentage = 0

    this.items = [
      {
        "id": "3847",
        "vegitableName": "Onion",
        "price": 30,
        "hasDiscount": true,
        "discountAmount": 10
      }

    ]

  }

  add(itemToAdd) {
    this.items.push(itemToAdd)

    let item = new Item(itemToAdd)
    let price = item.getDiscount()
    console.log({ price })
    this.totalAmount = this.totalAmount + price
    this.totalDiscountCount = this.totalDiscountCount + 1
  }

  getTotal() {
    this.totalAmount
  }

  printReceipt() {
    console.log(this.items)
  }

}


/**
 * This class extends the VegetablBill class 
*/

class DiscountBill extends VegetableBill {

  /**
   * @param {Object} employeDetails 
   * @param {Boolean} preferred 
   */

  constructor(employeDetails, preferred) {
    super()
    this.employeDetails = employeDetails
    this.preferred = preferred
    // console.log(this)
  }

  getDiscountCount() {
    if (!this.preferred) {
      return 0
    }
    return this.totalDiscountCount

  }
  getDiscountAmount() {
    if (!this.preferred) {
      return 0.0
    }
    this.totalDiscountAmount
  }

  getDiscountPercent() {
    if (!this.preferred) {
      return 0
    }
    // Total *(percent/100)=totalDiscountAmount

    let percentage = (this.totalDiscountAmount * 100) / this.totalAmount
    return percentage
  }

  // OverRiding the getTotal() method for Preffered Custummers 
  getTotal() {
    if (this.preferred) {

    }
  }

}


/**
 * Dummy data for our program in real-world this data can come from User Input and some from database
 */
let employeDetails = {
  "name": "Ramesh",
  "DOB": "20-10-1990",
  "post": "clerk"
}

let itemToAdd = {
  "id": "3847",
  "vegitableName": "Lady Fingers",
  "price": 50,
  "hasDiscount": true,
  "discountAmount": 5
}

let billForRamesh = new DiscountBill(employeDetails, true)
billForRamesh.add(itemToAdd)
billForRamesh.getTotal()
// console.log(billForRamesh)
// billForRamesh.printReceipt()
console.log(billForRamesh)

let discountAmount = billForRamesh.getDiscountAmount()
let discountCount = billForRamesh.getDiscountCount()
let discountPercent = billForRamesh.getDiscountPercent()

// console.log({ discountAmount, discountCount, discountPercent })