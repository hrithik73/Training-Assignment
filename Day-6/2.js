/**
 * 
 suppose you are making a program for a very famous IoT Inverter company,
 company have multiple inverters with multiple business logic,

 use cases:
 company have PCU, GTI, Zelio, Regalia, iCruze Inverters,
 All Inverters have Power rating which is determined by ( Current * Operating Voltage )
 Only PCU, GTI and Regalia are solar Inverters other are not (solar inverters get charge by solar panels and solar energy),
 Solar Inverters have Solar Panels also
 Solar Inverters further have two option one Battery version that whatever energy is produced will be stored in battery other will 
 not store any energy,so PCU comes with battery but GTI have no battery,
 Solar Inverter also have GRID On , system where you can sell your extra energy back, GTI is GRID On where as this feature is 
 not available in PCU,
 Non Solar Inverters are Simple Home Inverters Which have a Battery, 
*/

class Inverter {
  constructor(isSolar) {
  }
  getPowerRating(current, operatingVoltage) {
    let powerRating = current * operatingVoltage
    return powerRating
  }

}

class PCU extends Inverter {
  // Solar Inverter
  constructor() {


  }
}

class GTI extends Inverter {
  // Solar Inverter

}
class Zelio extends Inverter {


}
class Regalia extends {
  // Solar Inverter
}

class iCruze {

}

let PCUInverter = new PCU()