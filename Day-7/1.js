/**
 * Question 1: OOPs
 * Create a whatsapp as following 
 * Users having contacts and can chat with any contact
 * Messaging in text,audio and video 
 * Users can see status of all the contacts
 * User can post status
 * Status can be text and image
 */


class Messaging {


}

class User {
  constructor(name, userId, contacts, sentMessages, recievedMessage) {
    this.name = name,
      this.id = userId,
      this.contacts = contacts,
      this.sentMessages = sentMessages
    this.recievedMessage = recievedMessage
  }

  /**
   * This method takes the user id and send the message to the perticular user associated with that id
   * @param {string} id id of the user to send the message
   * @param {string} message message to the user
   */

  sendMessage(id, message) {
    // console.log(this.sentMessages)
    console.log(contacts, id)

  }

  /**
   * 
   * @param {string} id of the user to send the message 
   * @param {string} message Message to send to a perticular user
   */

  recievMessage(id, message) {

  }

}

let contacts = [
  {
    "name": "Hrithik",
    "userId": "#12345"
  },
  {
    "name": "ABC",
    "userId": "#12346"
  },
  {
    "name": "GHI",
    "userId": "#12983"
  },
  {
    "name": "LIO",
    "userId": "#74238"
  },
  {
    "name": "FOG",
    "userId": "#9420938"
  },

]

let sentMessages = {
  "hrithik": ["Hello?", "How Are You"],
  "BCD": ["ABC", "DEF", "ERF", "Hello"],
  "DEF": ["How are You Bro?"]
}
let recievedMessage = {
  "hrithik": ["Hello?", "How Are You"],
  "BCD": ["ABC", "DEF", "ERF", "Hello"],
  "DEF": ["How are You Bro?"]
}

let userOne = new User("ABC", "#EHF21", contacts, sentMessages, recievedMessage)
userOne.sendMessage(contacts[0].userId, "Hello")