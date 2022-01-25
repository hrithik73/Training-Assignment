// Convert the following JSON into class
let json = {
  "firstName": "John",
  "lastName": "Smith",
  "age": 25,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": 10021
  },
  "phoneNumbers": [
    {
      "type": "home",
      "number": "212 555-1234"
    },
    {
      "type": "fax",
      "number": "646 555-4567"
    }
  ]
}

// JSON.parse(json)
// console.log(json)

class Address {
  constructor(streetAddress, city, state, postalCode) {
    this.streetAddress = streetAddress
    this.city = city
    this.state = state
    this.postalCode = postalCode
  }
}

// Writing the Class for above JSON
class Employee {
  constructor() {
    this.firstName = "John"
    this.lastName = "Smith"
    this.age = 25
    this.address = new Address("21 2nd Street", "New York", "NY", 10021)
    this.phoneNumbers = [
      {
        "type": "home",
        "number": "212 555-1234"
      },
      {
        "type": "fax",
        "number": "646 555-4567"
      }
    ]

  }
}

let instance = new Employee()
console.log(instance)
