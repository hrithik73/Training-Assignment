/**
 * Question 1: OOPs
 * Create a whatsapp as following 
 * Users having contacts and can chat with any contact
 * Messaging in text,audio and video 
 * Users can see status of all the contacts
 * User can post status
 * Status can be text and image
 */

class Contact {
  constructor(name, phoneNumber, lastSeen, status) {
    this.name = name
    this.phoneNumber = phoneNumber
    this.lastSeen = lastSeen
    this.status = []
  }

}

class ChatService {
  SendMessage(senderId, receiverId, msg) {
    sentMessages.append(messageTypes)
  }
  ReceiveMessage() {
    zx
    
  }

}

/**
 * @param {String} phoneNumber phone number can be used as the unique Id
 * @param {Array<string>} contacts Array of string containing
 * @param {Object<Array>} sentMessages Map of contacts as id and Array of Sent Messages as Value
 * @param {Object<Array>} recievedMessages Map of contacts as id and array of recieved Message as Value
 * @param {Object<Array>} status Map of contacts 
 */

class User {
  constructor(phoneNumber, contacts, sentMessages, recievedMessages, status) {
    this.phoneNumber = phoneNumber
    this.contact = contacts
    this.sentMessages = sentMessages
    this.recievedMessages = recievedMessages
    this.status = status
  }
}
let sentMessages = [
  {
    name: "Hrithik",
    userId: "@1234",
    messageArray: ["Hello", "How are you?", "How can i help you?"]
  },
  {
    name: "ABC",
    userId: "@1235",
    messageArray: ["Hello", "How are you?", "How can i help you?"]
  },
  {
    name: "DEF",
    userId: "@12376",
    messageArray: ["Hello", "How are you?", "How can i help you?"]
  }

]

let recievedMessages = [
  {
    name: "Hrithik",
    userId: "@123",
    messageArray: ["Hello", "How are you?", "How can i help you?"]
  },
  {
    name: "ABC",
    userId: "@12398",
    messageArray: ["Hello", "How are you?", "How can i help you?"]
  },
  {
    name: "DEF",
    userId: "@128723493",
    messageArray: ["Hello", "How are you?", "How can i help you?"]
  }
]

let messageTypes = {
  "TEXT": "TEXT",
  "IMAGE": "IMAGE",
  "VIDEO": "VIDEO"
}

let userOne = new User("#1232GH", sentMessages, recievedMessages)
userOne.SendMessage(messageTypes.IMAGE, "Hello", contacts[0])
userOne.ReceiveMessage(messageTypes)
