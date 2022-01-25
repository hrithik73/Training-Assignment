/**
 * Question 2: Convert these classes into JSON parse
  public class Employee {    
    String name;  
    int salary;  
    Boolean married;
    String grade = null;
    Address address;
  List<String> mobileNumbers;
  Map<String, Object> Address;
}
public class Address {
 String primaryAddress;
 String secondaryAddress;
 String country;
 String state;
}
 */
class Address {
  constructor(address) {
    this.primaryAddress = address.primaryAddress
    this.secondaryAddress = address.secondaryAddress
    this.state = address.state
    this.country = address.country
  }
}

class Employee {
  constructor(name, salary, married, grade, address, mobileNumbers,) {
    this.name = name
    this.salary = salary
    this.married = married
    this.grade = grade
    this.address = new Address(address)
    this.mobileNumbers = mobileNumbers
    this.addressMAP = address
  }
}
let address = {
  "primaryAddress": "Beta-1",
  "secondaryAddress": "Greater Noida",
  "state": "UP",
  "country": "India"
}

let AddressObject = new Address(address)
JSON.stringify(AddressObject)
console.log(AddressObject)
console.log(typeof (AddressObject))

let EmployeeOject = new Employee("Hrithik", 1000000, false, "A", address, ['9113140154', '1221312312', '1231231231'])
JSON.stringify(EmployeeOject)
console.log(EmployeeOject)
console.log(typeof (EmployeeOject))



