//inheritance - one of the key properties of OOP (object oriented programming).
//it allows a class to inherit properties and methods from another class (called a parent or superclass)

//a parent class contains general properties and methods
//a child class can use those properties and methods automatically
//a child class can also add its own unique properties and methods

class Athlete {
  alive = true;

  training() {
    console.log(`${this.name} is training`);
  }

  injured() {
    console.log(`${this.name} is injured`);
  }
}

class SoccarPlayer extends Athlete {
  name = "Soccar Player";
  kickBall(){
    console.log(`The ${this.name} is kicking the ball`)
  }
}
class BaseballPlayer extends Athlete {
  name = "Baseball Player";
  hitBall(){
    console.log(`The ${this.name} is hitting the ball`)
  }
}

/**
 * A class that extendes athlete to be used for hockey players
 */
class HockeyPlayer extends Athlete {
  name = "Hockey Player";
  skate(){
    console.log(`The ${this.name} is skating`)
  }
}

let sp = new SoccarPlayer();
let bp = new BaseballPlayer();
let hp = new HockeyPlayer();
sp.training()
bp.training()
hp.training()

hp.skate()