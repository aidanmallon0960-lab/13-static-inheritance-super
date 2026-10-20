//inheritance - one of the key properties of OOP (object oriented programming).
//it allows a class to inherit properties and methods from another class (called a parent or superclass)

//a parent class contains general properties and methods
//a child class can use those properties and methods automatically
//a child class can also add its own unique properties and methods

class Athlete {
  alive = true;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  training() {
    console.log(`${this.name} is training`);
  }

  injured() {
    console.log(`${this.name} is injured`);
  }
}

class SoccerPlayer extends Athlete {
  type = "Soccer Player";
  constructor(name, age, runSpeed){
    super(name, age) //calls the parent constructor
    this.runSpeed = runSpeed
  }
  kickBall(){
    console.log(`The ${this.name} is kicking the ball`)
    // our soccer player will get injured:
    super.injured();
    this.injured();
  }
}
class BaseballPlayer extends Athlete {
  type = "Baseball Player";
  constructor(name, age, batSpeed){
    super(name, age)
    this.batSpeed = batSpeed
  }
  hitBall(){
    console.log(`The ${this.name} is hitting the ball`)
  }
}

/**
 * A class that extendes athlete to be used for hockey players
 */
class HockeyPlayer extends Athlete {
  type = "Hockey Player";
  constructor(name, age, skateSpeed){
    super(name, age)
    this.skateSpeed = skateSpeed
  }
  skate(){
    console.log(`The ${this.name} is skating`)
  }
}

let sp = new SoccerPlayer("David", 18, 8);
let bp = new BaseballPlayer("Billy", 16, 12);
let hp = new HockeyPlayer("Jamie", 17, 97);
sp.training()
bp.training()
hp.training()

sp.kickBall()

hp.skate()